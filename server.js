const Hapi = require('@hapi/hapi');
const mongo  = require('mongoose');
const bootstrap = require('./Utils/Bootstrap');
const queries = require("./Utils/DatabaseQueries") ;
const models = require("./Models").default;

// import models from"./Models";

const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const Pack = require('./package.json');
const Joi = require('@hapi/joi');



const init = async () => {
    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });

    const swaggerOptions = {
        info: {
                title: 'Test API Documentation',        
                version: Pack.version,
            },
        };

    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,   
            options: swaggerOptions
        }
    ]);

    server.route(
        {
            method: 'GET',
            path: '/api/mem/{ID}',


            // handler: handlers.getToDo,
            options: {
                handler: (request, reply)=>{
                    queries.createEntry(models.dbkey,{dbkey:"test ENtry "},()=>console.log("yo"))   
                    reply("this works") ;
                    //         return models.keyy;
                },
                description: 'Get todo',
                notes: 'Returns a todo item by the id passed in the path',
                tags: ['api'], // ADD THIS TAG
                auth:false,
                validate: {
                
                    params: Joi.object({
                        id : Joi.number()
                                .required()
                                .description('the id for the todo item'),
                    })
                }
            },
        }
    );



    // server.route({
    //     method: ['GET'],
    //     path: '/',
    //     handler: function (request, h) {
    //         queries.createEntry(models.dbkey,{dbkey:"test ENtry "},()=>console.log("yo"))    
    //         return models.keyy;
    //     }
         
    // });

    // server.route({
    //     method: ['GET'],
    //     path: '/momo',
    //     handler: function (request, h) {
    //         queries.createEntry(models.dbkey,{dbkey:"test entry"},()=>console.log("yo"))    
    //         return models.keyy+"random";
    //     }
         
    // });


    await server.start();
    console.log('Server running on port 3000');
};

init();