export default function UserRecipeTab1() {
    return (
        <div className="px-4">
            <div className="text-h2 mt-3 font-bold text-center">General Information</div>

            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Title</div>
                <input type="text" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-text my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Image</div>
                <input type="text" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-text my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Description</div>
                <input type="text" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-text my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Preparation Time</div>
                <input type="number" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="dark:bg-dark-text my-4 w-[95%] mx-auto h-[1px]"></div>
            <div className="mt-3">
                <div className="px-1 font-bold text-h3">Difficulty Level</div>
                <input type="number" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="bg-transparent my-4 w-[95%] mx-auto h-[1px]"></div>
        </div>
    );
}
