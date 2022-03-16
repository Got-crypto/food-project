import Logo from "./Navbar/logo";
import NavMenu from "./Navbar/nav-menu";
import SmallScreenElements from "./Navbar/small-screen-elements";

export default function Navbar( {switchToShoppingCart, setSidebarOpen, searchedItems, setSearchedItems, cartCount} ){
    return (
        <>
            <div className="h-14 fixed lg:shadow-md lg:shadow-black top-0 z-50 w-full bg-navbar ">
                <div className="h-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl w-full mx-auto flex justify-between items-center">
                    <Logo/>
                    <NavMenu switchToShoppingCart={switchToShoppingCart} setSidebarOpen={setSidebarOpen} searchedItems={searchedItems} cartCount={cartCount} setSearchedItems={setSearchedItems}/>
                </div>
            </div>
            <div className="bg-navbar shadow-md shadow-black z-40 fixed top-14 w-full h-auto">
                <SmallScreenElements searchedItems={searchedItems} setSearchedItems={setSearchedItems}/>
            </div>
        </>
    )
}