"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    role: {
        type: String,
        enum: ['User', 'Admin', 'Maintainer'],
        default: 'User',
    },
    organization: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Organization' },
});
exports.default = (0, mongoose_1.model)('User', userSchema);
