const Hapi = require('@hapi/hapi');
const mongo  = require('mongoose');
const queries = require("../Utils/DatabaseQueries") ;
const models = require("../Models");
const Controller = require("../Controllers/key");
const Joi = require('@hapi/joi');
const fs = require('fs');

let routes = [];

    routes.IMAGER = 
        {
            method: 'POST',
            path: '/api/imager/imageupload',
            // handler: handlers.getToDo,
            options: {
                handler: (request, h)=>{
                    console.log(request.payload);
                    queries.createEntry(models.image,{url:request.payload.name,name:"image"},()=>console.log("success")) 
               
                    //for output : data
                    // fs.writeFileSync('./test.png', request.payload.img, err => {
                    //     if (err) {
                    //      return(err)
                    //     }
                    //     return({ message: 'Upload successfully!' });
                    //  });

                    request.payload.img.pipe(fs.createWriteStream('./bonono.png'));
                     return({ message: 'Upload successfully!' });
   
                },
                payload:
            
                {
                                maxBytes: 50000000,                                                              // max 5MB
                                output: 'stream',
                                multipart: true,
                                parse: true,
                                allow: ['application/json', 'multipart/form-data', 'image/jpeg', 'application/pdf', 'application/x-www-form-urlencoded'],
                            },
                            
                            
                description: 'Get todo',
                notes: 'Returns a todo item by the id passed in the path',
                tags: ['api'], // ADD THIS TAG
                auth:false,
                validate: {
                    payload: Joi.object({
                        name: Joi.string().required(),
                        img : Joi.any().meta({swaggerType: 'file'}).optional().allow('').description("max 5 MB is allowed"),
                    })
                },

                plugins: {
                    'hapi-swagger': {
                        payloadType: 'form',
                        // responseMessages: swaggerResponse
                    }}
                
            },
        }
    ;


    let routeArray = []
    for (let i in routes) {
        routeArray.push(routes[i])
    }
    module.exports = routeArray;