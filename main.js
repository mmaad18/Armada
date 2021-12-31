const CreepManager = require('CreepManager');
const WasteManager = require('WasteManager');
const RoleManager = require('RoleManager');

module.exports.loop = function () {

    WasteManager.clearVoidNames();
    CreepManager.spawnCreep("Spawn1", "harvester", 0, 1, 0, 1, 0, 0, 0, 1);
    RoleManager.assignRoles();
}
