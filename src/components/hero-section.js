export default function HeroSection({handleGetHeroMenu}){
    return (
    <div className="h-screen bg-unAuthHero bg-blend-color-dodge bg-stone-500 bg-opacity-50 bg-cover bg-center bg-no-repeat w-full flex flex-col justify-center items-center">
        <p className="text-6xl font-bold text-center leading-relaxed font-header text-navbar">
            Order Pie from The Pie
        </p>
        <div className="flex justify-center items-center">
            <button onClick={handleGetHeroMenu} className="h-14 w-36 font-bold text-white outline-btnprimary bg-btnprimary rounded">
                Menu
            </button>
        </div>
    </div>
    )
}