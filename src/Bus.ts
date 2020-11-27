import { getFromContainer } from "./container";
import { ICmd, ICmdHandler, IExecCmd, IQuery } from "./interfaces";
import { metadataStorage } from "./metadata";

export class Bus {
  public async handler(cmd: ICmd) {
    const cmdType = Object.getPrototypeOf(cmd).constructor;
    const handler = metadataStorage.cmdHandlerMetadata.find(
      (x) => x.cmd === cmdType
    );
    // if (handler) {
    //   const h = getFromContainer(handler.handler);
    //   await (h as ICmdHandler<ICmd>).handler(cmd);
    // }

    return true;
  }

  public async exec<T>(cmd: IExecCmd) {
    const cmdType = Object.getPrototypeOf(cmd).constructor;
    console.log("type", cmdType);
    const c = Object.assign(getFromContainer(cmdType), cmd);
    console.log("c", c);
    return (c as IExecCmd).exec();
  }

  public async query<T>(q: IQuery) {
    const type = Object.getPrototypeOf(q).constructor;
    console.log("type", type);
    const c = Object.assign(getFromContainer(type), q);
    console.log("c", c);
    return (c as IQuery).exec();
  }
}
