//Get all the countries from Asia continent /region using Filter method


const API_URL =  "https://restcountries.com/v3.1/all" ;
function reqListener() {
    

   var  country = JSON.parse(this.responseText);
     let asia = country. filter(function(element) {
        if (element.region == 'Asia'){
        return  element.name ;
        } 
      })
      console.log(asia);
   }


   const req = new XMLHttpRequest();
   req.addEventListener("load", reqListener);
   req.open("GET", API_URL );
   req.send();
