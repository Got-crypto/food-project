import {WebsiteAuthors} from '../constants/authors'
import { motion } from 'framer-motion'

export default function Authors(){
    return (
        <div className="bg-slate-300 h-[150vh] w-full justify-center divide-y md:divide-none flex flex-col md:flex-row items-center">
            {
                WebsiteAuthors.map((item, index)=>{
                    return <div key={index} className="h-96 w-96 mx-2 my-4 flex flex-col justify-center items-center">
                        <div className='h-20 md:h-44 lg:h-screen rounded-full'>
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
                                className='cursor-pointer rounded-full m-0 h-full'
                                alt={item.name}
                            />
                        </div>
                        <p className='text-lg font-bold font-header mt-5'>
                            {
                                item.name
                            }
                        </p>
                        <p className='text-sm font-bold text-slate-500 font-mono mt-2'>
                            {
                                item.position
                            }
                        </p>
                        <div className='h-12 inline-flex w-52 mt-2 justify-evenly items-center'>
                            {
                                item.socialLinks.map((item, index)=>{
                                    return <a
                                                href={item.link}
                                                index={index}
                                                className="h-8 flex justify-center items-center"
                                                target='_blank'
                                                rel='noreferrer'
                                            >
                                                <img
                                                    src={item.icon}
                                                    alt='social link'
                                                    className='h-full'
                                                />
                                            </a>
                                            
                                })
                            }
                        </div>
                    </div>
                })   
            }
        </div>
    )
}