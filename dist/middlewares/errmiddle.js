"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrHandle = void 0;
const ErrHandle = (error, req, res, next) => {
    console.error(`Error: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
    return;
};
exports.ErrHandle = ErrHandle;
