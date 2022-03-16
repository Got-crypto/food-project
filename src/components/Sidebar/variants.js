import * as Menu from "../../constants/menu"

export default function Variants({isVariants, handleDisplayImage, food, setSelectValue, quantity, setQuantity, handleFoodChange, handleSelectedFoodPhoto, handleSelectedFoodPrice }){
 
    setSelectValue(document.getElementById("select"))
    return (
        <div className={`${ isVariants ? 'flex' : 'hidden' } w-4/5 justify-center items-center `}>
            <div className="w-full mt-2 flex flex-col justify-center items-center">
                <p className="font-bold font-mono text-slate-300 text-3xl">
                    Check the counter
                </p>
                <div className="flex w-full flex-col justify-center items-center">
                    <div className="inline-flex h-5 w-full mt-3 justify-evenly items-center">
                        <p className="font-mono px-4 w-2/6 text-slate-300 font-bold">
                            Plate
                        </p>
                        <select onChange={({target})=>handleFoodChange(target)} id="select" className="h-10 w-4/6 px-4 flex justify-center items-center rounded-md col-span-1 appearance-none font-secondary outline-none bg-slate-300">
                            <option value={0}>...</option>
                            {
                                Menu.Menu.map((item, index)=>{
                                    return <option  key={index} value={item.name} className="hover:bg-pink-400">
                                        {item.name}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="inline-flex h-5 w-full mt-5 justify-evenly items-center">
                        <p className="font-mono px-4 text-left w-2/6 text-slate-300 font-bold">
                            Price
                        </p>
                        <div className="w-4/6 text-slate-300 text-left">
                            {
                                food !== "0" ? (
                                    <p>
                                        ${handleSelectedFoodPrice().toString()}
                                    </p>
                                ) : <p> ... </p>
                            }
                        </div>
                    </div>
                    <div className="inline-flex w-full h-5 mt-5 justify-evenly items-center">
                        <p className="font-mono px-4 text-left w-2/6 text-slate-300 font-bold">
                            Quantity
                        </p>
                        <div className="w-4/6 text-left">
                            {
                                food !== "0" ? (
                                    <input
                                        type="number"
                                        min="1"
                                        max="10"
                                        className="h-10 w-2/6 px-4 flex justify-center items-center rounded-md font-secondary bg-slate-300 outline-none"
                                        value={quantity}
                                        onChange={({target})=>setQuantity(target.value)}
                                    />
                                ) : <p className="text-slate-300"> ... </p>
                            }
                        </div>
                    </div>
                    <div className="inline-flex w-full h-5 mt-5 justify-evenly items-center">
                        <p className="font-mono px-4 text-left w-2/6 text-slate-300 font-bold">
                            Payout
                        </p>
                        <div className="w-4/6 text-slate-300 text-left">
                            {
                                food !== "0" ? (
                                    <p>
                                        $
                                        {
                                            isNaN(parseInt(quantity) * parseInt(handleSelectedFoodPrice())) || parseInt(quantity) * parseInt(handleSelectedFoodPrice()) < 0 ? 0 : parseInt(quantity) * parseInt(handleSelectedFoodPrice())
                                        }
                                    </p>
                                ) : <p> ... </p>
                            }
                        </div>
                    </div>
                </div>
                <div className="text-slate-300 relative overflow-hidden h-72 mt-2 w-full ml-4">
                    {
                        food !== "0" ? (
                                <img
                                    className="h-full cursor-pointer w-full border-2 rounded"
                                    src={handleSelectedFoodPhoto()}
                                    alt={food}
                                    onClick={()=>{
                                        return handleDisplayImage(handleSelectedFoodPhoto())
                                    }}
                                />
                                ) : (
                                <div className="h-full text-gray-500 w-full flex justify-center items-center">
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
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
                                            />
                                    </svg>
                                </div>
                        )
                    }
                </div>
                {
                    food !== "0" && (
                        <button
                            className="h-12 bg-btnprimary w-4/5 mt-3 ml-3 text-sm font-bold rounded text-navbar" 
                        >
                            Add To Cart
                        </button>
                    )
                }
            </div>
        </div>
    )
}