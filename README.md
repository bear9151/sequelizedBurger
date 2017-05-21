# BB-Burger

*This is an instance of a previous assignment--refactored to use Sequelize ORM. View deployment here: https://sequelburgerbarrett.herokuapp.com/*

#### BB-Burger is an online restaurant that allows you to eat tasty, virtual burgers over and over again. Enjoy the full menu of speciality burgers, or even create your own from the BB-Burger open bar. The only limit is your BB-Hunger! Now, get to devouring.

### Installation
1. Clone the GitHub Repository to your local machine.
2. Navigate to the directory in your terminal or other command line tool.
3. Run `npm install` to install package dependencies.
3. This application uses mySQL as the preferred database.
  * Run `mysql.server start` then `mysql -u [USERNAME]` (`root` is the default username).
  * Run the code in [schema.sql](https://github.com/bear9151/burger/blob/master/db/schema.sql) to create the database.
  * Run the code in [seeds.sql](https://github.com/bear9151/burger/blob/master/db/seeds.sql) to populate the data.
4. Use node to run `server.js` to start the application. In your terminal, you will get a connection message if successful.

### App Instructions
* Upon loading the App, you'll see a list of available burgers on the **Burgers Menu**.
* **Devour** a burger by clicking the button, and the burger will go to the **Burgers Eaten** section.
* Click **Eat Again** to bring a burger back to the **Burgers Menu**.
* You can **Delete** a burger to remove it from either the menu or the eaten list.
* Add your own burger by using the **Create a Burger** form. You can even select whether it's been eaten yet or not. (Trippy, no?!)

### Assignment
* This [assignment](https://github.com/UCF-Coding-Boot-Camp/01-2017-VW-Class-Content/blob/master/Homework/Week-14/Instructions/homework_instructions.md) was completed as part of the *UCF Coding Bootcamp*, and focuses on the following languages/skills:
  * Express Routing
  * Express Handlebars
  * mySQL Databases
