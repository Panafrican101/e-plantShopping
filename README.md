# Paradise Nursery — e-plantShopping

[![React Version](https://img.shields.io/badge/react-v18.x-61dafb?logo=react)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/redux--toolkit-v2.x-764abc?logo=redux)](https://redux-toolkit.js.org/)
[![Vite](https://img.shields.io/badge/vite-v5.x-646cff?logo=vite)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Welcome to **Paradise Nursery**, an immersive, high-performance e-commerce frontend web application dedicated to houseplant enthusiasts. This platform bridges the gap between botanical curiosity and digital convenience, offering users a fully interactive journey from discovery to checkout preparation.

---

## Repository Target
* **Official Repository Name:** `e-plantShopping`
* **Project Codename:** Paradise Nursery Storefront

---

## 📖 Project Overview & Intent

The **e-plantShopping** application provides a seamless, state-driven storefront built entirely using modern React architecture. Designed for indoor plant lovers, the application features an immersive entry point that transitions into a deeply categorized product showcase. 

By avoiding complex multi-page routing overhead, the application uses local view switches backed by global data stores, ensuring lightning-fast updates, zero page reloads, and absolute visual synchronicity across components.

---

## 🚀 Key Features

### 1. Welcome Landing Page (`App.jsx` & `AboutUs.jsx`)
* **Atmospheric Design:** Rich, visual-gradient landing background loaded via optimized CSS styles.
* **Corporate Mission Statement:** Dedicated "About Us" panel reflecting our commitment to green environments and sustainable shipping.
* **Call to Action:** An optimized "Get Started" gatekeeping button that immediately moves users directly to the shop floor.

### 2. Categorized Product Catalog (`ProductList.jsx`)
* **Broad Selection:** Features 18 unique individual houseplant variations.
* **Structured Taxonomy:** Items are grouped systematically across 3 operational care tiers:
  * *Air Purifying* (e.g., Snake Plant, Peace Lily)
  * *Low Maintenance* (e.g., ZZ Plant, Pothos)
  * *Statement Pieces* (e.g., Fiddle Leaf Fig, Monstera)
* **Smart UI Controls:** Individualized product action buttons dynamically mutate state to "Added to Cart" and lock (`disabled = true`) once selected to prevent unintended redundant items.

### 3. State-Synchronized Navigation Layout
* **Global Navigation:** Header toolbar pinned universally across view states (`position: sticky`).
* **Dynamic Counter Badge:** Integrates a reactive shopping cart widget displaying cumulative quantities updated in real-time by store actions.

### 4. Interactive Shopping Cart (`CartItem.jsx` & `CartSlice.jsx`)
* **Granular Controls:** Quick-access inline increment (`+`) and decrement (`-`) mechanisms.
* **Subtotal Engine:** Real-time multi-tier calculation parsing individual quantities against base unit pricing.
* **Safe Deletion:** Interactive removal triggers that safely clean out entries, automatically refreshing global balances.
* **Workflow Back-Tracking:** Single-click "Continue Shopping" fallback that safely preserves cart state while returning the user to their last location in the catalog.

---

## 🛠️ Tech Stack Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 18+ | Declarative UI structure and high-speed component lifecycle rendering. |
| **Build & Tooling** | Vite | Rapid Hot Module Replacement (HMR) and optimized distribution builds. |
| **State Container** | Redux Toolkit | Centralized, deterministic data store managing immutable mutation actions. |
| **Design Engine** | Native CSS3 | Smooth layout distributions using Flexbox, CSS Grid, and custom transitions. |
| **Iconography** | Lucide React | Uniform SVG vector icons for cart, deletion, and volume markers. |

---

## 📂 Project Directory Structure

```text
e-plantShopping/
├── public/                  # Static assets and public resources
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx      # Company background, mission statement and values
│   │   ├── CartItem.jsx     # Detailed shopping cart review table and control links
│   │   └── ProductList.jsx  # Structured plant catalog split into care categories
│   ├── store/
│   │   └── CartSlice.jsx    # Slice specifying Redux action methods (add, remove, update)
│   ├── App.css              # Main stylesheets, hero background images, and layout rules
│   ├── App.jsx              # Application shell containing root navigation flow switches
│   └── main.jsx             # Entry script compiling React DOM inside the Redux Provider wrapper
├── Package.json             # App scripts and dependency definitions
└── README.md                # Repository documentation manual