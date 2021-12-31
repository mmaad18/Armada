var spawnCreep = require('spawnCreep');
var clearCreepNames = require('clearCreepNames');

module.exports.loop = function () {

    clearCreepNames.run();
    spawnCreep.run("Spawn1", "harvester", 0, 1, 0, 1, 0, 0, 0, 1);
    
}