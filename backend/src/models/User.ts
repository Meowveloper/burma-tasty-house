import mongoose, { Model, Schema } from "mongoose";
import bcrypt from 'bcrypt';
import IUser from '../types/IUser';
import EnumErrorNames from '../types/EnumErrorNames';
interface IUserModel extends Model<IUser> {
    register : (name : IUser['name'], email : IUser['email'], password : IUser['password']) => Promise<IUser>;
    login : (email : IUser['email'], password : IUser['password']) => Promise<IUser>;
}

const UserSchema = new Schema<IUser>({
    name : {
        type : String, 
        required : true
    }, 
    email : {
        type : String, 
        required : true,
        unique : true
    }, 
    password : {
        type : String, 
        required : true, 
    }, 
    avatar : {
        type : String, 
        required : false
    }, 
    role : {
        type : Boolean, 
        default : false
    }
}, { timestamps : true });

UserSchema.statics.register = async function (name : IUser['name'], email : IUser['email'], password : IUser['password']) : Promise<IUser> {
    const userExists = await this.findOne({ email : email });
    if(userExists) {
        const error = new Error("User already exists");
        error.name = EnumErrorNames.RegisterUserExists;
        throw error;
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);    
    const user : IUser = new this({
        name : name, 
        email : email, 
        password : hashedPassword
    });
    await user.save();
    return user;
}

UserSchema.statics.login = async function (email : IUser['email'], password : IUser['password']) : Promise<IUser> {
    const user : IUser = await this.findOne({ email : email });
    if(!user) {
        const error = new Error('user does not exists');
        error.name = EnumErrorNames.LoginUserDoesNotExist;
        throw error;
    }
    if(await bcrypt.compare(password, user.password)) {
        return user;
    } else {
        const error = new Error('incorrect password');
        error.name = EnumErrorNames.LoginIncorrectPassword;
        throw error;
    }
}

const User : IUserModel = mongoose.model<IUser, IUserModel>("User", UserSchema);
export default User;