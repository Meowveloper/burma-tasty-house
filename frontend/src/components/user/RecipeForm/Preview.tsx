import IRecipe from "../../../types/IRecipe";
import UserGeneralTags from "../general/Tags";
import UserGeneralIngredients from "../general/Ingredients";
interface IProps {
    recipe: IRecipe;
}
export default function Preview(props: IProps) {
    return (
        <div>
            <div className="grid grid-cols-12 gap-2">
                {/* image and title */}
                <div className="flex flex-col gap-3 col-span-12">
                    <div className="w-full">
                        <img className="w-full h-[400px] rounded-small" src="/image-placeholder.jpg" alt="" />
                    </div>
                    <div className="text-h1 font-bold">
                        How to bake a cake?
                    </div>
                </div>
                {/* image and title end */}

                {/* preparation time and difficulty level */}
                <div className="col-span-12">
                    <div className="flex items-center gap-2">
                        <div>Preparation Time - </div>
                        <div className="font-bold">5 minutes</div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div>Difficulty Level - </div>
                        <div className="font-bold">8/10</div>
                    </div>
                </div>
                {/* preparation time and difficulty level end */}

                {/* description */}
                <div className="col-span-12">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, molestias sit quod laboriosam reprehenderit enim! Impedit eius nihil accusamus odit voluptate possimus porro perspiciatis cupiditate aliquid vitae! Dolores deleniti culpa odio ipsum voluptates quisquam quos consequatur? Modi eos quo fugit saepe quaerat iure eum eveniet aspernatur, cum maiores, expedita animi!
                </div>
                {/* description end */}

                {/* tags */}
                <div className="col-span-12">
                    <div>Tags</div>
                    { !!props.recipe?.tags?.length && (
                        <UserGeneralTags tags={props.recipe.tags}></UserGeneralTags>
                    )}
                </div>
                {/* tags end */}

                {/* ingredients */}
                <div className="col-span-12">
                    <div>Ingredients</div>
                    { !!props.recipe?.ingredients?.length && (
                        <UserGeneralIngredients ingredients={props.recipe.ingredients}></UserGeneralIngredients>
                    )}
                </div>
                {/* ingredients end */}
            </div>
        </div>
    );
}
