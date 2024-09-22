import React, { useEffect, useRef, useState } from "react";
import IRecipe from "../../../types/IRecipe";
interface IProps {
    recipe : IRecipe;
    setRecipe : React.Dispatch<React.SetStateAction<IRecipe>>
}
export default function Tab1(props : IProps) {
    const hiddenImageInput = useRef<HTMLInputElement>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    
    useEffect(() => {
        console.log('checking useEffect from components/user/RecipeForm/Tab1');
        if(props.recipe.image) {
            setImagePreviewUrl(URL.createObjectURL(props.recipe.image));
        }
    }, [props.recipe.image]);
    return (
        <div className="px-4">
            <div className="text-h2 mt-3 font-bold text-center">General Information</div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Title</div>
                <input value={props.recipe.title || ''} onChange={ handleTitleChange } type="text" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Image</div>
                <div
                    onClick={() => {
                        hiddenImageInput.current?.click();
                    }}
                    className="dark:bg-dark-card text-center border dark:border-dark-border rounded-small w-full px-3 py-2 outline-none"
                >
                    Browse File
                </div>
                <input onChange={handleImageChange} type="file" accept="image/*" ref={hiddenImageInput} className="hidden" />
                {!!imagePreviewUrl && (
                    <div className="w-full h-[300px] mt-3 rounded-small overflow-hidden">
                        <img className="w-full h-full" src={imagePreviewUrl} alt="" />
                    </div>
                )}
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Description</div>
                <input onChange={ handleDescriptionChange } value={props.recipe.description || ''} type="text" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Preparation Time</div>
                <input onChange={ handlePreparationTimeChange } value={props.recipe.preparation_time || ''} type="number" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Difficulty Level</div>
                <input onChange={ handleDifficultyLevelChange } value={props.recipe.difficulty_level || ''} type="number" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="bg-transparent my-4 w-[95%] mx-auto h-[1px]"></div>
        </div>
    );

    function handleTitleChange(e : React.ChangeEvent<HTMLInputElement>) {
        props.setRecipe((prev : IRecipe) => ({...prev, title : e.target.value}));
    }

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            props.setRecipe((prev : IRecipe) => ({...prev, image : file}));
            setImagePreviewUrl(URL.createObjectURL(file));
        }
    }

    function handleDescriptionChange(e : React.ChangeEvent<HTMLInputElement>) {
        props.setRecipe((prev : IRecipe) => ({...prev, description : e.target.value}));
    }

    function handlePreparationTimeChange(e : React.ChangeEvent<HTMLInputElement>) {
        props.setRecipe((prev : IRecipe) => ({
            ...prev, preparation_time : Number(e.target.value)
        }));
    }

    function handleDifficultyLevelChange(e : React.ChangeEvent<HTMLInputElement>) {
        props.setRecipe((prev : IRecipe) => ({
            ...prev, difficulty_level : Number(e.target.value)
        }));
    }
}
