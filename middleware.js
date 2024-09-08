const ExpressError = require("./utils/ExpressError.js");
const Listing = require("./models/listing");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in to create a listing");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

// Validation middleware
module.exports.validateListing = (req, res, next) => {
    console.log("Request Body:", req.body); // Log request body for debugging
    let { error } = listingSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg));
    } else {
        next();
    }
};

module.exports.isOwner = async (req, res, next) => {
    try {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        if (!listing) {
            return next(new ExpressError(404, "Listing not found"));
        }
        if (!listing.owner._id.equals(req.user._id)) {
            req.flash("error", "You don't have permission to edit this listing");
            return res.redirect(`/listings/${id}`);
        }
        next();
    } catch (err) {
        next(err);
    }
};

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);

    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        next(new ExpressError(400, errMsg));
    } else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    try {
        let { id, reviewId } = req.params;
        const review = await Review.findById(reviewId);
        if (!review) {
            return next(new ExpressError(404, "Review not found"));
        }
        if (!review.author.equals(req.user._id)) {
            req.flash("error", "You are not the author of this review");
            return res.redirect(`/listings/${id}`);
        }
        next();
    } catch (err) {
        next(err);
    }
};
