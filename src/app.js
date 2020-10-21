const express = require('express');

const app = express();

app.use((req, res, next) => {
    next();
});

app.use(routes);


app.use((req, res) => {
    res.respond(404, 'Endpoint not found');
});
