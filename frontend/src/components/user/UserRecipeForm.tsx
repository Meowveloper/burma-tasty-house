import { useState } from "react"
import UserRecipeTab1 from "./RecipeForm/UserRecipeTab1";
import { motion } from "framer-motion";
import UserRecipeTab2 from "./RecipeForm/UserRecipeTab2";

type TTabNumber = 1 | 2 | 3 | 4;

export default function UserRecipeForm() {
    const [ tabNumber, setTabNumber ] = useState<TTabNumber>(1);
  return (
    <div>
        <div className='dark:bg-dark-elevate py-3 rounded-normal flex w-full justify-between px-9 mt-5 '>
            <div
                onClick={ () => { setTabNumber(1); } }
                className={`${tabNumber === 1 ? 'dark:bg-dark-card text-dark-text-highlight' : 'dark:bg-dark-secondary-card'} h-[25px] w-[25px] leading-[25px] text-center rounded-full`}
            >
                1
            </div>
            <div
                onClick={ () => { setTabNumber(2); } }
                className={`${tabNumber === 2 ? 'dark:bg-dark-card text-dark-text-highlight' : 'dark:bg-dark-secondary-card'} h-[25px] w-[25px] leading-[25px] text-center rounded-full`}
            >
                2
            </div>
            <div
                onClick={ () => { setTabNumber(3); } }
                className={`${tabNumber === 3 ? 'dark:bg-dark-card text-dark-text-highlight' : 'dark:bg-dark-secondary-card'} h-[25px] w-[25px] leading-[25px] text-center rounded-full`}
            >
                3
            </div>
            <div
                onClick={ () => { setTabNumber(4); } }
                className={`${tabNumber === 4 ? 'dark:bg-dark-card text-dark-text-highlight' : 'dark:bg-dark-secondary-card'} h-[25px] w-[25px] leading-[25px] text-center rounded-full`}
            >
                4
            </div>
        </div>
        
        <div className='dark:bg-dark-secondary-card mt-5 p-3 rounded-normal'>

            <motion.div initial={{ opacity: 0 , height : 0}} animate={{ opacity: tabNumber === 1 ? 1 : 0 , height : tabNumber === 1 ? 'auto' : 0 }} transition={{ duration: 0.3 }}>
                { tabNumber === 1 && <UserRecipeTab1></UserRecipeTab1> } 
            </motion.div>
            <motion.div initial={{ opacity: 0 , height : 0}} animate={{ opacity: tabNumber === 2 ? 1 : 0 , height : tabNumber === 2 ? 'auto' : 0 }} transition={{ duration: 0.3 }}>
                { tabNumber === 2 && <UserRecipeTab2></UserRecipeTab2> }
            </motion.div>
            <div className='text-center'>
                <button className='dark:bg-dark-elevate hover:dark:bg-dark-card w-[140px] h-[40px] rounded-small'>Next</button>
            </div>
            <div className='bg-transparent mb-4 w-[95%] mx-auto h-[1px]'></div>
        </div>
    </div>
  )
}
