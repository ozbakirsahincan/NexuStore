Why Do We Use Collections Instead of Tables?
While tables (SQL) follow a specific structure (schema), collections (MongoDB) offer more flexible structures and store data in the form of documents.

MongoDB's goal is to move away from the rigid structure of SQL databases and provide a more flexible, fast, and scalable solution. This is why the term "collection" is used in MongoDB instead of "table."

PRODUCT MANAGEMENT APPLICATION
This project is a product management application built using React.js (frontend) and Express.js (backend). The application performs basic CRUD operations such as listing, adding, updating, and deleting products.

FEATURES
Product Listing: View all products.

Product Addition: Add new products.

Product Update: Update existing products.

Product Deletion: Delete products.

Themes: Light and dark theme support.

Responsive Design: Design optimized for mobile and desktop devices.

BACKEND STRUCTURE
1. Product Model
Defines the schema for the product collection in MongoDB.

Features:

name: Product name (String, required).

price: Product price (Number, required).

image: Product image (String, required).

timestamps: Automatically records creation and update dates.

2. Product Controllers
Functions that manage all the business logic related to products.

Features:

getProducts: Lists all products.

createProduct: Adds a new product.

updateProduct: Updates an existing product.

deleteProduct: Deletes a product.

3. Product Routes
Defines the API endpoints.

Features:

GET /api/products: Lists all products.

POST /api/products: Adds a new product.

PUT /api/products/:id: Updates a product with a specific ID.

DELETE /api/products/:id: Deletes a product with a specific ID.

FRONTEND COMPONENTS
1. Navbar
The navigation bar located at the top of the application. It includes a title that redirects to the home page, a button to add new products, and a theme toggle button.

Features:

Home Page Link: Clicking on the "Product Store" title redirects to the home page.

Add Product Button: Redirects to the CreatePage.

Theme Toggle Button: Switches between light and dark themes.

2. HomePage
The main page where all products are listed. Products are displayed in card format using the ProductCard component.

Features:

Product List: Displays products fetched from the API.

Responsive Grid: Displays products in 1 column on small screens, 2 columns on medium screens, and 3 columns on large screens.

No Products Message: If no products are found, a message is displayed prompting the user to add a new product.

3. CreatePage
The page used to add new products. It collects product name, price, and image URL from the user.

Features:

Form Fields: Input fields for product name, price, and image URL.

Add Product Button: Saves the new product to the database and displays a success or error message to the user.

4. ProductCard
A component that displays each product in a card format. It handles product updates and deletions.

Features:

Product Information: Displays the product name, price, and image.

Update Button: Opens a modal to update product information.

Delete Button: Deletes the product from the database and informs the user about the result.

5. App
The main component of the application. It brings together all pages and components.

Features:

Routing: Uses React Router for navigation between pages.

Theme Management: Utilizes Chakra UI's theme support to switch between light and dark themes.

6. useProductStore (Zustand Store)
A custom hook that manages all state-related operations for products. Built using the Zustand library.

Features:

Fetch Products: Fetches products from the API and saves them to the state.

Add New Product: Saves a new product to the database and updates the state.

Update Product: Updates an existing product and updates the state.

Delete Product: Deletes a product from the database and updates the state.


How to Run the Project
Follow the steps below to set up and run the project on your local machine.

Prerequisites
Node.js and npm installed on your machine.

MongoDB installed or a MongoDB connection URI.

1. Clone the Repository
First, clone the project repository to your local machine:

bash
Copy
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Set Up the Backend
Navigate to the backend directory:

bash
Copy
cd backend
Install the required dependencies:

bash
Copy
npm install
Create a .env file in the backend directory and add your MongoDB connection URI:

env
Copy
MONGO_URI=mongodb://localhost:27017/product-management
PORT=5000
Start the backend server:

bash
Copy
npm start
The backend server will run on http://localhost:5000.

3. Set Up the Frontend
Open a new terminal window and navigate to the frontend directory:

bash
Copy
cd ../frontend
Install the required dependencies:

bash
Copy
npm install
Start the frontend development server:

bash
Copy
npm run dev
The frontend application will run on http://localhost:3000.

4. Access the Application
Once both the backend and frontend servers are running, open your browser and navigate to:

Copy
http://localhost:3000
You should see the application running, and you can start managing products!

5. Optional: Seed the Database
If you want to populate the database with some sample data, you can create a script or use a tool like Postman to send a POST request to the /api/products endpoint with sample product data.

Example request body:

json
Copy
{
  "name": "Sample Product",
  "price": 100,
  "image": "https://example.com/sample-image.jpg"
}
6. Troubleshooting
Backend not connecting to MongoDB: Ensure that MongoDB is running and the MONGO_URI in the .env file is correct.

Frontend not connecting to Backend: Make sure the backend server is running and the API endpoints are accessible (e.g., http://localhost:5000/api/products).

Dependency issues: Delete the node_modules folder and the package-lock.json file, then run npm install again.