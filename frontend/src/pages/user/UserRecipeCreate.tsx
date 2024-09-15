import UserRecipeForm from "../../components/user/UserRecipeForm";

export default function UserRecipeCreate() {
    return (
        <div>
            <div className="dark:text-dark-text-highlight text-h1">Create Your Own Recipe</div>
            <UserRecipeForm></UserRecipeForm>
        </div>
    );
}
