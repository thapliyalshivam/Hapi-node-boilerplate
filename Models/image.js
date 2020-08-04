let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let image = new Schema({
    url:{type: String, required:true},
    name:{type: String, required:true},       
    
});

module.exports = mongoose.model('image', image);
