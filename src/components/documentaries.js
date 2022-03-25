import * as Menu from '../constants/menu'
import Logo from './Navbar/logo'

export default function Documentaries({handleDisplayImage, menu}){
    return(
        <div ref={menu} tabIndex="0" className="h-screen w-full flex flex-col bg-slate-300 justify-center font-mono items-center text-black text-sm font-bold">
                <div className='text-4xl h-16 font-header flex flex-col justify-center items-center'>
                    <img
                        className='h-full'
                        src='/images/food-menu.png'
                        alt='menu icon'
                    />
                </div>
            <div className='text-left'>
                {
                    Menu.Menu.map((item, index) => {
                        return <div className='flex mt-4' key={index}>
                            <button
                                className='font-bold hover:underline'
                                onClick={()=>handleDisplayImage(item.photo)}
                            >
                                {
                                    item.name
                                }
                            </button>
                            <p className='ml-4'>
                                ${
                                    item.price
                                }
                            </p>
                            <img
                                src={item.photo}
                                className="h-5 ml-4 w-5 border-2 rounded"
                                alt={item.name}
                                title={item.name}
                            />
                        </div>
                    })
                }
            </div>
        </div>
    )
}