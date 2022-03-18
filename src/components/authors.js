import {WebsiteAuthors} from '../constants/authors'
import { motion } from 'framer-motion'

export default function Authors(){
    return (
        <div className="bg-slate-300 h-screen w-full justify-center flex flex-row items-center">
            {
                WebsiteAuthors.map((item, index)=>{
                    return <div key={index} className="h-96 w-96 mx-2 flex flex-col justify-center items-center">
                        <div className='h-auto rounded-full'>
                            <motion.img
                                initial={{
                                    scale: .99,
                                    opacity: .8
                                }}
                                whileHover={{
                                    opacity: 1,
                                    scale: 1
                                }}
                                src={item.photo}
                                className='cursor-pointer rounded-full m-0'
                                alt={item.name}
                            />
                        </div>
                        <p className='text-sm font-bold font-header mt-10'>
                            {
                                item.name
                            }
                        </p>
                    </div>
                })   
            }
        </div>
    )
}