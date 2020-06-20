let createEntry = (schema,data,cb)=>{
    new schema(data).save((err,result)=>{
        if(err) return cb(err);
        cb(result);
    })
}




module.exports = {
    createEntry : createEntry
};