import React from 'react'

async function getWeatherData(coords) {
  console.log(coords)
}

class App extends React.Component {
  state = { coords: { lat: null, lon: null }, errMsg: '' }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (res) => {
        this.setState({
          coords: { lat: res.coords.latitude, lon: res.coords.longitude },
        })

        getWeatherData(this.state.coords)
      },
      (err) => {
        this.setState({ errMsg: err.message })
      }
    )
  }

  render() {
    return (
      <div>
        Latitude: {this.state.coords.lat}
        <br />
        Longitude: {this.state.coords.lon}
        <br />
        Error: {this.state.errMsg}
      </div>
    )
  }
}

export default App
