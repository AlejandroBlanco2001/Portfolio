export interface Command {
    command: string;
    output: string;
    subCommands: Command[] | null;
}