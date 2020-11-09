//use index.js to export all models together as the verdant bd as a whole
// this fixed the connecting wuth db bug and not knowing how to connect
module.exports = {
    User: require("./user"),
    Article: require("./article"),
    Plant: require("./plant")
};