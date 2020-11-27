import { ICmdHandlerMetadata } from "./CmdHandlerMetadata";


export class MetadataStorage {


    public cmdHandlerMetadata: ICmdHandlerMetadata[] = []


    public addCmdHandler({ cmd, handler }) {
        this.cmdHandlerMetadata.push({ cmd, handler })
    }
}