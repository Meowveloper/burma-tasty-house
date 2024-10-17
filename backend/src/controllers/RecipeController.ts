import { Request, Response } from "express";
import removeFile from "../helpers/removeFile";
import IRecipe from "../types/IRecipe";
import Recipe from "../models/Recipe";
import ICommonError from "../types/ICommonError";
import ICommonJsonResponse from "../types/ICommonJsonResponse";
import path from 'path'
const RecipeController = {
    index: async function (req: Request, res: Response) {
        try {
            const recipes: IRecipe[] = await Recipe.find().sort({ createdAt: -1 });
            const resObject: ICommonJsonResponse<IRecipe[]> = {
                data: recipes,
                msg: "successfully fetched all recipes",
            };
            return res.status(200).send(resObject);
        } catch (e) {
            const errRes: Partial<ICommonError<string>> = {
                path: "api/recipes",
                type: "get method error",
                msg: "error fetch recipes",
            };
            return res.status(500).send({
                errors: {
                    recipes: errRes,
                },
            });
        }
    },

    show: async function (req: Request, res: Response) {
        try {
            const recipe: IRecipe | null = await Recipe.findById(req.params._id);
            if (recipe) {
                const resObject: ICommonJsonResponse<IRecipe> = {
                    data: recipe,
                    msg: "successfully fetched recipe => " + recipe.title,
                };
                return res.status(200).send(resObject);
            } else {
                throw new Error("recipe not found");
            }
        } catch (e) {
            console.log(e);
            const error: Partial<ICommonError<string>> = {
                path: "api/recipes/:id",
                type: "get method error",
                msg: "recipe not found please find with a valid ID type",
            };
            return res.status(404).send({
                errors: {
                    recipe: error,
                },
            });
        }
    },

    store: async function (req: Request, res: Response) {
        console.log('recipe store request body', req.body);
        try {
            const recipe: IRecipe = await Recipe.store(req);
            // const recipeData
            const resObject: ICommonJsonResponse<IRecipe> = {
                data: recipe,
                msg: "Successfully created a recipe. id => " + recipe._id,
            };
            return res.status(200).send(resObject);
        } catch (e) {
            const files = req.files as { [fieldname: string]: Express.Multer.File[] };
            const imageFile = files["image"]?.[0];
            const videoFile = files["video"]?.[0];
            if (imageFile) removeFile(path.join(__dirname, '..', '..', 'public', imageFile.filename));
            if (videoFile) removeFile(path.join(__dirname, '..', '..', 'public', videoFile.filename));
            const errorRes: Partial<ICommonError<string>> = {
                path: "/api/recipes",
                type: "post method",
                msg: "error creating recipe",
            };
            return res.status(500).send(e);
        }
    },
};

export default RecipeController;
