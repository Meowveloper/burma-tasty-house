import IRecipe from "../../../types/IRecipe";

interface IProps {
    recipe: IRecipe;
}
export default function Preview(props: IProps) {
    console.log(props); // delete later
    return <div>Preview</div>;
}
