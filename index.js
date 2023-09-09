const Hapi = require('@hapi/hapi');
const routes = require('./routes/contact');

const init = async () => {
    require('dotenv').config()

    const server = Hapi.server({
        port: process.env.PORT,
        host: process.env.HOST
    });

    server.route(routes);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

init();