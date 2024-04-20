# FYP Recipe Generator

Welcome to FYP Recipe Generator, your go-to tool for discovering and generating delicious recipes!

## Introduction

FYP Recipe Generator is a web application developed as a final year project (FYP). It consists of a frontend developed in React and a backend developed in Java Spring Boot. The project aims to assist users in finding recipes based on their dietary preferences, available ingredients, and cooking time constraints.

## Features

- **Recipe Search:** Easily search for recipes by keywords, ingredients, or cuisine types.
- **Customization:** Filter recipes based on dietary restrictions such as vegetarian, vegan, gluten-free, etc.
- **Ingredient Matching:** Input the ingredients you have on hand, and the Recipe Generator will suggest recipes that utilize those ingredients.
- **Cooking Time:** Specify your desired cooking time, and the Recipe Generator will recommend recipes that fit within that timeframe.
- **Save and Favorite:** Save your favorite recipes for future reference or easy access.
- **Responsive Design:** Enjoy a seamless user experience across various devices, including desktops, tablets, and smartphones.

## Getting Started

To get started with FYP Recipe Generator, follow these steps:

1. Clone the repository to your local machine:


2. Navigate to the project directory:


3. **Frontend Setup:**
   - Navigate to the `frontend` directory:
     ```
     cd frontend
     ```
   - Install frontend dependencies:
     ```
     npm install
     ```
   - Start the frontend server:
     ```
     npm start
     ```

4. **Backend Setup:**
   - Navigate to the `backend` directory:
     ```
     cd backend
     ```
   - Install backend dependencies (assuming Maven is installed):
     ```
     mvn clean install
     ```
   - Start the backend server:
     ```
     java -jar target/your-backend-jar-file.jar
     ```

5. Open your web browser and visit `http://localhost:3000` to view the application.

## Docker Setup

To run the application using Docker, follow these steps:

1. Make sure Docker is installed on your machine.

2. Build the Docker images:


3. Start the Docker containers:


4. Access the application at `http://localhost:3000`.

## Usage

Once the application is up and running, you can start exploring recipes by performing searches, filtering by dietary preferences, and inputting your available ingredients. Follow the on-screen instructions to generate recipes, save your favorites, and enjoy cooking delicious meals!

## Contributing

Contributions to FYP Recipe Generator are welcome! If you have ideas for new features, improvements, or bug fixes, feel free to open an issue or submit a pull request. For major changes, please discuss them with the project maintainers first.

## License

This project is licensed under the [MIT License](LICENSE).
