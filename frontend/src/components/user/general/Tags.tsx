import IRecipe from "../../../types/IRecipe";

interface IProps {
    tags : IRecipe['tags'];
    removeTag? : () => void;
}
export default function Tags(props : IProps) {
    return (
        <div className="flex flex-wrap gap-4">
            {
                props.tags.map(item => (
                    <div key={item} className="dark:bg-dark-elevate flex items-center gap-3 py-1 px-3 rounded-small">
                        {item}

                        { !!props.removeTag && (
                                <div className="dark:bg-dark-secondary-card w-[20px] h-[20px] text-center leading-[20px] text-small rounded-full">X</div>
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
}
