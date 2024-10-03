import { useState, useRef } from "react";
import IRecipe from "../../../types/IRecipe";
import IStep from "../../../types/IStep";

interface IProps {
    recipe : IRecipe;
    setRecipe : React.Dispatch<React.SetStateAction<IRecipe>>;
}
export default function Tab4(props : IProps) {
    const hiddenImageInput = useRef<HTMLInputElement>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
    const [ newSequenceNumber , setNewSequenceNumber ] = useState<number>(() => {
        return props.recipe.steps ? props.recipe.steps.length + 1 : 1;
    }); 
    const [ newDescription, setNewDescription ] = useState<string>('');
    const [ newImage, setNewImage ] = useState<File | null>(null);
    return (
        <div>
            <div className="text-h2 mb-5 font-bold mt-3 text-center">
                <span className="dark:text-dark-text-highlight">STEPS</span> to create your recipe
            </div>
            <div className="mb-3">
                <div className="px-1 font-bold text-h3">Step Number</div>
                <input disabled onChange={ (e : React.ChangeEvent<HTMLInputElement>) => { setNewSequenceNumber(Number(e.target.value)); } } value={newSequenceNumber} type="number" min="1" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mb-3">
                <div className="px-1 font-bold text-h3">Description</div>
                <textarea onChange={ (e : React.ChangeEvent<HTMLTextAreaElement>) => { setNewDescription(e.target.value); } } value={newDescription} rows={5} className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none"></textarea>
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mb-3">
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
            </div>
            <div className="bg-transparent my-4 w-[95%] mx-auto h-[1px]"></div>
            {!!imagePreviewUrl && (
                <div className="w-full h-[300px] mt-3 rounded-small overflow-hidden">
                    <img className="w-full h-full" src={ imagePreviewUrl } alt="" />
                </div>
            )}
            <div className="text-center my-5 rounded-small">
                <button onClick={addStep} className="bg-dark-border w-[155px] h-[44px] rounded-small">Add</button>
            </div>
            <div className="my-5">
                <ul>
                    { !!props.recipe.steps?.length && props.recipe.steps.map((item : IStep) => (
                        <li key={item.sequence_number}>
                            <span className="font-bold text-dark-text-highlight">{item.sequence_number}.</span> {item.description}
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setImagePreviewUrl(URL.createObjectURL(file));
            setNewImage(file);
        }
    }


    function addStep () {

        const newStep : IStep = {
            sequence_number : newSequenceNumber, 
            description : newDescription, 
            image : newImage
        }
        
        props.setRecipe((prev : IRecipe) => ({ ...prev, steps : (prev.steps ? [...prev.steps, newStep ] : [ newStep ]) }))
        setNewSequenceNumber( prev => prev + 1);
        setNewDescription('');
        setNewImage(null);
        setImagePreviewUrl(null);
    }

}
