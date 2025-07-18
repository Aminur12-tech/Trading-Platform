const {model, Model } = require("mongoose");
const { HoldingSchema } = require("../Schemas/HoldingSchema");

const HoldingModel = new model("holding", HoldingSchema);

module.exports = {HoldingModel};