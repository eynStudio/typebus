import { metadataStorage } from '../metadata';

export function CmdHandler(cmdType: object): ClassDecorator {
    return (object: object) => {
        metadataStorage.addCmdHandler({
            cmd: cmdType,
            handler: object
        })
    }
}
