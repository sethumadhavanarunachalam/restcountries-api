// async function restcountry(){
//     var res =await fetch("https://restcountries.com/v2/all");
// var res1 =await res.json();
// console.log(res1[0].name);
// }

// restcountry();

var container = document.createElement("div");
container.setAttribute("class","container");

var row = document.createElement("div");
row.setAttribute("class","row");

var res =fetch("https://restcountries.com/v2/all").then((data)=>data.json()).then((data1)=>foo(data1));
 function fool(){
    var weather = fetch("https://api.openweathermap.org/data/2.5/weather?lat=${data1[i].latlng[0]}&lon=${data1[i].latlng[1]}&appid=f0a60496feae7d4d15851650a7ec2c71");
    
 }

function foo(data1){
for (var i=0;i<data1.length;i++){

  row.innerHTML+=`<div class="col-md-4"> <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${data1[i].flag}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">country:${data1[i].name}</h5>
    <h5 class="card-title">capital:${data1[i].capital}</h5>
    <h5 class="card-title">region:${data1[i].region}</h5>
    <h5 class="card-title">countrycode:${data1[i].alpha2Code}</h5>
    
    <a href="#" onclick=fool() class="btn btn-primary">show weather</a>
  </div>
  </div>
</div>`
}
}

container.append(row);
document.body.append(container);

console.log(foo());