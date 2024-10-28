class GeneralValidators {
    public static isText(text : string) {
        // Check if the text contains at least one alphabetic character (a-z, case-insensitive)
        return /[a-zA-Z]/.test(text);
    }
}

export default GeneralValidators;