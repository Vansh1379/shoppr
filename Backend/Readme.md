Here’s a separate README for the **Shoppr Backend** repository:

---

# Shoppr Backend

The backend of **Shoppr**, an e-commerce platform that enables users to browse and purchase products. This backend is built with Node.js and Express, using PostgreSQL for data storage and Prisma as the ORM. The backend provides APIs for managing products, handling user authentication, and processing orders, integrated with Razorpay for payment processing and Nodemailer for email notifications.

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

The Shoppr backend provides RESTful APIs for the frontend to manage user accounts, products, cart, and orders. It handles authentication via JWT and secures payment processing using Razorpay. Nodemailer is used to send email notifications upon user sign-in and other actions.

## Features

- **User Authentication**: Secure user login, registration, and JWT-based session management.
- **Product Management**: Create, read, update, and delete (CRUD) operations on products.
- **Order Processing**: API to handle user orders and integrate with Razorpay for payments.
- **Email Notifications**: Sends automated emails upon user actions like sign-in.
- **Secure Payments**: Razorpay integration for secure transactions.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer
- **Validation**: Zod

## File Structure

```plaintext
Backend
│
├── prisma/                   # Prisma schema and migrations
│   ├── migrations/           # Database migrations
│   └── schema.prisma         # Database schema
├── src/
│   ├── controllers/          # Controllers for handling API logic
│   ├── middlewares/          # Middleware for authentication and error handling
│   ├── routes/               # API routes
│   ├── services/             # Services for business logic and external integrations
│   └── index.ts              # Main entry point
├── .env                      # Environment variables
└── package.json              # Project dependencies
```

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Vansh1379/Shoppr-Backend.git
   ```

2. **Install Dependencies**

   - Navigate to the backend directory and run:

     ```bash
     npm install
     ```

3. **Configure Environment Variables**

   - Set up the `.env` file in the root of the backend directory with necessary configurations like database URL, JWT secret, Razorpay keys, and email credentials.

4. **Run Database Migrations**

   - Initialize the database schema with Prisma:

     ```bash
     npx prisma migrate deploy
     ```

5. **Start the Development Server**

   ```bash
   npm run dev
   ```

## Usage

- **User Authentication**: Secure routes using JWT. Sign-up and login endpoints generate and validate tokens.
- **Product Management**: CRUD operations for managing product data, accessible by admins.
- **Order Processing**: Place orders through the order API, which integrates with Razorpay for payment.
- **Email Notifications**: Sends emails to users on sign-in and other defined actions using Nodemailer.

## Deployment

The backend is deployed on Render, providing stable and reliable access for the frontend application.

## Contact

For any questions or feedback, please reach out:

- **Email**: [Your Email Address]
- **GitHub**: [Your GitHub Profile]

---

Let me know if you'd like to add any additional details!