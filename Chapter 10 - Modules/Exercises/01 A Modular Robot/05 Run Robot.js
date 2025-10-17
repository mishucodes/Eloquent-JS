import {randomRobot, governmentRobot, goalOrientedRobot} from './04 Robots.js';
import {VillageState} from './03 Village State.js';


//Robot Runner: This function takes in a Village State, A Robot, & Some Memory (optional), & runs the Robot until all deliveries are made:
function runRobot(state, robot, memory)
{
    for (let turn = 0;; turn++)
    {
        if (state.parcels.length == 0)
            return turn;
        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}


for(let i = 0; i < 3; i++)
{
    let state = VillageState.random();
    console.log(runRobot(state, randomRobot, []));
    console.log(runRobot(state, governmentRobot, []));
    console.log(runRobot(state, goalOrientedRobot, []));
    console.log('\n');
}