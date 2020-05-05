
var fahrenheit = (celcius) => {
  return ((celcius*(9/5))+32)
}


document.addEventListener("click", ()=>{
    var degreeInCel = document.getElementById("degces").value;
    console.log(degreeInCel);
    
    document.getElementById("fahs").innerHTML = "<b>" + degreeInCel + "</b> " + " °C = " + "<b> " +fahrenheit(degreeInCel) + " </b>" + " °F"
    
});



var getDeathToll = async () =>{
    try{
      const URI = "http://api.weatherstack.com/current?access_key=1965330e04ba41487767b5ca7020f9bd&query=";
      const cit = document.getElementById("city").value;
      console.log(cit);
      const fullURI = URI + cit;
    var value = await fetch(fullURI);
    var data = await value.json();
    console.log(data.current.temperature);
    
return data.current.temperature;    
} catch (error) { console.error(error) }
}

 const updateDeath = async (event) => {
    try {
      document.querySelector('#result').innerHTML = ''
      const answer = await getDeathToll();
            document.querySelector('#result').innerHTML = answer
    } catch (error) { console.error(error) }
  }

  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'Temperature') { updateDeath(event) }
  })

  document.querySelector("#conv").addEventListener('click', () =>{
    const count = parseInt(localStorage.getItem('numOfClicks')) || 0;
    const  ct = count +1;
    const ans = `You have converted ${ct} times.`;
    document.querySelector("#counts").innerHTML = ans;

    localStorage.setItem('numOfClicks', ct);

  })

  document.querySelector("#del").addEventListener('click',() =>{
    localStorage.removeItem('numOfClicks')
    document.querySelector("#counts").innerHTML = "";


  })