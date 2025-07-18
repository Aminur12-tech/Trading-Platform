const {model} = require("mongoose");
const { PositionSchema } = require("../Schemas/PositionSchema");


const PositionModel = new model("positions", PositionSchema);

module.exports = {PositionModel};