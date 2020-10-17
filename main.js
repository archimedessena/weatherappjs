const api = {
    key:
    base:

};

const searcbox = document.queryselector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keycode == 13) {
        getResults(searchbox.value);
        
    }
}

function getResults (query) {
    fetch(`$(api.base)weather?q=${query}&units=metric&APPID=${api.key}`).then(weather => {
        return weather.json();
    }).then(displaysResults);
}


function displaysResults (weather) {
    console.log(weather){
        console.log(weather);
    }
}