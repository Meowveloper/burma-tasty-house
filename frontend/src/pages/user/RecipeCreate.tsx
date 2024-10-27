import { useState, useEffect } from "react";
import UserRecipeForm from "../../components/user/RecipeForm/Index";
import EnumRecipeFormActions from "../../types/EnumRecipeFormActions";
import UserRecipeFormPreview from "../../components/user/RecipeForm/Preview";
import IRecipe from "../../types/IRecipe";
import axios from "../../utilities/axios";
import storeObjectInIndexedDB from "../../utilities/storeObjectInIndexDB";
import getRecipeFromIndexedDB from "../../utilities/getObjectFromIndexDB";
import appendRecipeToFormData from "../../utilities/appendRecipeToFormData";
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
        const formData : FormData = appendRecipeToFormData(recipe);
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
