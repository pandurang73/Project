const Listing = require("../models/listing");
const Review = require("../models/review");

module.exports.createReview = async (req, res, next) => {
    let listing = await Listing.findById(req.params.id);
    if (!listing) {
        return next(new ExpressError(404, "Listing not found")); // Proper error handling
    };

    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
console.log(newReview); 
    newReview.listing = listing._id;

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success", "Review added!");

    res.redirect(`/listings/${listing._id}`);
};

module.exports.destroyReview = async (req, res, next) => {
    let { id, reviewId } = req.params;

    const listing = await Listing.findById(id);
    if (!listing) {
        return next(new ExpressError(404, "Listing not found")); // Proper error handling
    }

    const review = await Review.findById(reviewId);
    if (!review) {
        return next(new ExpressError(404, "Review not found")); // Proper error handling
    }

    listing.reviews.pull(reviewId);
    await listing.save();
    await Review.findByIdAndDelete(reviewId);

    req.flash("success", "Review deleted...");

    res.redirect(`/listings/${id}`);
};