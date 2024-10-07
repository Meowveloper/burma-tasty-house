import { useState } from "react";
import IRecipe from "../../../types/IRecipe";
import UserGeneralTags from "../general/Tags";
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
            <div className="mt-3">
                { props.recipe?.tags?.length && <UserGeneralTags tags={props.recipe.tags}></UserGeneralTags> }
            </div>
            <div className="bg-transparent my-5 w-[95%] mx-auto h-[1px]"></div>
        </div>
    );

    function addTag () {
       props.setRecipe((prev : IRecipe) => ({ ...prev , tags : prev.tags ? [...prev.tags, newTag] : [newTag]}));
       setNewTag('');
    }
}
