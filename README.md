# Organize_My_Inventory
Use MySQL2, Sequelize and Express.js to GET, POST, UPDATE and DELETE online inventory.

[![MIT License](https://img.shields.io/badge/License-MIT-blue)]((https://opensource.org/licenses/MIT))

## Table of Content
  - [Description](#Description)
  - [Usage](#Usage)
  - [Installation](#Installation)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [License](#License)

## Description
  This application uses opbject-relational mapping to connect the Javascript with the information in a database. An express.js API using Sequalize to interact with MySQL database. Using Sequelize the application can read, create, update and delete information in the database. Uses dotenv to store and hide private information such as a password while still being able to be used in the application.
  
  Video Demo Link:  
  


## Usage
  The user can manage their online inventory by placing it into a database. Once in the database the inventory can be read, products can be updated, new items created, and old items removed.
  
  Images:  
   
 



## Installation
  Copy application files into code.vs and then input "npm install" into the command-line. Then open mysql by typing "mysql -u yourDB_USERname -p" into the command-line and type in your password. Once logged in to mysql you need to source the sql files by typing "source DB/schema.sql;" into the mysql command-line. Once sourced, exit mysql by typing "exit". When back in the normal command-line, type "npm run seed" to seed the inventory data. Finally, type "npm start" into the command-line and use the bowser to go to http://localhost:3001/.

## Contributing
  n/a

## Tests
  n/a

## Questions
  https://github.com/Chiweenie6  

## License
  MIT License

Copyright (c) [2023] [Kevin Breedlove]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
