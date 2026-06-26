import Header from './header'
import CountryTrip from './citytrip'

const RimigoTitle = () => {

    /*

    application of api
    const [cityData, setCityData] = useState(null)

    useEffect(() => {
        const fetchCityData = async () => {
            const response = await fetch('https://your-api.com/city-trip')
            const data = await response.json()

            setCityData(data)
        }

        fetchCityData()
    }, [])

    */

    const cityData = {
        countryMap: '/indonesia.png',
        cityName: 'India',
        mapImage: '/indonesiaLow 1.svg',
    }
    return (
        <div>
            <Header />
            <CountryTrip city={cityData}/>
        </div>
    )
}

export default RimigoTitle