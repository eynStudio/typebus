"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = require("./container");
const metadata_1 = require("./metadata");
class Bus {
    async handler(cmd) {
        const cmdType = Object.getPrototypeOf(cmd).constructor;
        const handler = metadata_1.metadataStorage.cmdHandlerMetadata.find((x) => x.cmd === cmdType);
        // if (handler) {
        //   const h = getFromContainer(handler.handler);
        //   await (h as ICmdHandler<ICmd>).handler(cmd);
        // }
        return true;
    }
    async exec(cmd) {
        const cmdType = Object.getPrototypeOf(cmd).constructor;
        console.log("type", cmdType);
        const c = Object.assign(container_1.getFromContainer(cmdType), cmd);
        console.log("c", c);
        return c.exec();
    }
    async query(q) {
        const type = Object.getPrototypeOf(q).constructor;
        console.log("type", type);
        const c = Object.assign(container_1.getFromContainer(type), q);
        console.log("c", c);
        return c.exec();
    }
}
exports.Bus = Bus;
//# sourceMappingURL=Bus.js.map