import '../style.scss'
import logo from '../../../../assets/img/loading.png'
import { useWeather } from '../../../../contexts/WeatherContext'
import { FetchWeatherInfo } from './utils';

const WeatherCardBody = () => {

    const {data, loading} = useWeather();
    const iconLink = "http://openweathermap.org/img/w"

    if (loading) {
        return (
        <WeatherCardBodyWrapper>
            <div className="loading-wrapper"><img className="loading-icon" alt="loading" src={logo} /></div>
        </WeatherCardBodyWrapper>
        ) 
    }

    const { date, degree, weatherForecast, icon} = FetchWeatherInfo(data);
    
    return  <WeatherCardBodyWrapper>
                <p className="icon" >
                    <img alt="icon" src={`${iconLink}/${icon}.png`} />
                </p>
                <p>{ date }</p>
                <p>{ weatherForecast }</p>
                <p>{ degree } &deg;C</p>
            </WeatherCardBodyWrapper>
}

// created this component to make every possible renderer has height of 60%
const WeatherCardBodyWrapper = ({ children }) => <div className="weather-body">{ children }</div>

export default WeatherCardBody;