import IBaseCommandResult from "./base-command-result";

interface IPendingCommand {
    cmdid: number;
    res: (result: IBaseCommandResult) => void;
};

export default IPendingCommand;