const Hapi = require('@hapi/hapi');
const mongo  = require('mongoose');
const queries = require("../Utils/DatabaseQueries") ;
const models = require("../Models");
const Controller = require("../Controllers/key");
const Joi = require('@hapi/joi');
const fs = require('fs');



exports.keyContoller = (request,h)=>{

        // queries.createEntry(models.image,{dbkey:"test ENtry ",image:},()=>console.log("yo"))   
        return "this works" ;
        //         return models.keyy;

}



exports.keyContoller = (request,h)=>{

    queries.createEntry(models.dbkey,{dbkey:"test ENtry "},()=>console.log("yo"))   
    return "this works" ;
    //         return models.keyy;

}