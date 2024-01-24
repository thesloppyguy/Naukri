"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = exports.Role = void 0;
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["Maintainer"] = "Maintainer";
    Role["User"] = "User";
})(Role || (exports.Role = Role = {}));
var Status;
(function (Status) {
    Status["Approved"] = "Approved";
    Status["Denied"] = "Denied";
    Status["Review"] = "Review";
})(Status || (exports.Status = Status = {}));
