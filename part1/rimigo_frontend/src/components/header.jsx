
const Header = () => {
    return (
        <header className="bg-[#0D0C0D] px-14 py-14">
            <div className="flex items-center justify-between">
                
                <div className="shrink-0">
                    <img src="rimigologo.svg" alt="Rimigo Logo" className="h-12"></img>
                </div>
                <div className="flex items-center gap-2">
                    <button className="px-6 py-2 text-white border rounded-2xl">
                        Log In
                    </button>
                    <button className="px-6 py-2  text-white rounded-2xl bg-[#7011F6]">
                        Plan My Trip
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header