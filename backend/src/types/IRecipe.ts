import mongoose, { Document } from "mongoose";
import IUser from "./IUser";
import IStep from "./IStep";

interface IRecipe extends Document {
    _id : mongoose.Schema.Types.ObjectId;
    title : string;
    image : string;
    video : string;
    description : string;
    preparation_time : number;
    difficulty_level : number;
    ingredients : Array<string>;
    user : mongoose.Schema.Types.ObjectId | IUser;  
    views? : number;
    steps? : mongoose.Schema.Types.ObjectId[] | IStep[]
    createdAt? : Date; 
    updatedAt? : Date;
}

export interface IRecipePopulatedWithUser extends IRecipe {
    user : IUser;
}
export interface IRecipePopulatedWithSteps extends IRecipe {
    steps? : IStep[]
}

export default IRecipe;
