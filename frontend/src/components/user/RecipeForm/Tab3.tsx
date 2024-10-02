import { SetStateAction, useState } from "react";
import IRecipe from "../../../types/IRecipe";

interface IProps {
    recipe : IRecipe;
    setRecipe : React.Dispatch<SetStateAction<IRecipe>>;
}
export default function Tab3(props : IProps) {
    const [ newIngredient, setNewIngredient ] = useState<string>('');
    return (
        <div>
            <div className="text-h2 font-bold mt-3 text-center">
                add <span className="dark:text-dark-text-highlight">INGREDIENTS</span> according to your recipe's necessity 
            </div>
            <div className="mt-3 flex items-center gap-3">
                <input onChange={ (e : React.ChangeEvent<HTMLInputElement>) => { setNewIngredient(e.target.value); } } value={newIngredient} type="text" className="dark:bg-dark-card rounded-small flex-1 px-3 py-2 outline-none" />
                <div onClick={ addIngredient } className="text-logo dark:bg-dark-elevate w-[30px] h-[30px] leading-[30px] rounded-full text-center">+</div>
            </div>
            <div className="flex mt-3 flex-wrap gap-4">
                {!!props.recipe.ingredients?.length && props.recipe.ingredients.map(item => (
                    <div key={item} className="dark:bg-dark-elevate flex items-center gap-3 py-1 px-3 rounded-small">
                        {item}
                        <div className="dark:bg-dark-secondary-card w-[20px] h-[20px] text-center leading-[20px] text-small rounded-full">X</div>
                    </div>
                ))}
            </div>
            <div className="bg-transparent my-5 w-[95%] mx-auto h-[1px]"></div>
        </div>
    );

    function addIngredient() {
        props.setRecipe((prev : IRecipe) => ({ ...prev, ingredients : prev.ingredients ? [...prev.ingredients, newIngredient] : [newIngredient]}));
    }
}