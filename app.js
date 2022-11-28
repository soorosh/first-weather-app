window.addEventListener('load', ()=> {
    let mylong;
    let mylat;


    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    
    
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position);
            mylong = position.coords.longitude;
            mylat = position.coords.latitude;


            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${mylat}&lon=${mylong}&units=metric&appid=ff7ed536b63293427722275c84b80290`

            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const {temp, feels_like} = data.main; // extracts temp
                    const {main, description, icon} = data.weather[0]; // extracts weather discription
                    //Set DOM Elements from the API
                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = data.name;
                    document.getElementById('icon-weather').src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
                });
        });

    }


    

    

});