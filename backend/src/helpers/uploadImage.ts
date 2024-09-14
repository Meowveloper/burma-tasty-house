import multer , { StorageEngine } from 'multer';
import path from 'path';
import { Request } from 'express';
const storage : StorageEngine = multer.diskStorage({
    destination : function (req : Request, file : Express.Multer.File, cb : (error : Error | null, destination : string) => void) {
        cb(null, path.join(__dirname , '/../../public'));
    }, 
    filename : function (req : Request, file : Express.Multer.File , cb : (error : Error | null, destination : string) => void) {
        cb(null, Date.now() + file.originalname);
    }
});

const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    // Check if the file is an image
    if (!file.mimetype.startsWith('image')) {
        return cb(new Error('Invalid file type, only images are allowed'));
    }
    cb(null, true);
};

const uploadImage = multer({ storage : storage , fileFilter : fileFilter });
export default uploadImage;