const city_form = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const icon = document.querySelector('.icon')
const time = document.querySelector('.time')
const footer = document.querySelector('#footer')

city_form.addEventListener('submit', (e) => {
  e.preventDefault()

  const city_name = city_form.city.value

  getWeather(city_name)
    .then((data) => {
      updateUI(data)
    })
    .catch((error) => {
      console.log('there is some error', error)
    })
  city_form.reset()
})

const updateUI = (data) => {
  const city_name = data.name
  const city_temp = Math.round((data.main.temp) - 273) // converting from kelvin to celcius
  const city_tempF = Math.round((data.main.temp - 273) * (9/5) + 32) // converting kelvin to farenheit
  const city_cond = data.weather[0].main
  const temp_icon = data.weather[0].icon

  // displaying the card
  if(card.classList.contains('d-none')){
    card.classList.remove('d-none')
  }

  // changing values in the card

  details.innerHTML = `
  <h5 class="my-3">${city_name}</h5>
  <div class="my-3">${city_cond}</div>
  <div class="display-4 my-4">
    <span>${city_temp}</span>
    <span>&deg;C / ${city_tempF} &deg;F</span>
  </div>
  `
  // icon.setAttribute('src', `https://openweathermap.org/img/wn/${temp_icon}@2x.png`)

  if(temp_icon.includes('d')){
    time.setAttribute('src', 'icons/day.svg')
    icon.style.backgroundColor = '#E6ECF6';
  }
  else if(temp_icon.includes('n')){
    time.setAttribute('src', 'icons/night.svg')
    icon.style.backgroundColor = '#243046';
  }

  change_icons(temp_icon)

  console.log(data)

}
