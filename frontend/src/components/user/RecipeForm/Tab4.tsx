import { useState, useRef, useEffect } from "react";
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
        return props.recipe.steps?.length ? props.recipe.steps.slice().sort((a, b) => a.sequence_number - b.sequence_number)[props.recipe.steps.length - 1].sequence_number + 1 : 1; // sort and plus one to the latest sequence number
    }); 

    useEffect(() => {
        console.log('checking infinite loop from components/user/RecipeForm/Tab4');
        setNewSequenceNumber(() => {
            return props.recipe.steps?.length ? props.recipe.steps.slice().sort((a, b) => a.sequence_number - b.sequence_number)[props.recipe.steps.length - 1].sequence_number + 1 : 1; // sort and plus one to the latest sequence number
        })
    }, [ props.recipe.steps]);

    const [ newDescription, setNewDescription ] = useState<string>('');
    const [ newImage, setNewImage ] = useState<File | string | undefined>(undefined);
    return (
        <div>
            <div className="text-h2 mb-5 font-bold mt-3 text-center">
                <span className="dark:text-dark-text-highlight">STEPS</span> to create your recipe
            </div>
            <div className="mb-3">
                <div className="px-1 font-bold text-h3">Step Number</div>
                <input onChange={ (e : React.ChangeEvent<HTMLInputElement>) => { setNewSequenceNumber(Number(e.target.value)); } } value={newSequenceNumber} type="number" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
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
                <ul className="space-y-2">
                    { !!(props.recipe.steps?.length && typeof props.recipe.steps[0] !== 'string') && (props.recipe.steps.slice().sort((a, b) => a.sequence_number - b.sequence_number) as IStep[]).map((item : IStep) => (
                        <li className="flex justify-between" key={item.sequence_number}>
                            <div>
                                <span className="font-bold text-dark-text-highlight">{item.sequence_number}.</span> {item.description}
                            </div>
                            <div onClick={ () => { removeStep(item.sequence_number) }} className="dark:bg-dark-card w-[30px] h-[30px] grid place-items-center rounded-[3px]">X</div>
                        </li>
                    )) }
                </ul>
            </div>
        </div>
    );

    function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) : void
    {
        const file = e.target.files?.[0];
        if (file) {
            setImagePreviewUrl(URL.createObjectURL(file));
            setNewImage(file);
        }
    }


    function addStep () : void
    {

        const newStep : IStep = {
            sequence_number : newSequenceNumber, 
            description : newDescription, 
            image : newImage
        }
        
        props.setRecipe((prev : IRecipe) => ({ ...prev, steps : (prev.steps?.length ? [...prev.steps, newStep ] : [ newStep ]) } as IRecipe))
        setNewDescription('');
        setNewImage(undefined);
        setImagePreviewUrl(null);
    }

    function removeStep (sequence_number : number) : void 
    {
        const newSteps = props.recipe.steps.filter((item) => item.sequence_number !== sequence_number);
        props.setRecipe((prev : IRecipe) => ({ ...prev, steps : newSteps as IRecipe['steps'] }));
    }

}
