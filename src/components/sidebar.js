import { useState } from "react"
import { motion } from "framer-motion"
import Variants from "./Sidebar/variants"
import ShoppingCart from "./Sidebar/shoping-cart"

export default function Sidebar({cart, switchToVariants, handleAddVariantToCart, handleOpenSidebar, isVariants, setIsVariants, switchToShoppingCart, setCart, sidebarOpen, setSidebarOpen,  setCartCount, handleDisplayImage, setSelectValue, food, setFood, quantity, setQuantity, handleFoodChange, handleSelectedFoodPhoto, handleSelectedFoodPrice}){
    

    return (
        <motion.div 
            className="fixed shadow-2xl shadow-black h-[110vh] top-28 -right-96 lg:top-14 z-20 w-[25rem] bg-navbar flex flex-col items-center"
            initial={{
                x: 0,
                y: -40,
                scale: .90
            }}
            animate={{
                x: sidebarOpen ? -320 : 0
            }}
        >
            <div className="h-14 mt-4 -ml-24 flex bg-navbar rounded-full justify-start items-center w-full">
                <button 
                    className="text-white h-full"
                    onClick={handleOpenSidebar}
                >
                    <svg 
                        className="w-12 h-10" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M4 6h16M4 12h8m-8 6h16" 
                        />
                    </svg>
                </button>
                <button
                    className={`h-full w-2/5 rounded text-sm font-bold ${ isVariants ? 'text-navbar bg-btnprimary' : 'bg-transparent text-btnprimary' }`}
                    onClick={switchToVariants}
                >
                    Variants
                </button>
                <button
                    className={`h-full w-2/5 rounded text-sm font-bold ${ isVariants ? 'text-btnprimary bg-inherit' : 'bg-btnprimary text-navbar' }`}
                    onClick={switchToShoppingCart}
                >
                    Shopping Cart
                </button>
            </div>
            <div className="w-full">
                <Variants 
                    isVariants={isVariants}
                    food={food}
                    setFood={setFood}
                    quantity={quantity} 
                    setQuantity={setQuantity} 
                    handleFoodChange={handleFoodChange} 
                    handleSelectedFoodPhoto={handleSelectedFoodPhoto} 
                    handleSelectedFoodPrice={handleSelectedFoodPrice}
                    setSelectValue={setSelectValue}
                    handleDisplayImage={handleDisplayImage}
                    handleAddVariantToCart={handleAddVariantToCart}
                    />
                <ShoppingCart 
                    handleDisplayImage={handleDisplayImage}
                    isVariants={isVariants} 
                    cart={cart}
                    setCart={setCart}
                    setCartCount={setCartCount}
                />
            </div>
        </motion.div>
    )
}