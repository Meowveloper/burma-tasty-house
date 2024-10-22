import IStep from "./IStep";
import IUser from "./IUser";

interface IRecipe {
    _id? : string;
    title : string;
    image : File | string | ArrayBuffer | null;
    video : File | string | null | ArrayBuffer;
    description : string;
    preparation_time : number;
    difficulty_level : number;
    tags : Array<string>;
    ingredients : Array<string>;
    user : string | IUser;  
    views? : number;
    steps? : IStep[] | string[]; 
    createdAt? : Date; 
    updatedAt? : Date;
}
export default IRecipe;