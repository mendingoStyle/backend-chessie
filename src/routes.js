const express = require("express");
const routes = express.Router();
const controller = require("./controller/ColPlay");


routes.post('chess/:id_game/:jogada',
    ControllerPlay.play
);