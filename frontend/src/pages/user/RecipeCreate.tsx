import { useState, useEffect } from "react";
import UserRecipeForm from "../../components/user/RecipeForm/Index";
import EnumRecipeFormActions from "../../types/EnumRecipeFormActions";
import UserRecipeFormPreview from "../../components/user/RecipeForm/Preview";
import EnumLocalStorageKeys from "../../types/EnumLocalStorageKeys";
import IRecipe from "../../types/IRecipe";
export default function UserRecipeCreate() {
    const [showPreview, setShowPreview] = useState<boolean>(false);

    const [recipe, setRecipe] = useState<IRecipe>(() => {
        const draftRecipe = localStorage.getItem(EnumLocalStorageKeys.DraftNewRecipe);
        return draftRecipe ? (JSON.parse(draftRecipe) as IRecipe) : ({} as IRecipe);
    });

    useEffect(() => {
        console.log("checking useEffect in pages/user/RecipeCreate.tsx");
        localStorage.setItem(EnumLocalStorageKeys.DraftNewRecipe, JSON.stringify(recipe));
        console.log("recipe from pages/user/RecipeCreate.tsx", recipe);
    }, [recipe]);

    return (
        <>
            {!showPreview && (
                <div>
                    <div className="dark:text-dark-text-highlight text-h1">Create Your Own Recipe</div>
                    <UserRecipeForm recipe={recipe} setRecipe={setRecipe} action={EnumRecipeFormActions.Store} setShowPreview={setShowPreview}></UserRecipeForm>
                </div>
            )}

            {showPreview && <UserRecipeFormPreview recipe={recipe}></UserRecipeFormPreview>}
        </>
    );
}
