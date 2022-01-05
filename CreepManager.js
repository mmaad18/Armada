var CreepManager = {

    spawnCreep: function(spawner, tough, carry, claim, work, attack, rangedAttack, heal, move, role = "harvester") {

        let toughArray = Array(tough).fill(TOUGH);
        let carryArray = Array(carry).fill(CARRY);
        let claimArray = Array(claim).fill(CLAIM);
        let workArray = Array(work).fill(WORK);
        let attackArray = Array(attack).fill(ATTACK);
        let rangedAttackArray = Array(rangedAttack).fill(RANGED_ATTACK);
        let healArray = Array(heal).fill(HEAL);
        let moveArray = Array(move).fill(MOVE);

        let body = toughArray.concat(carryArray, claimArray, workArray, attackArray, rangedAttackArray, healArray,
            moveArray);
        let name = role.charAt(0).toUpperCase() + role.slice(1) + Game.time;

        if(role == "harvester") {
            let resource = resourceAssigner(spawner, name);
            Game.spawns[spawner].spawnCreep(body, name, {memory: {role: role, resource: resource}});
        }
        else {
            Game.spawns[spawner].spawnCreep(body, name, {memory: {role: role}});
        }

        if(Game.spawns[spawner].spawning) {
            let spawningCreep = Game.creeps[Game.spawns[spawner].spawning.name];
            Game.spawns[spawner].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns[spawner].pos.x + 1,
                Game.spawns[spawner].pos.y,
                {align: 'left', opacity: 0.8});

            console.log(`${spawner} spawned new ${role}: ${name}`);
        }
    }
};

function resourceAssigner(spawner, name){
    //let sources = Game.spawns[spawner].room.find(FIND_SOURCES);

    Game.spawns[spawner].memory.assignments = {name: name, resource: 1};

    return Game.spawns[spawner].memory.assignments.resource;
}

module.exports = CreepManager;
