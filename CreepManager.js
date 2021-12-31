var CreepManager = {

    spawnCreep: function(spawner, role, tough, carry, claim, work, attack, rangedAttack, heal, move) {

        var toughArray = Array(tough).fill(TOUGH);
        var carryArray = Array(carry).fill(CARRY);
        var claimArray = Array(claim).fill(CLAIM);
        var workArray = Array(work).fill(WORK);
        var attackArray = Array(attack).fill(ATTACK);
        var rangedAttackArray = Array(rangedAttack).fill(RANGED_ATTACK);
        var healArray = Array(heal).fill(HEAL);
        var moveArray = Array(move).fill(MOVE);

        var body = toughArray.concat(carryArray, claimArray, workArray, attackArray, rangedAttackArray, healArray,
            moveArray);

        var name = role.charAt(0).toUpperCase() + role.slice(1) + Game.time;

        Game.spawns[spawner].spawnCreep(body, name, {memory: {role: role}});

        if(Game.spawns[spawner].spawning) {
            var spawningCreep = Game.creeps[Game.spawns[spawner].spawning.name];
            Game.spawns[spawner].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns[spawner].pos.x + 1,
                Game.spawns[spawner].pos.y,
                {align: 'left', opacity: 0.8});

            console.log(`${spawner} spawned new ${role}: ${name}`);
        }
    }
};

module.exports = CreepManager;