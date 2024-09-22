import IStep from "./IStep";
import IUser from "./IUser";

interface IRecipe {
    _id? : string;
    title : string;
    image : File;
    video : File;
    description : string;
    preparation_time : number;
    difficulty_level : number;
    ingredients : Array<string>;
    user : string | IUser;  
    views? : number;
    steps? : string | IStep; 
    createdAt? : Date; 
    updatedAt? : Date;
}
export default IRecipe;