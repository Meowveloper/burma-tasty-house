export default function UserRecipeTab2() {
    const tags = ["Sugar", "Water", "Eggs", "Chicken", "Pork" , "Beef"];
    return (
        <div>
            <div className="text-h2 font-bold mt-3 text-center">
                add <span className="dark:text-dark-text-highlight">TAGS</span> to your recipe so that others can find it easily
            </div>
            <div className="mt-3">
                <input type="text" className="dark:bg-dark-card rounded-small w-full px-3 py-2 outline-none" />
            </div>
            <div className="flex mt-3 flex-wrap gap-4">
                {tags.map(item => (
                    <div key={item} className="dark:bg-dark-elevate flex items-center gap-3 py-1 px-3 rounded-small">
                        {item}
                        <div className="dark:bg-dark-secondary-card w-[20px] h-[20px] text-center leading-[20px] text-small rounded-full">X</div>
                    </div>
                ))}
            </div>
            <div className="bg-transparent my-5 w-[95%] mx-auto h-[1px]"></div>
        </div>
    );
}
