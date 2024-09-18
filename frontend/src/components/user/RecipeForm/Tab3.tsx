
export default function Tab3() {
    const ingredients = ["Sugar", "Water", "Eggs", "Chicken", "Pork" , "Beef"];
    return (
        <div>
            <div className="text-h2 font-bold mt-3 text-center">
                add <span className="dark:text-dark-text-highlight">INGREDIENTS</span> according to your recipe's necessity 
            </div>
            <div className="mt-3 flex items-center gap-3">
                <input type="text" className="dark:bg-dark-card rounded-small flex-1 px-3 py-2 outline-none" />
                <div className="text-logo dark:bg-dark-elevate w-[30px] h-[30px] leading-[30px] rounded-full text-center">+</div>
            </div>
            <div className="flex mt-3 flex-wrap gap-4">
                {ingredients.map(item => (
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