import { useContext, useEffect, useState } from 'react'
import Authors from '../components/authors'
import Documentaries from '../components/documentaries'
import Footer from '../components/footer'
import Gallery from '../components/gallery'
import ImgDisplay from '../components/img-display'
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import * as Menu from '../constants/menu'
import UserContext from '../context/user'
import { addItemToShoppingCart, getUserDetailsByUserId } from '../services/firebase'

export default function Dashboard(){
    const [searchedItems, setSearchedItems] = useState("")
    let [cart, setCart] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [clickedImage, setClickedImage] = useState(null)
    const [isDisplayed, setIsDisplayed] = useState(false)
    const {user} = useContext(UserContext)
    const [selectValue, setSelectValue] = useState(null)

    const handleDisplayImage = (photo)=>{
        setClickedImage(photo)
        setIsDisplayed(!isDisplayed)
    }

    const [sidebarOpen, setSidebarOpen] = useState(false)

    const [isVariants, setIsVariants] = useState(true)

    const switchToShoppingCart = ()=> {
        setIsVariants(false)
    }
    const switchToVariants = ()=> {
        setIsVariants(true)
    }

    const handleOpenSidebar = ()=> {
        setSidebarOpen(!sidebarOpen)
    }
    
    const handleShoppingCart = async ( food ) => {
        const customerId = user.uid

        for ( let item of cart ){
            if (item.name === food.name) return console.log("no duplicates allowed");
        }
        
        await addItemToShoppingCart( customerId, food )

        cart.push(food)

        setCartCount(cartCount + 1)
    }

    const [heroMenu, setHeroMenu] = useState([])


    const getMenu = ()=>{
        let menuArray = []

        while( menuArray.length < 4 ){
            const plate = Math.floor(Math.random() * Menu.Menu.length )

            if ( !menuArray.includes(plate) ){
                menuArray.push(plate)
            }
        }

        const menu = menuArray.map(item => ({
            ...Menu.Menu[item],
            index: item
        }))
        
        setHeroMenu(menu)
    }

    const [food, setFood] = useState("0")
    const [quantity, setQuantity] = useState(1)


    const handleSelectedFoodPrice = ()=>{
        for( let item of Menu.Menu ){
            if( item.name === food ){
                return item.price
            }
        }
    }

    const handleSelectedFoodPhoto = ()=> {
        for( let item of Menu.Menu ){
            if( item.name === food ){
                return item.photo
            }
        }
    }

    const handleFoodChange = (target, buttonFromVariants) =>{
        setFood(target.value)
        setQuantity(1)
    }

    const handleAddVariantToCart = async ( quantity, food, price) => {

        const {photo} = Menu.Menu.filter(item => item.name === food)[0]

        const newProduct = {
            quantity,
            name: food,
            price,
            photo
        }

        await addItemToShoppingCart(user.uid, newProduct)

        cart.push(newProduct)

        setCartCount(cartCount + 1)
    }
    
    useEffect(()=>{
        const getShoppingCart = async () =>{
            const response = await getUserDetailsByUserId( user.uid )
            
            setCartCount(response[0].cart.length)
            setCart( response[0].cart )
        }
        getShoppingCart()
        
    }, [user] )

    const [searchResults, setSearchResults] = useState([])


    useEffect(()=>{

        const indexedMenu = Menu.Menu.map((item, index)=>({
            ...item,
            index
        }))

        const results = indexedMenu.filter(item => item.name.toLowerCase().includes(searchedItems.toLowerCase()))

        setSearchResults(results)
    }, [searchedItems])

    useEffect(()=>{
        document.title = 'The Pie'
        getMenu()
    }, [])
    return (
        <div className="h-auto w-full flex flex-col justify-center items-center">
            <Navbar 
                setSearchedItems={setSearchedItems} 
                searchedItems={searchedItems}
                cartCount={cartCount} 
                switchToShoppingCart={switchToShoppingCart}
                setSidebarOpen={setSidebarOpen}
            />
            <div className='h-auto mt-14 w-full divide-y-2 bg-neutral-500'>
                <Gallery 
                    clickedImage={clickedImage}
                    setClickedImage={setClickedImage}
                    handleDisplayImage={handleDisplayImage}
                    menu={heroMenu}
                    handleShoppingCart={handleShoppingCart}
                    getMenu={getMenu}
                    handleFoodChange={handleFoodChange} 
                    handleSelectedFoodPhoto={handleSelectedFoodPhoto} 
                    handleSelectedFoodPrice={handleSelectedFoodPrice}
                    setFood={setFood}
                    selectValue={selectValue}
                    setSidebarOpen={setSidebarOpen}
                    switchToVariants={switchToVariants}
                    searchedItems={searchedItems}
                    searchResults={searchResults}
                />
                <Documentaries />
                <Authors />
                <Footer />
                <Sidebar 
                    cart={cart}
                    food={food}
                    setFood={setFood}
                    quantity={quantity} 
                    setQuantity={setQuantity} 
                    handleFoodChange={handleFoodChange} 
                    handleSelectedFoodPhoto={handleSelectedFoodPhoto} 
                    handleSelectedFoodPrice={handleSelectedFoodPrice}
                    setSelectValue={setSelectValue}
                    handleDisplayImage={handleDisplayImage}
                    setCart={setCart}
                    setCartCount={setCartCount}
                    switchToVariants={switchToVariants} 
                    handleOpenSidebar={handleOpenSidebar}
                    isVariants={isVariants} 
                    setIsVariants={setIsVariants} 
                    switchToShoppingCart={switchToShoppingCart} 
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                    handleAddVariantToCart={handleAddVariantToCart}
                />
            </div>
            <ImgDisplay
                clickedImage={clickedImage} 
                setClickedImage={setClickedImage} 
                handleDisplayImage={handleDisplayImage}
                isDisplayed={isDisplayed}
                setIsDisplayed={setIsDisplayed}
            />
        </div>
    )
}