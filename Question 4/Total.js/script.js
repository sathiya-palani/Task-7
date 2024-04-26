// Print the total population of countries using reduce method



const API_URL =  "https://restcountries.com/v3.1/all" ;

function reqListener() {
   
    var countryData=JSON.parse(this.response);
    let  population = countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population);}
   

  const req = new XMLHttpRequest();
  req.addEventListener("load", reqListener);
  req.open("GET", API_URL );
  req.send();