import { useRef, useState } from "react";

export default function Tab5() {
    const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
    const hiddenVideoInput = useRef<HTMLInputElement>(null);
    return (
        <div>
            <div className="text-h2 mb-5 font-bold mt-3 text-center">
                tutorial <span className="dark:text-dark-text-highlight">VIDEO</span> of your recipe
            </div>
            <div className="mb-3">
                <div
                    onClick={() => {
                        hiddenVideoInput.current?.click();
                    }}
                    className="dark:bg-dark-card text-center border dark:border-dark-border rounded-small w-full px-3 py-2 outline-none"
                >
                    Browse File
                </div>
                <input onChange={handleVideoChange} type="file" accept="video/*" ref={hiddenVideoInput} className="hidden" />
            </div>
            {!!videoPreviewUrl && (
                <video className="h-[400px] w-full" controls>
                    <source src={videoPreviewUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
        </div>
    );
    function handleVideoChange(e : React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if(file) {
            setVideoPreviewUrl(URL.createObjectURL(file));
        }

    }
}
