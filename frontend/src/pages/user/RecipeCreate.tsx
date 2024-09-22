import UserRecipeForm from "../../components/user/RecipeForm/Index";
import EnumRecipeFormActions from "../../types/EnumRecipeFormActions";

export default function UserRecipeCreate() {
    return (
        <div>
            <div className="dark:text-dark-text-highlight text-h1">Create Your Own Recipe</div>
            <UserRecipeForm action={EnumRecipeFormActions.Store}></UserRecipeForm>
        </div>
    );
}
