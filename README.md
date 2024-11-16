## Garage Manager Client
This is a garage management client project built with Angular. The system allows basic management of garage data, including viewing, adding, and deleting garages. It is designed to work with the Garage Manager Server backend, so ensure the server is running to retrieve and manage data.

## Main Features
View Garages: Displays a list of all garages in the system.
Add a Garage: Allows adding a new garage to the system.
Delete a Garage: Allows deleting an existing garage by its unique identifier.
Note: Currently, the system does not support updating (editing) existing garage data.

## Project Architecture
The project is organized as follows:

components: Contains reusable UI components, such as forms for adding and deleting garages.
services: Manages communication with the backend server for performing CRUD operations (except update) on garage data.
store: Handles state management using NgRx, centralizing and streamlining state changes.
models: Defines TypeScript interfaces, ensuring strong typing and consistency for data structures.
Technologies
Angular: Frontend framework for building dynamic web applications.
NgRx: Library for reactive state management, using Redux patterns for predictable state handling.
TypeScript: Adds static typing to improve code quality and maintainability.
Angular Material (if applicable): Provides a clean and responsive design with ready-to-use UI components.

## Installation and Setup
Clone the Project Repository
git clone https://github.com/chavi-bernstein/garage-manager.git
cd garage-manager

Set up the Environment
Make sure the backend server is running. Follow the setup instructions in the Garage Manager Server repository to start the server.

Install Dependencies
npm install

Run the Project
ng serve
