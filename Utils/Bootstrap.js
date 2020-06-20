const mongoose = require("mongoose");
const dbConfig = require('../Config/dbconfig');
const { db } = require("../Models/dbkey");


mongoose.connect(dbConfig.config.dbURI, (err) => {
    if (err) {
        console.log("Database error ", err)
        process.exit(1);
    }
    else console.log('Connection done');
});
