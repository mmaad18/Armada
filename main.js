const CreepManager = require('CreepManager');
const WasteManager = require('WasteManager');
const RoleManager = require('RoleManager');

module.exports.loop = function () {

    WasteManager.clearVoidNames();
    CreepManager.spawnCreep("Spawn1", 0, 1, 0, 1, 0, 0, 0, 1,
        "harvester", 0);
    RoleManager.assignRoles();

    let sources = Game.spawns["Spawn1"].room.find(FIND_SOURCES);

    let roomName = Game.spawns["Spawn1"].room.name;
    console.log(Game.map.getRoomTerrain(roomName).get(35, 20));
}
