# Shoppr

**Shoppr** is a modern e-commerce platform where users can explore, add to cart, and purchase a variety of products securely. The platform includes full authentication and authorization, secure payments, and in-app notifications for a smooth user experience.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Architecture](#architecture)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Contact](#contact)

## Project Overview

Shoppr provides a complete online shopping experience where users can browse products, manage a cart, and make purchases. The platform uses JWT for secure authentication, Razorpay for payment processing, and integrates in-app notifications for an interactive and user-friendly experience.

## Features

- **Product Browsing**: View a catalog of products with detailed information.
- **Authentication**: Secure sign-in and sign-up using JWT.
- **Cart Management**: Add, update, or remove items in the cart.
- **Checkout**: Integrated Razorpay for secure payment processing.
- **Notifications**: Real-time toast notifications using Sooner.
- **Order Confirmation**: Users receive confirmation upon successful purchase.

## Tech Stack

### Frontend
- **Framework**: React (with Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Requests**: Axios
- **Notifications**: Sooner
- **Language**: TypeScript

### Backend
- **Framework**: Node.js with Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Token)
- **Payments**: Razorpay
- **Email Notifications**: Nodemailer
- **Language**: TypeScript

## File Structure

### Frontend

```plaintext
Frontend
│
├── public/                 # Public assets
├── src/
│   ├── assets/             # Static assets like images and icons
│   ├── components/         # Reusable components organized by feature
│   │   ├── cart/           # Cart-related components
│   │   ├── Modals/         # Modals used across the application
│   │   └── Skeletons/      # Skeleton loaders for better UX
│   ├── hooks/              # Custom hooks for managing state and logic
│   ├── pages/              # Pages that define main routes
│   ├── styles/             # Custom CSS styles
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point for the app
│   └── vite-env.d.ts       # TypeScript environment definitions for Vite
├── .env                    # Environment variables
└── package.json            # Project dependencies
```

### Backend

```plaintext
Backend
│
├── prisma/
│   ├── migrations/         # Prisma migration files
│   └── schema.prisma       # Prisma schema definition
├── src/
│   ├── controllers/        # Request handlers for different API endpoints
│   ├── middlewares/        # Middleware functions for authentication and validation
│   ├── routes/             # API route definitions
│   ├── services/           # Business logic and service layer
│   └── index.ts            # Main entry point for the server
├── .env                    # Environment variables
└── package.json            # Project dependencies
```

## Architecture

### Frontend

The frontend is built with React and Vite for a quick development cycle and better performance. Key components include:

- **Product Display**: Components to display products, filtering options, and product details.
- **Cart Management**: A dedicated cart component to view, add, update, or remove products.
- **Authentication**: JWT-based authentication handled in the frontend, with protected routes for secure access.
- **Routing**: React Router DOM enables navigation across pages, such as product details, cart, and checkout.
- **HTTP Requests**: Axios is used for API communication, handling requests for product data, authentication, and order processing.
- **Notifications**: In-app notifications powered by Sooner for real-time updates on actions.

### Backend

The backend follows a service-oriented architecture with a layered structure:

- **Controllers**: Handle HTTP requests and manage responses.
- **Services**: Contain the core business logic for operations like managing users, products, cart, and orders.
- **Middlewares**: Handle authentication using JWT and validate user inputs for secure transactions.
- **Database**: Managed by Prisma ORM connected to a PostgreSQL database for data persistence.
- **Payments**: Razorpay is used for handling secure payments, with an order ID generated and verified upon successful transactions.
- **Email Notifications**: Nodemailer sends out account and order confirmation emails to enhance user engagement.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Vansh1379/Shoppr.git
   ```

2. **Install Dependencies**

   - Navigate to both the frontend and backend directories and run:

     ```bash
     npm install
     ```

3. **Configure Environment Variables**

   - Set up the `.env` files in both the frontend and backend with your environment-specific configurations (database credentials, JWT secret, Razorpay keys, email settings, etc.).

4. **Run Migrations (Backend)**

   ```bash
   npx prisma migrate dev
   ```

5. **Start the Development Servers**

   - Frontend:

     ```bash
     npm run dev
     ```

   - Backend:

     ```bash
     npm run dev
     ```

## Usage

- **Sign Up / Sign In**: Users can create an account or sign in. Upon signing in, a JWT token is issued for secure access.
- **Browse Products**: View available products, with details and filtering options.
- **Cart Management**: Add products to the cart, adjust quantities, or remove items as needed.
- **Checkout**: Securely complete purchases through Razorpay.
- **Notifications**: Receive real-time feedback on actions such as adding to the cart, signing in, or completing a purchase.

## API Endpoints

| Endpoint               | Method | Description                               |
|------------------------|--------|-------------------------------------------|
| `/api/auth/signup`     | POST   | Registers a new user                      |
| `/api/auth/signin`     | POST   | Authenticates a user and provides a JWT   |
| `/api/products`        | GET    | Retrieves a list of available products    |
| `/api/products/:id`    | GET    | Retrieves details of a specific product   |
| `/api/cart`            | POST   | Adds items to the cart                    |
| `/api/cart`            | GET    | Retrieves items in the user’s cart        |
| `/api/checkout`        | POST   | Initiates Razorpay checkout for payment   |
| `/api/orders`          | GET    | Retrieves order history for the user      |

## Deployment

- **Frontend**: Deployed on Vercel at [Shoppr Frontend](https://shoppr-beta.vercel.app)
- **Backend**: Deployed on Render

## Contact

For any questions or feedback, please reach out:

- **Email** vanshkalra1379@gmail.com

---
