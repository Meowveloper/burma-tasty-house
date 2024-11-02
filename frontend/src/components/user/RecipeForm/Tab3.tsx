import { SetStateAction, useRef, useState } from "react";
import IRecipe from "../../../types/IRecipe";
import UserGeneralIngredients from "../general/Ingredients";
import GeneralValidators from "../../../utilities/GeneralValidators";
interface IProps {
    recipe: IRecipe;
    setRecipe: React.Dispatch<SetStateAction<IRecipe>>;
    pageStart: boolean;
    setPageStart: React.Dispatch<SetStateAction<boolean>>;
}
export default function Tab3(props: IProps) {
    const [newIngredient, setNewIngredient] = useState<string>("");
    const inputTag = useRef<HTMLInputElement>(null);
    return (
        <div>
            <div className="text-h2 font-bold mt-3 text-center">
                add <span className="dark:text-dark-text-highlight">INGREDIENTS</span> according to your recipe's necessity
            </div>
            <div className="mt-3 flex items-center gap-3">
                <input
                    ref={inputTag}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        props.setPageStart(false);
                        setNewIngredient(e.target.value);
                    }}
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => { if(e.key === 'Enter') addIngredient(); else return; }}
                    value={newIngredient}
                    type="text"
                    className="dark:bg-dark-card rounded-small flex-1 px-3 py-2 outline-none"
                />
                <div onClick={addIngredient} className="text-logo dark:bg-dark-elevate w-[30px] h-[30px] leading-[30px] rounded-full text-center">
                    +
                </div>
            </div>
            { (!props.pageStart && (!GeneralValidators.isText(newIngredient) || !GeneralValidators.greaterThanOrEqualTextLength(newIngredient, 3))) && (
                <span className="text-red-500 font-bold">Each ingredient must have at least 3 characters and one alphabetic character!</span>
            )}
            <div className="mt-3">{!!props.recipe.ingredients?.length && <UserGeneralIngredients ingredients={props.recipe.ingredients} removeIngredients={removeIngredients}></UserGeneralIngredients>}</div>
            <div className="bg-transparent my-5 w-[95%] mx-auto h-[1px]"></div>
        </div>
    );

    function addIngredient()
    {
        if (!GeneralValidators.isText(newIngredient) || !GeneralValidators.greaterThanOrEqualTextLength(newIngredient, 3)) return;
        props.setRecipe((prev: IRecipe) => ({ ...prev, ingredients: prev.ingredients ? [...prev.ingredients, newIngredient] : [newIngredient] }));
        setNewIngredient("");
        props.setPageStart(true);
    }

    function removeIngredients (id : number)
    {
        const newIngredients = props.recipe.ingredients.filter((item, i) => { if(item) return i !== id; });
        props.setRecipe((prev) => ({ ...prev, ingredients : newIngredients}));

    }
}
