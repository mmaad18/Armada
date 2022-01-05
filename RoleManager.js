const RoleHarvester = require('Role.Harvester');

var RoleManager = {

    assignRoles: function() {
        for(let name in Game.creeps) {
            let creep = Game.creeps[name];

            switch (creep.memory.role) {
                case "harvester":
                    RoleHarvester.run(creep);
                    break;
                default:
                    console.log("Unknown role defined.")
            }
        }
    }
};

module.exports = RoleManager;