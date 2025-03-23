# Placemark Venue Management System

Placemark is a full-stack web application for managing and organizing venue information. It allows users to create, edit, and categorize venues while providing administrative capabilities for system management.

## URL
https://placemark-sl2m.onrender.com/

## Features

- **User Authentication**: Secure login and registration system with role-based access control
- **Venue Management**: Create, view, update, and delete venues
- **Categorization**: Organize venues by custom venue types
- **Location Data**: Store and display geographical coordinates for venues
- **Image Uploads**: Add images to venues using Cloudinary integration
- **Administrative Panel**: User management and system statistics for administrators
- **Responsive Design**: Mobile-friendly interface using Bulma CSS framework
- **RESTful API**: Access data programmatically with Swagger documentation

## Technologies

- **Backend**: Node.js with Hapi.js framework
- **Database**: MongoDB Atlas (cloud-hosted)
- **View Engine**: Handlebars
- **Authentication**: @hapi/cookie and JWT
- **Validation**: Joi
- **Image Storage**: Cloudinary
- **UI Framework**: Bulma CSS
- **API Documentation**: Swagger/OpenAPI via hapi-swagger

## Installation

### Prerequisites

- Node.js (v14+)
- MongoDB (local instance or Atlas connection)
- Cloudinary account (for image uploads)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/placemark.git
   cd placemark
   ```

2. Install dependencies:

3. Create a .env file in the project root with the following variables:

4. Start the application:

## Deployment

The application is configured for deployment on Render or similar platforms:

1. Set up a new Web Service on Render pointing to your GitHub repository
2. Configure the build command: npm install
3. Configure the start command: node src/server.js
4. Add all environment variables from your .env file
5. Deploy the service

## Usage

### User Functions

- Register a new account or login
- View the dashboard to see your venue types
- Create new venue types to categorize your venues
- Add venues with details like name, type, contact info, location, and description
- Upload images for venues
- Edit or delete venues as needed

### Admin Functions

- Access the admin panel via the navbar (admin role required)
- View all users in the system
- Delete users if necessary
- View system statistics (total venues, venue types, and users)

## API Documentation

API documentation is available at /documentation when the application is running. This provides a Swagger UI interface for exploring and testing the API endpoints.

## License

MIT License

## Contributors

Shaun Walsh

## Acknowledgments

- Hapi.js - Web framework
- MongoDB - Database
- Bulma - CSS framework
- Cloudinary - Image hosting service
