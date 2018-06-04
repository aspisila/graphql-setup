import { User } from "../models/users";
import { Types } from "mongoose";

const userController = {
	addUser: (root: any, args: any) => {
		const user = new User(args);
		return user.save();
	},
	deleteUser: (root: any, args: any) => User.deleteOne({ _id: args.id }),
	updateUser: (root: any, args: any) => {
		const tempUser = { ...args };
		delete tempUser.id;
		return User.updateOne({ _id: args.id }, { $set: tempUser });
	},
	users: (root: any, args: any) => User.find({}),
	user: (token: string) => User.find({ token: token }),
	login: (root: any, args: any) => userController.addUser(root, args)
};

export { userController };
