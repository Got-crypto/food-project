import * as Menu from '../constants/menu'

export default function Documentaries(){
    return(
        <div className="h-screen w-full flex flex-col bg-slate-300 justify-center font-mono items-center text-black text-sm font-bold">
            <div className='text-left'>
                {
                    Menu.Menu.map((item, index) => {
                        return <div className='flex mt-4' key={index}>
                            <p>
                                {
                                    item.name
                                }
                            </p>
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