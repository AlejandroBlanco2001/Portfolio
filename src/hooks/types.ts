export interface Command {
    command: string;
    output: string;
    subCommands: Record<string, Command> | null;
}