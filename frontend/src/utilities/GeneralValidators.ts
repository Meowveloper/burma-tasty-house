class GeneralValidators {
    public static isText(text: string): boolean {
        return /[a-zA-Z]/.test(text);
    }

    public static isImageByExtension(fileName: string): boolean {
        const allowedExtensions = ["jpg", "jpeg", "png", "svg"];
        const fileExtension = fileName.split(".").pop()?.toLowerCase();
        return fileExtension ? allowedExtensions.includes(fileExtension) : false;
    }
}

export default GeneralValidators;
