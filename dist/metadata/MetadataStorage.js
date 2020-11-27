"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetadataStorage {
    constructor() {
        this.cmdHandlerMetadata = [];
    }
    addCmdHandler({ cmd, handler }) {
        this.cmdHandlerMetadata.push({ cmd, handler });
    }
}
exports.MetadataStorage = MetadataStorage;
//# sourceMappingURL=MetadataStorage.js.map