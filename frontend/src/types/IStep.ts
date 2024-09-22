interface IStep {
    _id : string;
    recipe_id : string;
    description : string;
    image : File;
    sequence_number : number;
}

export default IStep;