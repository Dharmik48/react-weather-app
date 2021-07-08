import './ShowWeather.css'
import React from 'react'

function getIconClass(id) {
  if (id >= 200 && id <= 232) return 'far fa-thunderstorm'
  if ((id >= 300 && id <= 321) || (id >= 520 && id <= 531))
    return 'far fa-cloud-drizzle'
  if (id >= 500 && id <= 504) return 'far fa-cloud-sun-rain'
  if (id === 511 || (id >= 600 && id <= 622)) return 'far fa-fog'
  if (id === 800) return 'far fa-sun'
  if (id === 801) return 'fad fa-cloud-sun'
  if (id === 802) return 'far fa-cloud'
  if (id === 803 || id === 804) return 'far fa-clouds'
}

const ShowWeather = (props) => {
  const { humidity, temp } = props.data.data.main

  console.log(props.data)
  return (
    <div className="ui raised center aligned segment">
      <i className={getIconClass(props.data.data.weather[0].id)}></i>
      Temperature: {temp}deg
      <br />
      Humidity: {humidity}%
      <br />
      Speed: {props.data.data.wind.speed * 3.6}km/h
      <br />
      District: {props.data.data.name}
    </div>
  )
}

export default ShowWeather
