import { useEffect, useState } from "react";
import UserRecipeFormTab1 from "./Tab1";
import { motion } from "framer-motion";
import UserRecipeFormTab2 from "./Tab2";
import UserRecipeFormTab3 from "./Tab3";
import UserRecipeFormTab4 from "./Tab4";
import UserRecipeFormTab5 from "./Tab5";
import IRecipe from "../../../types/IRecipe";
import EnumLocalStorageKeys from "../../../types/EnumLocalStorageKeys";

type TTabNumber = 1 | 2 | 3 | 4 | 5;

export default function Index() {

    const [tabNumber, setTabNumber] = useState<TTabNumber>(1);

    const [ recipe , setRecipe ] = useState<IRecipe>(() => {
        const draftRecipe = localStorage.getItem(EnumLocalStorageKeys.DraftNewRecipe);
        return draftRecipe ? (JSON.parse(draftRecipe)) as IRecipe : {} as IRecipe
    });
    useEffect(() => {
        console.log('checking useEffect in components/RecipeForm/Index.tsx');
        localStorage.setItem(EnumLocalStorageKeys.DraftNewRecipe, JSON.stringify(recipe));
    }, [recipe]);

    
    return (
        <div>
            <div className="dark:bg-dark-elevate py-3 rounded-normal flex w-full justify-between px-9 mt-5 ">
                <div
                    onClick={() => {
                        setTabNumber(1);
                    }}
                    className={`${tabNumber === 1 ? "dark:bg-dark-card text-dark-text-highlight" : "dark:bg-dark-secondary-card"} h-[25px] w-[25px] leading-[25px] text-center rounded-full`}
                >
                    1
                </div>
                <div
                    onClick={() => {
                        setTabNumber(2);
                    }}
                    className={`${tabNumber === 2 ? "dark:bg-dark-card text-dark-text-highlight" : "dark:bg-dark-secondary-card"} h-[25px] w-[25px] leading-[25px] text-center rounded-full`}
                >
                    2
                </div>
                <div
                    onClick={() => {
                        setTabNumber(3);
                    }}
                    className={`${tabNumber === 3 ? "dark:bg-dark-card text-dark-text-highlight" : "dark:bg-dark-secondary-card"} h-[25px] w-[25px] leading-[25px] text-center rounded-full`}
                >
                    3
                </div>
                <div
                    onClick={() => {
                        setTabNumber(4);
                    }}
                    className={`${tabNumber === 4 ? "dark:bg-dark-card text-dark-text-highlight" : "dark:bg-dark-secondary-card"} h-[25px] w-[25px] leading-[25px] text-center rounded-full`}
                >
                    4
                </div>
                <div
                    onClick={() => {
                        setTabNumber(5);
                    }}
                    className={`${tabNumber === 5 ? "dark:bg-dark-card text-dark-text-highlight" : "dark:bg-dark-secondary-card"} h-[25px] w-[25px] leading-[25px] text-center rounded-full`}
                >
                    5
                </div>
            </div>

            <div className="dark:bg-dark-secondary-card mt-5 p-3 rounded-normal">
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: tabNumber === 1 ? 1 : 0, height: tabNumber === 1 ? "auto" : 0 }} transition={{ duration: 0.3 }}>
                    {tabNumber === 1 && <UserRecipeFormTab1 recipe={recipe} setRecipe={setRecipe}></UserRecipeFormTab1>}
                </motion.div>
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: tabNumber === 2 ? 1 : 0, height: tabNumber === 2 ? "auto" : 0 }} transition={{ duration: 0.3 }}>
                    {tabNumber === 2 && <UserRecipeFormTab2 recipe={recipe} setRecipe={setRecipe}></UserRecipeFormTab2>}
                </motion.div>
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: tabNumber === 3 ? 1 : 0, height: tabNumber === 3 ? "auto" : 0 }} transition={{ duration: 0.3 }}>
                    {tabNumber === 3 && <UserRecipeFormTab3 recipe={recipe} setRecipe={setRecipe}></UserRecipeFormTab3>}
                </motion.div>
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: tabNumber === 4 ? 1 : 0, height: tabNumber === 4 ? "auto" : 0 }} transition={{ duration: 0.3 }}>
                    {tabNumber === 4 && <UserRecipeFormTab4 recipe={recipe} setRecipe={setRecipe}></UserRecipeFormTab4>}
                </motion.div>
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: tabNumber === 5 ? 1 : 0, height: tabNumber === 5 ? "auto" : 0 }} transition={{ duration: 0.3 }}>
                    {tabNumber === 5 && <UserRecipeFormTab5></UserRecipeFormTab5>}
                </motion.div>
                <div className="text-center">
                    <button onClick={handleNextButton} className="dark:bg-dark-elevate hover:dark:bg-dark-card w-[140px] h-[40px] rounded-small">
                        Next
                    </button>
                </div>
                <div className="bg-transparent mb-4 w-[95%] mx-auto h-[1px]"></div>
            </div>
        </div>
    );

    function handleNextButton() {
        if (tabNumber === 5) {
            alert("need to implement preview page");
        } else {
            setTabNumber(prev => (prev + 1) as TTabNumber);
        }
    }
}
