import chalk from "chalk";
import {isCancel, text} from '@clack/prompts'
export async function runAgentMode(){
console.log(chalk.bold("\nAgent Mode\n"));
const goal = await text({
    message: chalk.cyan('What would you like the agent to do? '),
    placeholder: "concrete task for the database"
})

if(isCancel(goal) || !goal.trim()) return;
}