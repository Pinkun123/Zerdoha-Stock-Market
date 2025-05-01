const { model } = require("mongoose");

const { postionsSchema } = require("../schemas/postionsSchema");

const postionsModel = new model("postion", postionsSchema);

module.exports = { postionsModel };
