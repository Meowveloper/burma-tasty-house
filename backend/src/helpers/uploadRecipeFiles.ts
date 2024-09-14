import multer, { StorageEngine } from "multer";
import path from "path";
import { Request } from "express";

// Define Multer storage for both image and video
const storage: StorageEngine = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
        cb(null, path.join(__dirname, "/../../public"));
    },
    filename: function (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
        cb(null, Date.now() + path.extname(file.originalname)); // Generate unique filename
    },
});

// Define fileFilter for both images and videos
const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const imageFileTypes = /jpeg|jpg|png|gif/; // Image file types
    const videoFileTypes = /mp4|avi|mkv/;      // Video file types
    const extName = imageFileTypes.test(path.extname(file.originalname).toLowerCase()) ||
                    videoFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = imageFileTypes.test(file.mimetype) ||
                     videoFileTypes.test(file.mimetype);

    if (mimeType && extName) {
        return cb(null, true);
    } else {
        cb(new Error("Only images or videos are allowed!"));
    }
};

// Configure Multer to handle both image and video fields
const uploadRecipeFiles = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 200 }, // Limit file size to 200MB
    fileFilter: fileFilter
}).fields([
    { name: 'image', maxCount: 1 },  // Single image
    { name: 'video', maxCount: 1 }   // Single video (optional)
]);

export default uploadRecipeFiles;
