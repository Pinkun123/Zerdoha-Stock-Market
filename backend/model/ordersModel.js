const { model } = require("mongoose");

const { odersSchema } = require("../schemas/odersSchema");

const odersModel = new ("oder", odersSchema)();

module.exports = { odersModel };
