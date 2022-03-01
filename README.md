
nextanwromo Server Documentation


Introduction: 

Next Wromo server admin node, express database. 
Tech and Packages we use in this project:

    1. Node.js framework Express.js.
    2. Mongodb use for database .
    3. Mongoose for all schema validation database connection.
    4. JsonwebToken for create jsonwebtoken.
    5. BcryptJs for password encryption.
    6. Day.js for data format.
    7. Dotenv for use environment variable.
    8. Nodemon for run on dev server.
    9. Cors and Body parser

Getting Started & Installation:


Step 1 : Configure your .env file:

Within the project directory you'll find a .env.example file just rename it as .env and paste your Mongo_Uri and JWT_SECRET.

Step 2 : Running the project:

    ⦁	First npm install for install all packages latest version.
    ⦁	npm run start:dev 
    ⦁	npm run data:import
        


Folder Structure & Customization:

⦁   In index.js file you will find all declared api endpoint for different route.

⦁   In seed.js file you will find all created model for manually imported into database.
/config : This folder contain auth for signInToken, isAdmin and isAuth middleware.
/models: This folder contain all model create with mongoose schema validation.
/routes: This folder contain all route like admin, category, product, coupon, user, userOrder route. 
/controller: This folder contain all different route controller function.
/utils : This folder contain admin, user, product and category sample data.
