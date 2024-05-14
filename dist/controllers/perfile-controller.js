"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profileController = (req, res) => {
    const user = req.body.UserDto;
    return res.status(200).json({ message: "Profile retrieved successfully", user });
};
exports.default = profileController;
