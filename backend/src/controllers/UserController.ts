import { Request, Response } from "express";
import User from "../models/User";
import IUser from "../types/IUser";
import ICommonJsonResponse from "../types/ICommonJsonResponse";
import ICommonError from "../types/ICommonError";
import EnumErrorNames from "../types/EnumErrorNames";
import { setHTTPOnlyToken } from "../helpers/token";
const UserController = {
    login: async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body;
            const user: IUser = await User.login(email, password);
            const token: string = setHTTPOnlyToken(user._id, res);
            const jsonResponse: ICommonJsonResponse<IUser> = {
                data: user,
                msg: "Successfully logged in",
                token: token,
            };

            return res.status(200).send(jsonResponse);
        } catch (e) {
            let msg: string;
            if ((e as Error).name === EnumErrorNames.LoginIncorrectPassword || (e as Error).name === EnumErrorNames.LoginUserDoesNotExist) {
                msg = (e as Error).message;
            } else {
                msg = "Unknown error occurred";
            }
            const jsonError: ICommonError<string> = {
                type: "login error",
                path: "/api/users/login",
                location: "/api/users/login",
                msg: msg,
                value: "login error",
            };
            return res.status(500).send({
                errors: {
                    users: jsonError,
                },
            });
        }
    },

    register: async (req: Request, res: Response) => {
        try {
            const { name, email, password, role = false } = req.body;
            const user: IUser = await User.register(name, email, password, role);
            const token: string = setHTTPOnlyToken(user._id, res);
            const jsonResponse: ICommonJsonResponse<IUser> = {
                data: user,
                msg: "Successfully registered",
                token: token,
            };
            return res.status(200).send(jsonResponse);
        } catch (e) {
            let msg: string;
            if ((e as Error).name === EnumErrorNames.RegisterUserExists) {
                msg = (e as Error).message;
            } else {
                msg = "Unknown error occurred";
            }
            const jsonError: ICommonError<string> = {
                type: "register error",
                location: "/api/users/register",
                msg: msg,
                path: "/api/users/register",
                value: msg,
            };
            return res.status(500).send({
                errors: {
                    users: jsonError,
                },
            });
        }
    },

    index: async function (req: Request, res: Response) {
        try {
            const users: IUser[] = await User.find().sort({ createdAt: -1 });
            const jsonResponse: ICommonJsonResponse<IUser[]> = {
                data: users,
                msg: "successfully fetched all users",
            };
            return res.status(200).send(jsonResponse);
        } catch (e) {
            const jsonError: Partial<ICommonError<string>> = {
                type: "get method error",
                path: "/api/users",
                msg: "Error getting users",
            };
            return res.status(500).send({
                errors: {
                    users: jsonError,
                },
            });
        }
    },
};

export default UserController;
