export default function SmallScreenElements( {searchedItems, setSearchedItems} ){
    return(
        <div className="h-16 max-w-screen-sm mx-auto lg:hidden flex justify-evenly md:justify-start items-center w-full">
            <div className="h-full inline-flex lg:hidden items-center center">
                <input
                    className="h-2/3 w-80 bg-white outline-none placeholder:font-sans rounded-l-md px-2 font-bold text-sm"
                    value={searchedItems}
                    onChange={({target})=>setSearchedItems(target.value)}
                    placeholder="Search for your dishes here ..."
                />
                <button
                    className="h-2/3 bg-white outline-none w-14 mr-4 rounded-r-md flex items-center justify-center"
                >
                    <svg 
                        className="w-6 h-6 text-btnprimary" 
                        fill="currentColor" 
                        viewBox="0 0 20 20" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            fillRule="evenodd" 
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
                            clipRule="evenodd" 
                        />
                    </svg>
                </button>  
            </div>
            <button className="relative block md:hidden text-btnprimary">
                <span className="absolute hidden h-4 w-4 justify-center -right-2 -top-2 p-3 items-center rounded-full bg-red-500 text-white">
                    2
                </span>
                <svg 
                    className="w-10 h-10" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                    />
                </svg>
            </button>
        </div>
    )
}