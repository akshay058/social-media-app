# Social Media App (MERN Stack)

Welcome to the Social Media App, a full-stack web application for connecting with friends, sharing posts, and engaging with a vibrant community. Built using the MERN stack (MongoDB, Express.js, React, Node.js), this app provides a platform for users to interact and stay connected.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

1. **User Authentication**:
   - Register and log in securely.
   - User profile management.

2. **Create and Share Posts**:
   - Create, edit, and delete posts.
   - Add images, text, and links to posts.
   - Share posts with friends and followers.

3. **Like and Comment**:
   - Like and unlike posts.
   - Add comments to posts.
   - Interact with other users through comments and likes.

4. **News Feed**:
   - View a personalized news feed with posts from friends and followed users.
   - Stay updated with the latest posts.

5. **User Profiles**:
   - Explore user profiles.
   - View posts, followers, and following lists.
   - Follow and unfollow users.

6. **Real-time Notifications**:
   - Receive real-time notifications for new likes and comments.
   - Stay engaged with the community.

7. **Responsive Design**:
   - Enjoy a seamless experience on desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Redux, Material-UI
- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Real-time Updates**: WebSocket (e.g., Socket.io)
- **Styling**: CSS, SCSS

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: [Download and install Node.js](https://nodejs.org/).
- **MongoDB**: [Install MongoDB](https://docs.mongodb.com/manual/installation/).

## Getting Started

To get the Social Media App up and running, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/akshay058/social-media-app.git

2. Navigate to the project directory:

   ```bash
   Copy code
   cd social-media-app

3. Install server dependencies:

   ```bash
  Copy code
  cd server
  npm install
  
4. Install client dependencies:

   ```bash
  Copy code
  cd ../client
  npm install

5. Configure Environment Variables:

 Create a .env file in the server directory and add the following environment variables:

   ```plaintext
    PORT=3001
    MONGODB_URI=mongodb://localhost:27017/socialmedia
    JWT_SECRET=yoursecretkey
    
- Replace yourusername with your MongoDB database name and yoursecretkey with a secret key for JWT token generation.
  

- Create a .env file in the client directory and add the following environment variable:
   ```plaintext
   REACT_APP_API_URL=http://localhost:3001/api

6. Start the server:

   ```bash
  cd server
  npm start
  

7. Start the client:

   ```bash
  cd client
  npm start


8. Open your browser and access the application at http://localhost:3000.

## Usage
- Register for a new account or log in with an existing one.
- Create posts, like and comment on posts, and interact with other users.
- Explore user profiles, follow/unfollow users, and view your news feed.
- Receive real-time notifications for likes and comments.
- Enjoy a responsive design that adapts to different screen sizes.


## Folder Structure

The project folder structure is as follows:

```bash
social-media-app/
  ├── client/                # Frontend (React)
  ├── server/                # Backend (Express.js)
  ├── README.md              # This README file
  └── ...


## Contributing
Contributions are welcome! Please follow the Contributing Guidelines.

## License
This project is licensed under the MIT License.

## Contact
If you have any questions or suggestions, please contact on Linkedin.