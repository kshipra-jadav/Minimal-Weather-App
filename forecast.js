// this will contain all LOGIC for the weather app
const key = '0afc48375579d6e3641e5394b5342eae'


const getWeather = async (city_name) => {

  const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${key}`
  const proxy = `https://cors-anywhere.herokuapp.com/`

  const response = await fetch(proxy + baseURL)
  const data = await response.json()

  return data // this returns a promise
}
