# Paradise Nursery — e-plantShopping

[![React Version](https://img.shields.io/badge/react-v18.x-61dafb?logo=react)](https://react.dev/) [![Redux Toolkit](https://img.shields.io/badge/redux--toolkit-v2.x-764abc?logo=redux)](https://redux-toolkit.js.org/) [![Vite](https://img.shields.io/badge/vite-v5.x-646cff?logo=vite)](https://vitejs.dev/) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Paradise Nursery is a polished React storefront for indoor plants and home greenery. It includes a landing page, categorized product browsing, a Redux-powered cart, and a checkout summary experience.

---

## 🚀 Project Summary

This project demonstrates a frontend-only e-commerce experience using React and Redux Toolkit. Users can:

- browse plants grouped by category
- add products to a shopping cart
- update quantities and remove items
- view a checkout summary and confirm an order

The app is styled with responsive CSS and uses local state to switch between landing, shop, cart, and checkout views.

---

## ✨ Key Features

- **Landing Page** with brand messaging and a shop entry flow
- **About Us** section describing the business mission
- **Product Catalog** with categorized plant cards and price display
- **Global Cart Badge** showing item count in real time
- **Cart Management** with quantity +/-, remove item, and totals
- **Checkout Summary** with order detail, shipping estimate, and confirmation

---

## 🧩 Tech Stack

- React 18
- Vite
- Redux Toolkit
- React Redux
- CSS for responsive layout and cards

---

## 📁 Core Files

- `src/main.jsx` — app entry point and Redux provider setup
- `src/App.jsx` — root layout and landing-to-shop view management
- `src/AboutUs.jsx` — brand/story section for the landing page
- `src/ProductList.jsx` — plant catalog, add-to-cart actions, and page navigation
- `src/CartItem.jsx` — cart review page with quantity controls and remove actions
- `src/Checkout.jsx` — checkout summary page with confirmation
- `src/CartSlice.jsx` — Redux slice for cart state and actions
- `src/App.css` — landing page and application container styling
- `src/ProductList.css` — product grid and UI card styling
- `src/CartItem.css` — cart page styling
- `src/Checkout.css` — checkout summary styling
- `src/AboutUs.css` — about section styling

---

## ▶️ Get Started

```bash
npm install
npm run dev
```

Open the local Vite URL in your browser to explore the app.

---

## ✅ Build for production

```bash
npm run build
```

---

## Notes

- This project is a frontend prototype and does not include backend order processing.
- Product information is stored locally inside `src/ProductList.jsx`.
- The cart flow is managed through Redux state.

---

## 🤝 How to contribute

If you want to extend the storefront: 

- add new plant categories or products in `src/ProductList.jsx`
- improve responsive styling in the component CSS files
- add routing for separate shop, cart, and checkout pages
- connect to a backend API for live product and order data

Contributions are welcome via pull request or issue.

---

## License

MIT
