const mainWeather = document.getElementById("mainWeather");
const searchBtn = document.getElementById("searchbtn");

const cityName = document.getElementById("cityName");
const  nameCity = document.getElementById("nameCity");

const temp = document.getElementById("temp");
const tempStatus = document.getElementById("tempStatus");

const minTemp = document.getElementById("minTemp");
const maxTemp = document.getElementById("maxTemp");
const humidity = document.getElementById("humidity");
const visibility = document.getElementById("visibility");

const key = "0e4cfdcb6a2a7a76b8a236055e8cb1b4";

const getInfo= async(event)=>{
event.preventDefault();
let cityVal = cityName.value;
if(cityVal === ""){
    nameCity.innerText ="Please enter a city name first";
}
else{
    try{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=${key}`;
        const response = await fetch(url);
        const data = await response.json();
        const arrayData = [data];
        nameCity.innerText =`${arrayData[0].name} ${arrayData[0].sys.country}`;
        temp.innerText =`${arrayData[0].main.temp} ° Celcius`;
        tempStatus.classList.add("show");
        tempStatus.innerText =arrayData[0].weather[0].main;
        minTemp.innerText =`Minimum Temperature : ${arrayData[0].main.temp_min}`;
        maxTemp.innerText =`Maximum Temperature : ${arrayData[0].main.temp_max}`;
        humidity.innerText =`Humidity : ${arrayData[0].main.humidity}`;
        visibility.innerText =`Visibility : ${arrayData[0].visibility}`;

        const tempMood = arrayData[0].weather[0].main;
        let weathericon = document.getElementById("weathericon");
        
if(tempMood == "Sunny"){
weathericon.innerHTML = "<i class='fas fa-sun'></i>";
}  else if(tempMood == "Rain")  {
    weathericon.innerHTML = "<i class='fas fa-cloud-showers-heavy'></i>";
}  else if(tempMood == "Haze")  {
    weathericon.innerHTML = "<i class='fas fa-smog'></i>";
}
else if(tempMood == "Mist")  {
    weathericon.innerHTML = "<i class='fas fa-smog'></i>";
}  else if(tempMood == "Clouds")  {
    weathericon.innerHTML = "<i class='fas fa-cloud'></i>";
} else if(tempMood == "Smoke")  {
    weathericon.innerHTML = "<i class='fas fa-smog'></i>";
}  
  else{
    weathericon.innerHTML = "<i class='fas fa-sun'></i>";
}

    }catch{
        nameCity.innerText ="Please enter a city name properly";
        dataHide.classList.add("dataHide");
    }
   
}
}
searchBtn.addEventListener("click", getInfo);

$("#showBtn").click(function (){
    $("#showData").fadeIn(3000);
   });
   $("#hideBtn").click(function (){
    $("#showData").slideUp(3000);
   });

        let day = new Date();
        const allDay = [
            "MON",
            "TUES",
            "WED",
            "THU",
            "FRI",
            "SAT",
            "SUN",
        ];
        const allMonths = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
        ];
        let currDay = allDay[day.getDay()-1];
        let date = day.getDate();
        let month = allMonths[day.getMonth()];

        function mytime()
   {
   var d=new Date();
   ap="AM";
   h=d.getHours();
   m=d.getMinutes();
   s=d.getSeconds();
   if (h>11) { ap = "PM"; mainWeather.style.background = "linear-gradient(98deg, rgb(253 248 74),transparent)";}
   if(h<7 && h>11 ){mainWeather.style.background="linear-gradient(98deg, rgb(0 0 0), transparent)";}
   if (h>12) { h = h-12; }
   if (h==0) { h = 12; }
   if (m<10) { m = "0" + m; }
   if (s<10) { s = "0" + s; }
   document.getElementById('time').innerHTML=h + ":" + m + ":" + s + " " + ap;
   t=setTimeout('mytime()',500);
   }
        document.getElementById("day").innerHTML=`${currDay},  ${date}  ${month}`;
        
        

      

