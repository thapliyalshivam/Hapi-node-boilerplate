let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let dbkey = new Schema({
    dbkey:{type: String, required:true},
    
});

module.exports = mongoose.model('dbkey', dbkey);
