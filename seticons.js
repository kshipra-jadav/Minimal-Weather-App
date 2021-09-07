const icons = document.querySelector('.icons')

const change_icons = (temp_icon) => {
  let skycon_icon = undefined
  let skycon_string = undefined

  if(temp_icon === '01d'){
    skycon_icon = 'clear-day'
  }
  if(temp_icon === '01n'){
    skycon_icon = 'clear-night'
  }
  if(temp_icon === '02d'){
    skycon_icon = 'partly-cloudy-day'
  }
  if(temp_icon === '02n'){
    skycon_icon = 'partly-cloudy-night'
  }
  if(temp_icon === '03d' || temp_icon === '03n'){
    skycon_icon = 'cloudy'
  }
  if(temp_icon === '04d' || temp_icon === '04n'){
    skycon_icon = 'cloudy'
  }
  if(temp_icon === '09d'){
    skycon_icon = 'showers-day'
  }
  if(temp_icon === '09n'){
    skycon_icon = 'showers-night'
  }
  if(temp_icon === '10d' || temp_icon === '10n'){
    skycon_icon = 'rain'
  }
  if(temp_icon === '11d'){
    skycon_icon = 'thunder-showers-day'
  }
  if(temp_icon === '11n'){
    skycon_icon = 'thunder-showers-night'
  }
  if(temp_icon === '13d' || temp_icon === '13n'){
    skycon_icon = 'snow'
  }
  if(temp_icon === '50d' || temp_icon === '50n'){
    skycon_icon = 'fog'
  }

  set_icons(icons, skycon_icon, temp_icon)



}

const set_icons = (icons, skycon_icon, temp_icon) => {

  if(temp_icon.includes('d')){
    const skycons = new Skycons({"color" : "#333"})
    skycons.add(icons, skycon_icon)
    skycons.play()
  }
  if(temp_icon.includes('n')){
    const skycons = new Skycons({"color" : "white"})
    skycons.add(icons, skycon_icon)
    skycons.play()
  }


}
