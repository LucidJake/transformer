var wrapperEle = 
    document.body.querySelector(".wrapper");
var chrs = [
  {name:"Optimus Prime", class: "leader", afl:"autobot", vehicle:"truck"},
  {name:"Megatron", class: "leader", afl:"decepticon", vehicle:"tank"},
  {name:"Bumblebee", class: "scout", afl:"autobot", vehicle:"car"},
  {name:"Starscream", class: "scout", afl:"decepticon", vehicle:"plane"},
  {name:"Ironhide", class: "soldier", afl:"autobot", vehicle:"truck"},
  {name:"Brawl", class: "soldier", afl:"decepticon", vehicle:"tank"},
];

function rollOut(obj){
  
  var transformerEle = document.createElement("div");
  
  
    var nameEle = document.createElement("h4");
      nameEle.innerHTML="Name: "+obj.name;
  
  
    var classEle = document.createElement("h4");
      
      if(obj.class==="leader"){
       classEle.innerHTML="Class: "+obj.class.toUpperCase();
      }else{
      classEle.innerHTML="Class: "+obj.class;  
      }
   
  
    var aflEle = document.createElement("h4");
      if(obj.afl==="autobot"){
        transformerEle.classList.add("autobot");
      }else{
        transformerEle.classList.add("decepticon");
      }
  
    var vehicleEle = document.createElement("h4");
     if(obj.vehicle==="truck"){
       vehicleEle.style.color="blue"
     }else if(obj.vehicle==="tank")
       vehicleEle.style.color="green" 
     if(obj.vehicle==="car")
       vehicleEle.style.color="gold"
     else if(obj.vehicle==="plane")
       vehicleEle.style.color="white"
    vehicleEle.innerHTML="Vehicle: "+obj.vehicle;
  
  var pictureEle=document.createElement("img");
  if (obj.afl === "autobot") {
    transformerEle.classList.add("autobot");
    pictureEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png";
  }else if (obj.afl === "decepticon"){
    transformerEle.classList.add("decepticon");
    pictureEle.src = "https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png";
  }  
  
  
  transformerEle.appendChild(nameEle);
  transformerEle.appendChild(classEle);
  transformerEle.appendChild(vehicleEle);
  transformerEle.appendChild(pictureEle);
  transformerEle.classList.add("character");
  wrapperEle.appendChild(transformerEle);      
}

for(var i=0; i<chrs.length; i++){
  rollOut(chrs[i]);
}