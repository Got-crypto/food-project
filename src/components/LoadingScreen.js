export default function LoadingScreen(){
    return(
        <div className='h-screen w-full flex bg-slate-300 flex-col justify-center items-center'>
            <img
            src='https://acegif.com/wp-content/gifs/pizza-64.gif'
            className='h-96'
            alt='pizza loading gif'
            />
            <p className='font-header font-bold mt-2'>Loading</p>
        </div>
    )
}