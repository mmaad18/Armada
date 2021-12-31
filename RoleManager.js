const RoleHarvester = require('Role.Harvester');

var RoleManager = {

    assignRoles: function() {
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            if(creep.memory.role == 'harvester') {
                RoleHarvester.run(creep);
            }
        }
    }
};

module.exports = RoleManager;