
const server = require('../server.js');


beforeAll((done) => {
    server.events.on('start', () => {
        done();
    });
});

afterAll((done) => {
    server.events.on('stop', () => {
        done();
    });
    server.stop();
});


test('getting response',   async (done)=> {
    const options = {
        method: 'GET',
        url: '/api/mem/20'
    };
   let response = await server.inject(options );
    expect(response.statusCode).toBe(200);
    console.log((response.result.data));
    done();
});


