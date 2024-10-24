import { useState, useEffect } from "react";
import UserRecipeForm from "../../components/user/RecipeForm/Index";
import EnumRecipeFormActions from "../../types/EnumRecipeFormActions";
import UserRecipeFormPreview from "../../components/user/RecipeForm/Preview";
import IRecipe from "../../types/IRecipe";
import IStep from "../../types/IStep";
import axios from "../../utilities/axios";
import storeObjectInIndexedDB from "../../utilities/storeObjectInIndexDB";
import getRecipeFromIndexedDB from "../../utilities/getObjectFromIndexDB";
export default function UserRecipeCreate() {
    const [showPreview, setShowPreview] = useState<boolean>(false);

    const [recipe, setRecipe] = useState<IRecipe>({} as IRecipe);
    // Function to fetch recipe from IndexedDB
    const fetchRecipeFromIndexedDB = () => {
        getRecipeFromIndexedDB(data => {
            if (data) {
                console.log("Retrieved recipe:", data);
                setRecipe(data); // Set the retrieved recipe to state
            } else {
                console.log("recipe not found");
            }
        });
    };

    // Use useEffect to fetch the recipe when the component mounts
    useEffect(() => {
        fetchRecipeFromIndexedDB();
    }, []); // Empty dependency array means this runs once on mount

    useEffect(() => {
        console.log("checking useEffect in pages/user/RecipeCreate.tsx");
        storeObjectInIndexedDB(recipe);
        console.log("recipe from pages/user/RecipeCreate.tsx", recipe);
    }, [recipe]);

    return (
        <>
            {!showPreview && (
                <div>
                    <div className="dark:text-dark-text-highlight text-h1">Create Your Own Recipe</div>
                    <UserRecipeForm saveRecipe={saveRecipe} recipe={recipe} setRecipe={setRecipe} action={EnumRecipeFormActions.Store} setShowPreview={setShowPreview}></UserRecipeForm>
                </div>
            )}

            {showPreview && <UserRecipeFormPreview setShowPreview={setShowPreview} recipe={recipe} saveRecipe={saveRecipe}></UserRecipeFormPreview>}
        </>
    );

    function saveRecipe() {
        //form data
        const formData = new FormData();
        formData.append("title", recipe.title);
        if (recipe.image && recipe.image instanceof File) formData.append("image", recipe.image);
        if (recipe.video && recipe.video instanceof File) formData.append("video", recipe.video);
        formData.append("description", recipe.description);
        formData.append("preparation_time", String(recipe.preparation_time));
        formData.append("difficulty_level", String(recipe.difficulty_level));
        formData.append("ingredients", JSON.stringify(recipe.ingredients));
        formData.append("user", "66e057444aa915f7d07ec5c2");
        if (recipe.steps) {
            const steps: IStep[] = recipe.steps.map(item => ({
                ...item,
                image: item.image instanceof File ? undefined : item.image,
            }));
            formData.append("steps", JSON.stringify(steps));
            recipe.steps?.forEach((step) => {
                if (step.image instanceof File) {
                    formData.append(`step_image_${step.sequence_number}`, step.image); // Append step image file
                }
            });
        }
        //form data end

        axios
            .post("http://localhost:8000/api/recipes", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then(res => {
                console.log(res);
            });
    }
}
