//use index.js to export all models together as the verdant bd as a whole
module.exports = {
    User: require("./user"),
    Article: require("./article"),
    Plant: require("./plant")
};