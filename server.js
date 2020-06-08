const Hapi = require('@hapi/hapi');
const mongo  = require('mongoose');
import models from"./Models";


const init = async () => {


    const server = Hapi.server({
        port: 8080,
        host: 'localhost'
    });
    server.route({
        method: ['GET'],
        path: '/',
        handler: function (request, h) {
    
            return models.keyy;
        }
        
    });

    await server.start();
    console.log('Server running on port 3000');
};

init();