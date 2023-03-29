# Case Study - In-Memory Database JS Project for Reengen

This project is a simple in-memory database implemented in pure JavaScript using ES6 classes. The database supports the creation of multiple databases, each of which can have multiple tables with multiple columns of type 'int' or 'string'. Data validation is performed when inserting data to ensure that integer values are between -999 and +999, and strings do not exceed 255 characters. Additionally, data can be filtered by one or more columns.

## Getting Started
To get started with this project, follow these steps:

Clone this repository to your local machine:

git clone https://github.com/devisasari/in-memory-db-reengen-case.git

Install the dependencies:

yarn install

Start the development server:

yarn dev

## Testing
To run the tests for this project, simply run the following command in your terminal:

yarn test
This will run the test suite defined in the tests folder using the Vitest testing framework.

## Technologies Used
This project uses the following technologies:
* vite
* vitest

## Usage
To use this database, simply import the DB class from the db.js file in your JavaScript project:

import DB from './database/db.js';

Create a new database
To create a new database, simply create a new instance of the DB class:


const db = new DB();

Create a new table
To create a new table in a database, call the createTable() method of the DB instance and pass the table name and columns as parameters:


db.createTable('fruit', { name: 'string', quantity: 'int' });

Insert records
To insert records into a table, first obtain the table instance using the getTable() method of the DB instance, and then call the insertRecords() method of the table instance and pass the data as a parameter:


const table = db.getTable('fruit');

table.insertRecords({ name: 'Apple', quantity: 20 });
table.insertRecords({ name: 'Banana', quantity: 30 });

Get all records
To get all records from a table, call the getAllRecords() method of the table instance:


const allRecords = table.getAllRecords();

Filter records
To filter records based on one or more columns, call the filterRecords() method of the table instance and pass the filter criteria as an object:


const filteredRecords = table.filterRecords({ name: 'Apple' });

## Example
Here is an example of how to use the in-memory database to create a new database, create a new table, insert records into the table, and retrieve filtered records:

import DB from './database/db.js';

// create a new database
const db = new DB();

// create a new table with two columns: name (string) and quantity (int)
db.createTable('fruit', { name: 'string', quantity: 'int' });

// access the fruit table
const table = db.getTable('fruit');

// insert records into the table
table.insertRecords({ name: 'Apple', quantity: 20 });
table.insertRecords({ name: 'Banana', quantity: 10 });
table.insertRecords({ name: 'Orange', quantity: 15 });

// retrieve all records from the table
const allRecords = table.getAllRecords();

// filter records from the table
const filteredRecords = table.filterRecords({ name: 'Apple' });


## About the Reengen case:

Implement a simple in-memory database:
* Multiple databases can be created.
* Each database can have multiple tables.
* Each table can have multiple columns of type 'int' or 'string';
* Data validation must be done when inserting data. Integer values must be between -999 and +999. Strings cannot exceed 255 characters.
* Data can be filtered by one or more columns.

Code in pure JavaScript. No external libraries are allowed.

Examples are as follows:

// Create a new database
let db = new DB();

// Create a new table called 'fruit' with columns 'name' (string) and 'quantity' (int)
db.createTable('fruit', { name: 'string', quantity: 'int' }); 

// Access to table 'fruit'
let table = db.getTable('fruit');

// Insert records to table
table.insertRecords({ name: 'Apple', quantity: 20 });
table.insertRecords({ name: 'Banana', quantity: 20 });

// Return all records
table.getAllRecords();

// Return matching records for name: 'Apple'
table.filterRecords({ name: 'Apple' });
