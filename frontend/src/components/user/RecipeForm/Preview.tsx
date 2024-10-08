import IRecipe from "../../../types/IRecipe";
import UserGeneralTags from "../general/Tags";
import UserGeneralIngredients from "../general/Ingredients";
import { Icon } from "@iconify/react";
interface IProps {
    recipe: IRecipe;
    notPreview? : boolean
}
export default function Preview(props: IProps) {
    return (
        <div>
            <div className="grid grid-cols-12 gap-2">
                {/* image, title and views */}
                <div className="flex flex-col gap-3 col-span-12 border-b dark:border-dark-border pb-2">
                    <div className="w-full">
                        { !!props.recipe?.image && (
                            <img className="w-full h-[400px] rounded-small" src="/image-placeholder.jpg" alt="" />
                        ) }
                        { !props.recipe?.image && (
                            <div className="w-full">
                                <div className="text-h3">Image</div>
                                <div className="dark:text-dark-card">
                                    No image added...
                                </div>
                            </div>
                        ) }
                    </div>
                    <div className="flex justify-between items-center">
                        { !!props.recipe?.title && (
                            <div className="text-h1 font-bold">How to bake a cake?</div>
                        ) }
                        { !props.recipe?.title && (
                            <div className="">
                                <div className="text-h3">Title</div>
                                <div className="dark:text-dark-card">
                                    Title is not added...
                                </div>
                            </div>
                        ) }

                        { !!props.notPreview && (
                            <div className="flex items-center gap-2">
                                <Icon icon="ph:eye-light" />
                                <div>30</div>
                            </div>
                        )}
                    </div>
                </div>
                {/* image, title and views end */}

                {/* preparation time, difficulty level and user */}
                <div className="col-span-12 border-b dark:border-dark-border pb-2">
                    <div className="flex items-center gap-2">
                        <div>Post owner - </div>
                        { !!props.recipe?.user && (
                            <div className="font-bold text-h3 cursor-pointer">Meow</div>
                        )}
                        { !props.recipe?.user && (
                            <div className="dark:text-dark-card">No data...</div>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <div>Preparation Time - </div>
                        { !!props.recipe?.preparation_time && (
                            <div className="font-bold">5 minutes</div>
                        )}
                        { !props.recipe?.preparation_time && (
                            <div className="dark:text-dark-card">No data...</div>
                        )}
                    </div>
                    <div className="flex items-center gap-2">
                        <div>Difficulty Level - </div>
                        { !!props.recipe?.difficulty_level && (
                            <div className="font-bold">8/10</div>
                        )}
                        { !props.recipe?.difficulty_level && (
                            <div className="dark:text-dark-card">No data...</div>
                        )}
                    </div>
                </div>
                {/* preparation time, difficulty level and user end */}

                {/* description */}
                { !!props.recipe?.description && (
                    <div className="col-span-12 border-b dark:border-dark-border pb-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, unde. Aut similique doloribus veritatis reprehenderit magni provident cumque possimus maxime!
                    </div>
                ) }
                { !props.recipe?.description && (
                    <div className="dark:text-dark-card col-span-12 border-b dark:border-dark-border pb-2">
                        No description added...
                    </div>
                )}
                {/* description end */}

                {/* tags */}
                <div className="col-span-12 border-b dark:border-dark-border pb-2">
                    <div className="text-h2">Tags</div>
                    { !!props.recipe?.tags?.length && (
                        <div className="mt-3">
                            <UserGeneralTags tags={props.recipe.tags}></UserGeneralTags>
                        </div>
                    ) }
                    {!props.recipe?.tags?.length && <div className="dark:text-dark-card">No tags added.....</div> }
                </div>
                {/* tags end */}

                {/* ingredients */}
                <div className="col-span-12 border-b dark:border-dark-border pb-2">
                    <div className="text-h2">Ingredients</div>
                    { !!props.recipe?.ingredients?.length && (
                        <div className="mt-3">
                            <UserGeneralIngredients ingredients={props.recipe.ingredients}></UserGeneralIngredients>
                        </div>
                    ) }
                    {!props.recipe?.ingredients?.length && <div className="dark:text-dark-card">No ingredients added.....</div> }
                </div>
                {/* ingredients end */}

                {/* steps */}
                <div className="col-span-12 border-b dark:border-dark-border pb-2">
                    <div className="text-h2">Steps</div>
                    { !!props.recipe?.steps?.length && (
                        <div className="grid grid-cols-1 gap-2">
                            {/* card */}
                            <div className="dark:bg-dark-card p-2 rounded-small">
                                <div className="flex items-center gap-3">
                                    <img className="w-45% h-[150px] rounded-small" src="/image-placeholder.jpg" alt="" />
                                    <div className="flex-1 flex items-center gap-2">
                                        <div className="text-h3 font-bold">step</div>
                                        <div className="text-logo font-bold">1</div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iste! Dolor facere consectetur nemo accusamus optio itaque ducimus iure voluptates.
                                </div>
                            </div>
                            {/* card end */}
                            
                            {/* card */}
                            <div className="dark:bg-dark-card p-2 rounded-small">
                                <div className="flex items-center gap-3">
                                    <img className="w-45% h-[150px] rounded-small" src="/image-placeholder.jpg" alt="" />
                                    <div className="flex-1 flex items-center gap-2">
                                        <div className="text-h3 font-bold">step</div>
                                        <div className="text-logo font-bold">2</div>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iste! Dolor facere consectetur nemo accusamus optio itaque ducimus iure voluptates.
                                </div>
                            </div>
                            {/* card end */}
                        </div>
                    ) }
                    { !props.recipe?.steps?.length && (
                        <div className="dark:text-dark-card">
                            No steps added...
                        </div>
                    )}
                </div>
                {/* steps end */}

                {/* video */}
                <div className="col-span-12 border-b dark:border-dark-border pb-2">
                    <div className="text-h2 mb-2">
                        Tutorial Video
                    </div>
                    { !!props.recipe?.video && (
                        <video className="h-[200px] w-full" controls>
                            <source src="/video-placeholder.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                    { !props.recipe?.video && (
                        <div className="dark:text-dark-card">No video added..</div>
                    )}
                </div>
                {/* video end */}

                {/* buttons */}
                <div className="col-span-12 mt-3">
                    <button className="dark:bg-dark-card px-3 py-2 me-3 rounded-small">Back to Form</button>
                    <button className="dark:bg-dark-elevate px-3 py-2 rounded-small">Save</button>
                </div>
                {/* buttons end */}
            </div>
        </div>
    );
}
