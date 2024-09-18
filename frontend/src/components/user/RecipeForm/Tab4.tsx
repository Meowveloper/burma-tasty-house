import { useRef } from "react";

export default function Tab4() {
    const hiddenImageInput = useRef<HTMLInputElement>(null);
    return (
        <div>
            <div className="text-h2 mb-5 font-bold mt-3 text-center">
                <span className="dark:text-dark-text-highlight">STEPS</span> to create your recipe
            </div>
            <div className="mb-3">
                <div className="px-1 font-bold text-h3">Step Number</div>
                <input type="number" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mb-3">
                <div className="px-1 font-bold text-h3">Description</div>
                <textarea rows={5} className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none"></textarea>
            </div>
            <div className="dark:bg-dark-border my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mb-3">
                <div className="px-1 font-bold text-h3">Image</div>
                <div onClick={ () => { hiddenImageInput.current?.click(); } } className="dark:bg-dark-card text-center border dark:border-dark-border rounded-small w-full px-3 py-2 outline-none">Browse File</div>
                <input type="file" accept="image/*" ref={hiddenImageInput} className="hidden" />
            </div>
            <div className="bg-transparent my-4 w-[95%] mx-auto h-[1px]"></div>
        </div>
    );
}
