# Node.js Assignment

This repository contains the Node.js assignment project. Follow the instructions below to set up and run the project on your local machine.

## Getting Started

### Technologies Used
- Node.js
- npm (Node Package Manager)
- MongoDB
- Git
- Express

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SagarKapoorin/Nodejs-Assignment.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Nodejs-Assignment
   ```

3. **Create an environment file**
   - Create a file named `.env` in the root of the project directory.
   - Add your MongoDB URL in the `.env` file:
     ```
     MONGO_URL=Your MongoDB URL
     ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Run the project**
   - Using `nodemon` (recommended for development):
     ```bash
     nodemon index.js
     ```
   - Or using `node`:
     ```bash
     node index.js
     ```

## Project Insights

### Why I Chose MongoDB
I chose MongoDB for this project because I am familiar with this database. I find it comfortable to work with due to its flexibility, ease of making changes, and simplicity of use.

### Three Things I Learned from This Assignment
1. **How to create a complex model schema**: This assignment taught me how to design and implement intricate schemas for MongoDB.
2. **How to make changes in interrelated components**: I learned the importance and methods of managing changes in components that are dependent on one another.
3. **How to manage routes if components are interrelated**: This experience helped me understand the complexities of route management in applications with interrelated components.

### Most Difficult Part of the Assignment
The most challenging part of the assignment was making changes and creating components that are interrelated or dependent on each other. Ensuring that all parts of the application work seamlessly together required careful planning and execution.

### What I Could Do Differently with More Time
Given more time, I believe I have met all the requirements up to the mark. However, I could add more features to enhance the application, even though they were not part of the initial requirements.

---

Feel free to explore the project and provide feedback. If you encounter any issues, please open an issue in the repository.

Happy coding!
