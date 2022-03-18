import * as Slogans from '../constants/slogans'

export default function Footer(){
    return (
        <div className="w-full h-[85vh] flex flex-col justify-center items-center bg-navbar">
            <div className="text-white font-bold font-header text-sm w-full flex justify-evenly items-center">
                {
                    Slogans.shorts.map((item, index)=>{
                        return <p key={index}>
                            {
                                item
                            }
                        </p>
                    })
                }
            </div>
            <div className='h-96 w-full grid grid-cols-3 justify-center items-center'>
                {
                    Slogans.slogans.map((item, index)=>{
                        return <p key={index} className=" font-secondary text-white col-span-1">
                            {
                                item
                            }
                        </p>
                    })
                }
            </div>
            <p className='mt-10 text-sm font-mono text-white'>
                ©Copyright 2022
            </p>
        </div>
    )
}