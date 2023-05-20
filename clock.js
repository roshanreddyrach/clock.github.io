let hoursHand=document.getElementById('hoursHand');
let minutesHand=document.getElementById('minutesHand');
let secondsHand=document.getElementById('secondsHand');
const time=document.querySelector('#time');


setInterval(() => {
   let date=new Date();
   let hours=date.getHours();
   let minutes=date.getMinutes();
   let seconds=date.getSeconds();
   let day_night = "Am"

   let hRotation=30*hours + minutes/2;
   let mRotation=6*minutes;
   let sRotation=6*seconds;

    hoursHand.style.transform =`rotate(${hRotation}deg)`;
    minutesHand.style.transform =`rotate(${mRotation}deg)`;
    secondsHand.style.transform =`rotate(${sRotation}deg)`;
    // we cant use css style by classes only by Ids
    if(hours>12){
        day_night ="Pm";
        hours=hours-12;

    }
    if(hours<10){
        hours= "0" + hours;

    }
    if(minutes<10){
       minutes= "0" + minutes;

    }
    if(seconds<10){
        seconds= "0" + seconds;

    }
    time.textContent = hours + ":" +minutes + ":" + seconds +""+ day_night;
},1000);

