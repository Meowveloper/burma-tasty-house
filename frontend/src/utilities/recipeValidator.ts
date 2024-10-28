import IRecipe from "../types/IRecipe";
import GeneralValidators from "./GeneralValidators";

// interface IRecipeValidator {
//     title : (title : IRecipe['title']) => boolean;
//     description : (description : IRecipe['description']) => boolean;
// }
// const recipeValidator : IRecipeValidator = {
//     title(title : IRecipe['title']) : boolean {
//         console.log(title)
//         return true;
//     }, 
//     description(description : IRecipe['description']) : boolean {
//         console.log(description);
//         return true;
//     }
// };

class RecipeValidator {
    public static title(title: IRecipe['title']): boolean {
        if(title && GeneralValidators.isText(title)) {
            return title.length > 2;
        } else {
            return false;
        }
    }

    public static all(recipe : IRecipe) : boolean {

        if(!recipe.title || !this.title(recipe.title)) {
            return false;
        }

        return true;
    }
}

RecipeValidator.title('hello');

export default RecipeValidator;

// export default recipeValidator;