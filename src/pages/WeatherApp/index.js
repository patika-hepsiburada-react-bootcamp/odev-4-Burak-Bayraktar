import CityDropdown from '../../components/CityDropdown'
import WeatherCard from '../../components/Weather/Card'
import './style.scss'
import Error from '../Error'
import { useWeather } from '../../contexts/WeatherContext'

const WeatherApp = () => {
    const { error } = useWeather();

    return error ? <Error error={error} /> :
        <div className="app-wrapper">
            <CityDropdown />
            <WeatherCard  />
        </div>
}

export default WeatherApp
