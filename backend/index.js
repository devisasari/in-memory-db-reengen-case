import DB from "./database/db.js";

// Create a new database
let db = new DB();

// Create a new table called 'fruit' with columns 'name' (string) and 'quantity' (int)
db.createTable("fruit", { name: "string", quantity: "int" });

// Access to table 'fruit'
let table = db.getTable("fruit");

// Insert records to table
table.insertRecords({ name: "Apple", quantity: 20 });
table.insertRecords({ name: "Banana", quantity: 20 });

// Return all records
console.log(table.getAllRecords());

// Return matching records for name: 'Apple'
console.log(table.filterRecords({ name: "Apple" }));