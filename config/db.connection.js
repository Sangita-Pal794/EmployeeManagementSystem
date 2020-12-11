// const config = require('./db.config');
const mongoose = require('mongoose');

// const url = process.env.MONGODB_URI || config.url;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/employeeManagement', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log(" Connection successful to the database");
}).catch(() => {
    console.log("Could not connect to the database");
    process.exit();
});
