# Paradise Nursery 🌿

Paradise Nursery is a React-based online houseplant shopping application.

The application allows users to browse a collection of houseplants, organized into different categories, add plants to a shopping cart, adjust quantities, remove products, and view the total cost of their cart.

## Features

- Landing page with Paradise Nursery branding
- Background image on the landing page
- About Us section
- Get Started button
- Product listing page
- 18 houseplants organized into 3 categories
- Plant thumbnail, name, description, and price
- Add to Cart functionality
- Disabled Add to Cart button after selection
- Dynamic shopping cart quantity
- Redux Toolkit state management
- Shopping cart page
- Increase plant quantity
- Decrease plant quantity
- Delete plants from the cart
- Individual item totals
- Overall cart total
- Continue Shopping button
- Checkout button with Coming Soon message
- Responsive design

## Plant Categories

### Aromatic Plants

- Lavender
- Rosemary
- Mint
- Basil
- Lemongrass
- Thyme

### Medicinal Plants

- Aloe Vera
- Snake Plant
- Peppermint
- Chamomile
- Eucalyptus
- Ginger

### Decorative Plants

- Peace Lily
- Monstera
- Spider Plant
- Pothos
- Calathea
- Rubber Plant

## Technologies Used

- React
- JavaScript
- React Router
- Redux Toolkit
- React Redux
- Vite
- CSS
- GitHub Pages

## Project Structure

```text
src/
├── components/
│   ├── AboutUs.jsx
│   ├── Navbar.jsx
│   └── ProductList.jsx
│
├── pages/
│   └── CartItem.jsx
│
├── redux/
│   ├── CartSlice.jsx
│   └── store.js
│
├── data/
│   └── plants.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
└── images/
    └── Plant images
```

## Redux Cart Functionality

The application uses Redux Toolkit to manage shopping cart state.

The cart supports:

* Adding products
* Increasing quantity
* Decreasing quantity
* Removing products
* Calculating total quantity
* Calculating total cost

## Running the Project Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available through the local Vite development URL.

## Build

To create a production build:

```bash
npm run build
```

## Author

Muhammad Huzaifa Yousaf

## Project

Paradise Nursery Shopping Application