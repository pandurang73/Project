Wanderlust

Wanderlust is a full-stack web application inspired by Airbnb that allows users to add unique places to stay, explore various listings, and book accommodations. This project was developed as part of Apna College’s Sigma Course, under the guidance of Shraddha Ma’am.

Table of Contents

Introduction

Features

Tech Stack

Getting Started

Usage



Credits



Introduction

Wanderlust aims to provide a seamless platform for users looking to explore and share unique travel accommodations. Inspired by platforms like Airbnb, it allows users to list new places, browse existing options, and book stays through an intuitive interface.

Features

User Authentication: Sign up, log in, and manage user profiles securely.

Place Listings: Users can add new listings with images, descriptions, and locations.

Interactive Maps: Integrated Mapbox for displaying location data.

Media Storage: Uses Cloudinary for efficient and scalable image management.

Booking System: Allows users to book available listings.

Search and Filter: Search by location, type, and other parameters to find ideal stays.

Responsive Design: User-friendly design that adapts to both mobile and desktop screens.


Tech Stack

Frontend

HTML, CSS, JavaScript

React.js (Optional: Add if you used React for frontend components)


Backend

Node.js with Express.js

MongoDB Atlas for cloud-based database management


APIs and Integrations

Cloudinary for storing and managing images

Mapbox for location and map data

Additional APIs as needed for specific features


DevOps

GitHub Actions for CI/CD workflows


Getting Started

Prerequisites

Node.js installed on your machine

MongoDB Atlas account

Cloudinary account for image storage

Mapbox API key


Installation

1. Clone the repository:

git clone https://github.com/pandurang73/Project.git
cd wanderlust


2. Install dependencies:

npm install


3. Environment Variables: Set up a .env file at the root of your project with the following variables:

PORT=your_port_number
MONGODB_URI=your_mongodb_atlas_uri
CLOUDINARY_URL=your_cloudinary_url
MAPBOX_TOKEN=your_mapbox_token


4. Run the Application:

npm start


5. Visit the Application: Open http://localhost:your_port_number in your browser.



Usage

1. Sign Up / Log In: Create a user account to access the platform’s features.


2. Browse Listings: Search and filter through various accommodations.


3. Add New Listings: List a new place with images, location, and description.


4. Book a Stay: Select an available listing and proceed with booking.





Credits

Special thanks to:

Shraddha Ma’am for guidance and mentorship through Apna College's Sigma Course.

Apna College for the learning resources and support.




Feel free to edit any section to better suit the specifics of your project! Let me know if you'd like to add any more details.
