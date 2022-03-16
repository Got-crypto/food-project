import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export default function Gallery({handleDisplayImage, searchResults, searchedItems, selectValue, menu, getMenu, handleShoppingCart, setFood, setSidebarOpen, switchToVariants}){

    const handleBtnActions = (item)=>{
        setFood(item.name)
        
        setSidebarOpen(true)
        switchToVariants()
        selectValue.selectedIndex = item.index + 1
    }

    
    const [galleryContent, setGalleryContent] = useState(menu)
    console.log('menu', menu)

    console.log('galleryContent', galleryContent)
    console.log('searchItems.length', searchedItems.length)
    useEffect(()=>{
        if( searchedItems !== "" ) {
            setGalleryContent(searchResults)
        }else{
            setGalleryContent(menu)
        }


    }, [searchedItems, menu, searchResults])


    
    return (
        <div className="h-screen w-full">
            <div className="h-full bg-hero bg-cover bg-no-repeat mx-auto bg-center w-full">
                <div className="grid grid-cols-3 md:grid-cols-2 items-center h-full">
                    <div className="col-span-2 md:col-span-1 h-auto">
                        <p className="text-white text-4xl md:text-5xl font-bold font-header w-5/6 mx-auto">
                            Hungry for pie? <br/> Get your delicious pie now!
                        </p>
                        <SimpleBar
                            autoHide={true}
                            forceVisible="y"
                            style={{
                                maxHeight: 300
                            }} 
                            className="mt-10 divide-y">
                            {
                                galleryContent.map((item, index) => {
                                    return (
                                        <div key={index} className="h-10 w-5/6 mx-auto m-2">
                                            <div className="inline-flex w-full justify-between overflow-hidden items-center h-full">
                                                {
                                                    <button 
                                                    className="text-white hover:text-btnsecondary cursor-pointer inline-flex justify-center items-center text-left text-lg font-bold font-mono"
                                                    onClick={()=>handleBtnActions(item)}
                                                    >
                                                        {item.name}
                                                    </button>
                                                }
                                                <div className="h-full flex justify-center items-center">
                                                    <button
                                                        className="bg-transparent inline-flex text-slate-300 justify-center items-center rounded px-2 h-full mr-2"
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
                                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
                                                            />
                                                        </svg>
                                                    </button>
                                                    <button
                                                        className="bg-btnsecondary inline-flex justify-center items-center rounded px-2 h-full mr-2"
                                                        onClick={()=>{
                                                            return handleDisplayImage(item.photo)
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
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                                                                />
                                                            <path 
                                                                strokeLinecap="round" 
                                                                strokeLinejoin="round" 
                                                                strokeWidth={2} 
                                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                                                                />
                                                        </svg>
                                                    </button>
                                                    <button 
                                                        className="bg-btnprimary inline-flex justify-center items-center py-4 rounded px-2 h-full text-white"
                                                        onClick={()=>{
                                                            return handleShoppingCart( {
                                                                ...item,
                                                                quantity: 1
                                                            } )
                                                        }}
                                                    >
                                                        <p className="text-black font-bold">
                                                            $
                                                            {
                                                                item.price
                                                            }
                                                        </p>
                                                        <svg 
                                                            className="w-6 h-6 text-black" 
                                                            fill="none" 
                                                            stroke="currentColor" 
                                                            viewBox="0 0 24 24" 
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path 
                                                                strokeLinecap="round" 
                                                                strokeLinejoin="round" 
                                                                strokeWidth={2} 
                                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                                                />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div> 
                                    )
                                } )
                            }
                        </SimpleBar>
                        {
                            searchedItems !== "" && (
                                <div className="text-white w-5/6 text-base mt-10 font-mono font-bold mx-auto">
                                    {galleryContent.length} search {
                                        galleryContent.length === 1 ? 'result' : 'results'
                                    }...
                                </div>
                            )
                        }
                            {
                                searchedItems === "" && (
                                    <div className="w-5/6 mx-auto mt-5">
                                        <button 
                                            className="text-white"
                                            onClick={getMenu}
                                            >
                                            <svg 
                                                className="w-8 h-8" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" 
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                )
                            }
                    </div>
                    <div className="col-span-1 h-80 flex items-end">
                        <Link
                            className="h-14 hover:bg-btnsecondary hover:text-black justify-center items-center py-2 px-4 rounded-md relative inline-flex bg-btnprimary text-white font-bold md:animate-bounce"
                            to='/payments'
                        >
                            <p>
                                Order now
                            </p>
                            <img
                                src="/images/plate.png"
                                alt="plate icon"
                                className="h-4/5 ml-3"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}