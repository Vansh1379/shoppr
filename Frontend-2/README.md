# Shoppr Frontend

This is the frontend of **Shoppr**, an e-commerce platform that allows users to browse products, manage their cart, and complete secure purchases. Built with React, Vite, TypeScript, and Tailwind CSS, the frontend integrates with the backend for authentication, product management, and payment processing.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [File Structure](#file-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contact](#contact)

## Project Overview

The Shoppr frontend provides an interactive and user-friendly interface for users to browse and purchase products. The application connects with the Shoppr backend for data and uses Razorpay for secure payments. JWT-based authentication is implemented to ensure secure access to user-specific data.

## Features

- **User Authentication**: Secure sign-up, login, and logout.
- **Product Display**: View a list of products with detailed information.
- **Cart Management**: Add, update, and remove items from the cart.
- **Payment Processing**: Secure payment handling with Razorpay integration.
- **Notifications**: Real-time toast notifications for a better user experience.

## Tech Stack

- **Framework**: React (with Vite)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **HTTP Requests**: Axios
- **Notifications**: Sooner
- **Language**: TypeScript

## File Structure

```plaintext
Frontend
│
├── public/                 # Public assets (static images, icons)
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

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Vansh1379/Shoppr-Frontend.git
   ```

2. **Install Dependencies**

   - Navigate to the frontend directory and run:

     ```bash
     npm install
     ```

3. **Configure Environment Variables**

   - Set up the `.env` file in the root of the frontend directory with the required environment-specific configurations.

4. **Start the Development Server**

   ```bash
   npm run dev
   ```

## Usage

- **Sign Up / Sign In**: Users can create an account or log in with existing credentials. JWT is used to authenticate users and protect their sessions.
- **Browse Products**: Users can browse through various products, view detailed information, and filter items.
- **Cart Management**: Add products to the cart, modify quantities, or remove them as desired.
- **Checkout**: Complete the purchase using Razorpay’s secure payment processing.
- **Notifications**: Get real-time feedback on actions like adding items to the cart, signing in, or completing a purchase.

## Deployment

The frontend is deployed on Vercel and accessible at [Shoppr Frontend](https://shoppr-beta.vercel.app).

## Contact

For any questions or feedback, please reach out:

- **Email**: vanshkalra1379@gmail.com