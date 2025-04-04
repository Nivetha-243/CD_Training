"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const control_1 = require("../controllers/control");
const express_1 = require("express");
const errmiddle_1 = require("../middlewares/errmiddle");
const router = (0, express_1.Router)();
const control = new control_1.ControlStates();
router.post("/data", control.insert, errmiddle_1.ErrHandle);
router.get("/use", control.use);
router.delete("/deletecon/:id", control.deletecon);
// router.put("/put", control.putop)
exports.default = router;
