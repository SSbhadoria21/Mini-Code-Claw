import chalk from "chalk";
import {select, isCancel} from "@clack/prompts";


export async function runCliMode(){
    while(true){
        const mode = await select({
            message: "Choose CLI sub-mode",
            options:[
                {value:"agent", label:"Agent"},
                {value:"plan", label:"Plan"},
                {value:"ask", label:"Ask"},
                {value:"back", label: "Black to main menu"}
            ]
        })
        if(isCancel(mode) || mode === 'back') return;
        if(mode === 'agent'){console.log(chalk.blue("\n Agent Mode Started"));
        }
        if(mode === 'plan'){console.log(chalk.blue("\n Plan Mode Started"));
        }
        if(mode === 'ask'){console.log(chalk.blue("\n Ask Mode Started"));
        }

        if(mode !== "agent" && mode !== "plan" && mode !== "ask"){
            console.log(chalk.yellow("\n That mode is not Implemented Yet\n"));
        }
    }
}