import { motion } from "framer-motion"

export default function ImgDisplay({ isDisplayed, setIsDisplayed, clickedImage, setClickedImage, handleDisplayImage}){
    console.log('clickedImage', clickedImage)
    return(
        <motion.div 
            className={`h-screen z-30 flex  ${!isDisplayed && 'hidden' } top-0 fixed justify-center items-center w-full`}
            onClick={handleDisplayImage}
        >
            <motion.div 
                className="h-full w-full bg-black z-10"
                animate={{opacity: isDisplayed ? 0.8 : 0  }}
            />
            <motion.img
                src={clickedImage}
                alt="Clicked Food"
                className="border-2 border-white rounded fixed z-20"
                animate={{
                    y: isDisplayed ? 0 : -100,
                    display: !isDisplayed ? 'hidden' : 'block'
                }}
            />
        </motion.div>
    )
}