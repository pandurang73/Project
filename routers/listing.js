const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const listingController = require("../controllers/listing.js");

// New route (make sure this comes before ID-based routes)
router.get("/new", isLoggedIn, listingController.renderNewForm);

// Index and create route combined
router.route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("image"),  // Adjusted to match the form input field name
        validateListing,
        wrapAsync(listingController.createListing)
    );

// Show, update, and delete route combined
router.route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single("image"),  // Adjusted to match the form input field name
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

// Edit route (make sure this comes after ID-based routes)
router.get("/:id/edit", isLoggedIn, upload.single("image"), isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;
