# E-Commerce Application (React.js)

A responsive e-commerce application built with React.js for browsing products and categories. It presents product collections such as best sellers, sale items, latest products, and top-rated products, with product detail pages that include image galleries, reviews, and related items. The project uses locally defined product data to demonstrate the structure and core patterns of a modern online store.

---

## ✨ Features

- Responsive storefront homepage
- Featured product collections, including best sellers, sale items, latest products, and best-rated products
- Featured product categories
- Category and product detail routes
- Product details with pricing, ratings, tags, and specifications
- Product image gallery with selectable images and active-image indicators
- Product reviews and related product recommendations
- Account, registration, contact, FAQ, and informational page routes
- Reusable layouts and product UI components
- Locally defined product, category, brand, review, and user data

---

## 🛠 Technologies Used

- React.js
- JavaScript (ES6+)
- React Router
- React Context API
- React Hook Form
- Tailwind CSS
- Flowbite
- React Icons
- Vite

---

## 🎯 Learning Objectives

This project helps reinforce:

- Building a multi-page React application
- Creating reusable components and layouts
- Passing data through props and rendering collections dynamically
- Organising product data and related entities
- Implementing client-side routing
- Managing shared application state with React Context
- Creating responsive storefront interfaces

---

## 📚 Project Purpose

The purpose of this project is to build a realistic online-store interface while gaining practical experience with modern React development. The application focuses on organising pages and reusable components, presenting product data, and creating a responsive browsing experience.

By developing the storefront and product detail views, this project explores common e-commerce frontend patterns such as product discovery, category navigation, image galleries, ratings, and related-product recommendations.

---

## Product image gallery

The gallery's image IDs and navigation dots must use the same fragment name. Previously, images used IDs such as `slide-2` while the dots linked to `#slide2`, so clicking a dot did not scroll the image strip to that image. The dots now link to the matching `#slide-2` IDs, restoring navigation between gallery images. The active image's dot is visibly highlighted and exposes `aria-current`; the indicator also updates when the image strip is scrolled or swiped.
