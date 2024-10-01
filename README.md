# 📚 General Library Application
This General Library Application is designed to manage and streamline the operations of a library. It enables administrators to manage books, users, and transactions effectively, while allowing users to browse the catalog, check availability, and view their transaction history.
# 🌟 Features
## Admin Features:
## Manage Books:
Admins can add, update, or remove books from the library catalog.

## Manage Users: 
Admins have the ability to add or remove users.

## Issue/Return Books: 
Admins can issue or return books for users, managing due dates and availability status.

## Transaction Management: 
View, track, and manage book transactions, including issuing and returning history.

## User Features:

## Browse Catalog: 
Users can browse through the available books and check their availability.

## View Transaction History: 
Users can view their history of issued and returned books.

## Search Functionality: 
Search books by title, author, or category.
## Authentication:

1) Admins and Users have separate login portals with appropriate role-based access controls.
2) JWT Authentication for secure access to admin and user panels.

## Responsive Design:
The application is fully responsive, ensuring a seamless experience across different devices, including desktops, tablets, and smartphones.
## ⚙️ Tech Stack
## Frontend:

React.js for the user interface.
Tailwind CSS for responsive and modern styling.
React Router for navigation.
## Backend:

Node.js with Express.js for handling API requests.
MongoDB for the database, storing book details, user info, and transactions.
Mongoose for schema management.
## Authentication:
JWT (JSON Web Tokens) for secure user authentication.

## Additional Tools:
Postman for API testing.
Git for version control.
### 📂 Database Structure
### Books: 
Stores information about books, including:

Book Name
Author
Availability Status
### Users: 
Contains user details like:
Username
Name
Email
Contact Number
### Admin Users: 
Stores admin information:
Username
Name
Password
Email
Contact Number
### Library Transactions: 
Tracks all book transactions:

User Details
Book Details
Transaction Type (Issue/Return)
Due Date

## Project Views
  ### Registration Form
Here first Restration Form It Has a two features From that page user can Register if he want to manage the all those this in library or if he want make a bussiness and one more thing the user also Register by selecting Radio Buttons
![image](https://github.com/user-attachments/assets/e6ce16d8-767c-41ae-9c00-eeefaabbdc7f)
  ### Login Form :
  Here Also same thing in that user and Admin Login with they Respective Creadentials
  ![image](https://github.com/user-attachments/assets/4f17934b-eede-46e3-8da4-cf03661cc393) 

If the User Or Admin Login Without Selection they Radio Button it will shows a Pop up like this 
![image](https://github.com/user-attachments/assets/cd9f3b46-6cd5-43cc-8e93-94a8d0dc952b)
### Home Page Of the Application
![image](https://github.com/user-attachments/assets/bfb49e8e-f170-4d09-bf55-6f59927c7368)
### Admin Add New Book UI is 
![image](https://github.com/user-attachments/assets/7c85c018-eb37-4bbe-a36f-194c830392b7)

### Update Page Of Book
![image](https://github.com/user-attachments/assets/f80fcfd4-0186-40c0-9fb0-867636d68b85)

