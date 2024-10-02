import { useState } from "react";
import IRecipe from "../../../types/IRecipe";
interface IProps {
    recipe : IRecipe;
    setRecipe : React.Dispatch<React.SetStateAction<IRecipe>>;
}
export default function Tab2(props : IProps) {
    const [ newTag, setNewTag ] = useState<string>('');
    return (
        <div>
            <div className="text-h2 font-bold mt-3 text-center">
                add <span className="dark:text-dark-text-highlight">TAGS</span> to your recipe so that others can find it easily
            </div>
            <div className="mt-3 flex items-center gap-3">
                <input onChange={ (e : React.ChangeEvent<HTMLInputElement>) => { setNewTag(e.target.value); } } value={newTag} type="text" className="dark:bg-dark-card rounded-small flex-1 px-3 py-2 outline-none" />
                <div onClick={ addTag } className="text-logo dark:bg-dark-elevate w-[30px] h-[30px] leading-[30px] rounded-full text-center">+</div>
            </div>
            <div className="flex mt-3 flex-wrap gap-4">
                {!!props.recipe.tags?.length && props.recipe.tags.map(item => (
                    <div key={item} className="dark:bg-dark-elevate flex items-center gap-3 py-1 px-3 rounded-small">
                        {item}
                        <div className="dark:bg-dark-secondary-card w-[20px] h-[20px] text-center leading-[20px] text-small rounded-full">X</div>
                    </div>
                ))}
            </div>
            <div className="bg-transparent my-5 w-[95%] mx-auto h-[1px]"></div>
        </div>
    );

    function addTag () {
       props.setRecipe((prev : IRecipe) => ({ ...prev , tags : prev.tags ? [...prev.tags, newTag] : [newTag]}));
       setNewTag('');
    }
}