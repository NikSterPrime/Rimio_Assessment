const CityTrip = ({city}) => {
    return (
        <div className='relative m-24 flex flex-row mt-48 ml-40 justify-between items-end'>
            <div className='w-4/12 gap-6'>
                <div className='m-6'>
                    <img src={city.countryMap}></img>
                    <p className='text-[#FFA400] text-4xl -rotate-4' style={{ fontFamily: 'Caveat, cursive', textShadow: '0 2px 10px rgba(255, 164, 0, 0.75)' }}>Roadmade trip plans for</p>
                    <p className='text-[#FFFFFF] text-8xl font-bold' style={{textShadow: '0 2px 10px rgba(255, 255, 255, 0.32)'}}>{city.cityName}</p>
                </div>
                <div className='m-4 flex justify-start gap-4'>
                    <div className='p-1 bg-[#E2CFFD29] rounded-2xl pr-5 pl-5 pb-3 pt-3'>
                        <div className='flex gap-1 '>
                            <p className='text-[#E2CFFD] text-xs'>IDEAL DURATION</p>
                            <img src='calendar-days.svg'></img>
                        </div>
                        <p className='text-white'>12-15 days</p>
                    </div>
                    <div className='p-1 bg-[#E2CFFD29] rounded-2xl pr-5 pl-5 pb-3 pt-3'>
                        <div className='flex gap-1'>
                            <p className='text-[#E2CFFD] text-xs'>VISA INFO</p>
                            <img src='id-card.svg'></img>
                        </div>
                        <p className='text-white'>e-Visa 15 days</p>
                    </div>
                </div>
            </div>
            <div className="relative flex flex-col gap-4 w-2/6 self-end items-end justify-end">
                <div className="flex flex-row w-2/5 h-3/12 mt-40 ml-1/2">
                    <img src={city.mapImage} className='absolute inset-0 z-0 object-contain pointer-events-none'></img>
                </div>
                <div className='relative z-10'>
                    <div className="flex flex-row">
                        <p className="font-bold text-xs text-[#E2CFFD]">BEST MONTHS TO VISIT</p>
                    </div>
                    <div><img src="temp_placeholder.svg"></img></div>
                </div>
            </div>
        </div>
    )
}

export default CityTrip