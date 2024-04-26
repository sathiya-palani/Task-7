
// Get all the countries with a population of less than 2 lakhs using Filter method

const API_URL =  "https://restcountries.com/v3.1/all" ;
function reqListener() {
    
    
    var countryData=JSON.parse(this.response);
    const popu=countryData.filter((element)=>{
        return element.population<200000;
    })
    console.log(popu);
}

  
   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET", API_URL );
   req.send();
   