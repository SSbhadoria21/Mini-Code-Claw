#!/usr/bin/env bun
import { Command } from "commander";
import { log } from "node:console";
import { runWakeup } from "./tui/wakeup";

const program = new Command();


program
.name('minicodeclaw-build')
.description("Builds the MiniCodeClaw")
.version("1.0.0")

program
    .command('wakeup')
    .description("Show the banner and pick cli or other mode")
    .action(
        async()=>{
            await runWakeup()
            
        }
    )

await program.parseAsync(process.argv)