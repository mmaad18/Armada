var CreepManager = require('CreepManager');
var WasteManager = require('WasteManager');

module.exports.loop = function () {

    WasteManager.clearDeadNames();
    CreepManager.spawn("Spawn1", "harvester", 0, 1, 0, 1, 0, 0, 0, 1);
}