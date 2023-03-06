
const apikeys = `5cff707b8f230e02153f3228ab322e41`

const loadTemperature = (city) => { //32 no line theke parameter value 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikeys}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => showTemp(data)); //11 no line er showTemp fun k call korche.& data pass kora hocche.

}
const showTemp = data => { //8 no theke data pelam.
    setInnerTextById('temp', data.main.temp); //22 no er fun k call kora holo.ja parameter pathacce temp(elementById name ('temp')) & value.
    setInnerTextById('condition', data.weather[0].main); //Again call 22 no line & value pass kora hocche  ja parameter pathacce condition(elementById name ('condition')) & value.

    console.log(data.weather[0].main)
};

// const temperature = document.getElementById('temp');
// const condition = document.getElementById('condition');
const searchField = document.getElementById('search-field');

const setInnerTextById = (text, id) => { //two time used line no 12/ 13
    const temperature = document.getElementById(text); //get two elements (html= temp ,condition)
    temperature.innerText = id; //set two elements
}

document.getElementById('btn-search').addEventListener('click', () => {
    const city = searchField.value; //search field value 
    // city name:
    document.getElementById('city').innerText = city;

    loadTemperature(city); //Ae line ta api k call korche,parameter pass korche "city"name.4 no line Api function.

    searchField.value = ''; //searchfield(input field k clear kora hocche)
});
