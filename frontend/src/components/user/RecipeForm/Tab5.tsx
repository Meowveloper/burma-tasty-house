import { useRef } from "react";

export default function Tab5() {
    const hiddenVideoInput = useRef<HTMLInputElement>(null);
    return (
        <div>
            <div className="text-h2 mb-5 font-bold mt-3 text-center">
                tutorial <span className="dark:text-dark-text-highlight">VIDEO</span> of your recipe
            </div>
            <div className="mb-3">
                <div onClick={ () => { hiddenVideoInput.current?.click(); } } className="dark:bg-dark-card text-center border dark:border-dark-border rounded-small w-full px-3 py-2 outline-none">Browse File</div>
                <input type="file" accept="video/*" ref={hiddenVideoInput} className="hidden" />
            </div>
        </div>
    );
}
