"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const organizationSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    contactEmail: { type: String, required: true },
    url: { type: String, required: false },
    status: { type: String, enum: ['Approved', 'Review', 'Denied'], default: 'Review' }
});
exports.default = (0, mongoose_1.model)('Organization', organizationSchema);
