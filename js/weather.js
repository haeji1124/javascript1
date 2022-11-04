const API_KEY="748a5d058dda499f8d0c58742caba8e5"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in",lat,lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        console.log(data)
        const weatherCont = document.querySelector("#weather span:first-child")
        const feelLikeCont = document.querySelector("#weather span:last-child")
        weatherCont.innerHTML=data.weather[0].main
        feelLikeCont.innerHTML=`체감온도 : ${data.main.feels_like}ºC`
        
    })
}
function onGeoError(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("you live in",lat,lon)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    alert(`can't find you. No weather for you. ${url}`)
}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
