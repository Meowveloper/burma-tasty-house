interface IStep {
    _id? : string;
    recipe_id? : string;
    description : string;
    image : File | string | null | ArrayBuffer;
    sequence_number : number;
}

export default IStep;