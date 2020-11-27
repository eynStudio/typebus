"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_1 = require("../metadata");
function CmdHandler(cmdType) {
    return (object) => {
        metadata_1.metadataStorage.addCmdHandler({
            cmd: cmdType,
            handler: object
        });
    };
}
exports.CmdHandler = CmdHandler;
//# sourceMappingURL=CmdHandler.js.map