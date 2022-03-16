import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import UserContext from '../../context/user';
import { deleteFoodFromUserShoppingCart } from '../../services/firebase';

export default function ShoppingCart({cart, isVariants, setCartCount, handleDisplayImage, setCart}){

    const {user} = useContext(UserContext)

    const handleFoodDeletion = async ( food ) => {
        await deleteFoodFromUserShoppingCart( food, user.uid )

        const updatedCart = cart.filter(item => item !== food)

        setCart(updatedCart)
        setCartCount(cart.length - 1)
    }

    return (
        <div className={`w-4/5 ${ isVariants ? 'hidden' : 'block' }`}>
            <SimpleBar
                forceVisible="y"
                autoHide={false}
                style={{
                    maxHeight: 470
                }}
                className={`flex flex-col items-center h-[560px] `}
            >
                        {
                            cart.map(item => {
                                return <div key={item.index} className="flex flex-col justify-center items-center py-7 w-full">
                                    <motion.div 
                                        layout
                                        className='flex justify-between items-center w-full '
                                        initial={{
                                            scale: 0.7
                                        }}
                                        animate={{
                                            scale: 1
                                        }}
                                    >
                                        <div className='text-white inline-flex font-secondary text-lg w-full'>
                                            <p>
                                                {item.quantity}
                                            </p>
                                            <button 
                                                className='text-white hover:text-btnprimary ml-2 font-secondary text-lg'
                                                onClick={()=>{
                                                    return handleDisplayImage(item.photo)
                                                }}
                                            >
                                                {item.name}
                                            </button>
                                            <p className='ml-2'>
                                                $
                                                {item.price}
                                            </p>
                                        </div>
                                        <motion.button
                                            className='text-red-500 ml-4'
                                            whileHover={{
                                                scale: 1.2
                                            }}
                                            onClick={()=>{
                                                return handleFoodDeletion( item )
                                            }}
                                        >
                                            <svg 
                                                className="w-6 h-6" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" 
                                                />
                                            </svg>
                                        </motion.button>
                                    </motion.div>
                                </div>
                            })
                        }

            </SimpleBar>
            {
                cart.length > 0 && (
                    <button
                        className="h-12 bg-btnprimary ml-10 w-4/5 mt-3 text-sm font-bold rounded text-navbar" 
                    >
                        Proceed to checkout
                    </button>
                )
            }
        </div>
               
    )
}