import React, { useRef, useState } from "react";

export default function Tab1() {
    const hiddenImageInput = useRef<HTMLInputElement>(null);
    const [ imagePreviewUrl , setImagePreviewUrl ] = useState<string | null>(null);
    return (
        <div className="px-4">
            <div className="text-h2 mt-3 font-bold text-center">General Information</div>

            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Title</div>
                <input type="text" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Image</div>
                <div onClick={ () => { hiddenImageInput.current?.click(); } } className="dark:bg-dark-card text-center border dark:border-dark-border rounded-small w-full px-3 py-2 outline-none">Browse File</div>
                <input onChange={handleImageChange} type="file" accept="image/*" ref={hiddenImageInput} className="hidden" />
                <div className="w-full h-[300px] mt-3 rounded-small overflow-hidden">
                    <img className="w-full h-full" src={ imagePreviewUrl ? imagePreviewUrl : "/image-placeholder.jpg" } alt="" />
                </div>
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Description</div>
                <input type="text" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Preparation Time</div>
                <input type="number" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Difficulty Level</div>
                <input type="number" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="bg-transparent my-4 w-[95%] mx-auto h-[1px]"></div>
        </div>
    );

    function handleImageChange (e : React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if(file) {
            setImagePreviewUrl(URL.createObjectURL(file));
        }
    }
}
