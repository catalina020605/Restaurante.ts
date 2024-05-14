import { Request, Response } from "express";
import UserDto from "../Dto/UserDto";

const profileController = (req: Request, res: Response) => {
  const user = req.body.UserDto; 
  return res.status(200).json({ message: "Profile retrieved successfully", user });
};

export default profileController;
