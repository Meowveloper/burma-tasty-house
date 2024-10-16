import mongoose, { Model, ObjectId, Schema } from "mongoose";
import IRecipe from "../types/IRecipe";
import User from "./User";
import { Request } from "express";
import removeFile from "../helpers/removeFile";
import IStep from "../types/IStep";
import Step from '../models/Step';

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
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };
    const imageFile = files["image"]?.[0];
    const videoFile = files["video"]?.[0];
    const recipe: IRecipe = new Recipe({
        ...req.body,
        image: imageFile ? imageFile.filename : null,
        video: videoFile ? videoFile.filename : null,
    });
    await recipe.validate();
    const stepsData = req.body.steps;
    const steps : Array<IStep['_id']> = [];

    for(let i = 0; i < stepsData.length; i++) {
        const stepData = stepsData[i];
        const stepImage = files[`steps[${i}].image`]?.[0];

        const stepInstance = new Step({
            recipe_id : recipe._id, 
            description : stepData.description,
            image : stepImage ? stepImage.filename : null, 
            sequence_number : stepData.sequence_number
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
