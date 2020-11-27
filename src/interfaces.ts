export interface ICmd {}

export interface IExecCmd extends ICmd {
  exec(): any;
}

export interface ICmdHandler<ICmd> {
  handler(cmd: ICmd): any;
}

export interface IQuery {
  exec(): any;
}
