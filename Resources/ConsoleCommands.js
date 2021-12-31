/**
 * Console commands:
 */

// WORK, CARRY og MOVE bodyparts. En [WORK, CARRY, MOVE] is 1 in each stat

// Spawn1 spawns Harvester1
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

// Spawn1 spawns Harvester2
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester2' );

// Spawn1 spawns Upgrader1
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Upgrader1' );

// Set role of Harvester1 to harvester
Game.creeps['Harvester1'].memory.role = 'harvester';

// Set role of Upgrader1 to upgrader
Game.creeps['Upgrader1'].memory.role = 'upgrader';

// Spawn1 spawns Builder1, where the role is specified at the same time
Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Builder1', { memory: { role: 'builder' } } );

// Spawn1 spawns HarvesterBig, where the role is set to harvester, and it has more WORK and MOVE capacity.
Game.spawns['Spawn1'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE], 'HarvesterBig', { memory: { role: 'harvester' } } );

// Harvester1 suicide
Game.creeps['Harvester1'].suicide()

// Active safemode in the room
Game.spawns['Spawn1'].room.controller.activateSafeMode();

// Construct a construction site
Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );


