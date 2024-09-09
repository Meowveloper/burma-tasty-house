import { Document, ObjectId } from "mongoose"
interface IUser extends Document {
    _id : ObjectId; 
    name : string;
    email : string;
    password : string;
    avatar? : string;
    role : boolean;
}
export default IUser;