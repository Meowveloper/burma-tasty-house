import mongoose, { Model, ObjectId, Schema } from "mongoose";
import IRecipe from "../types/IRecipe";
import User from "./User";
import { Request } from "express";
import IStep from "../types/IStep";
import Step from '../models/Step';
import { UploadedFile } from "express-fileupload";
import path from 'path';
import uploadFile from "../helpers/uploadFile";
import EnumFileTypes from "../types/EnumFileTypes";

interface IRecipeModel extends Model<IRecipe> {
    store: (req: Request) => IRecipe;
}

const RecipeSchema = new Schema<IRecipe>(
    {
        title: {
            type: String,
            required: [true, "title is required"],
        },
        image: {
            type: String,
            required: true,
        },
        video: {
            type: String,
            required: false,
            default: null,
        },
        description: {
            type: String,
            required: true,
        },
        preparation_time: {
            type: Number,
            required: true,
            min: [5, "Too Short Preparation Time"],
        },
        difficulty_level: {
            type: Number,
            required: true,
            min: [1, "difficulty level must be between 1 and 5"],
            max: [10, "difficulty level must be between 1 and 5"],
        },
        ingredients: {
            type: [String],
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required : true
        },
        views: {
            type: Number,
            default: 0,
        },
        steps : {
            type : [mongoose.Schema.Types.ObjectId], 
            ref : "Step", 
            required : false
        }
    },
    {
        timestamps: true,
    }
);
RecipeSchema.statics.store = async function (req: Request): Promise<IRecipe | void> {
    if(!req.files?.image) throw new Error('Recipe image is required!!');
    const recipeImage = req.files.image as UploadedFile;
    const recipeVideo = req.files.video as UploadedFile;


    const recipe: IRecipe = new Recipe({
        ...req.body,
        image : uploadFile(recipeImage, EnumFileTypes.Image),
        video : uploadFile(recipeVideo, EnumFileTypes.Video)
    });
    await recipe.validate();
    const stepsData = req.body.steps;
    const steps : Array<IStep['_id']> = [];

    for(let i = 0; i < stepsData.length; i++) {
        const stepData = stepsData[i];
        const stepImage = req.files[`step_image_${stepData.sequence_number}`] as UploadedFile;

        const stepInstance = new Step({
            recipe_id : recipe._id, 
            description : stepData.description,
            sequence_number : stepData.sequence_number, 
            image : uploadFile(stepImage, EnumFileTypes.StepImage)
        });
        await stepInstance.save();
        steps.push(stepInstance._id);
    }
    recipe.steps = steps;
    await recipe.save();
    await User.findByIdAndUpdate(recipe.user, { $push: { recipes: recipe._id } }, { new: true });

    return recipe;
};

const Recipe: IRecipeModel = mongoose.model<IRecipe, IRecipeModel>("Recipe", RecipeSchema);
export default Recipe;
