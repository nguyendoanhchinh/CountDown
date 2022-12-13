const dayE1 =document.getElementById('days')
const hoursE1   =document.getElementById('hours')
const minutesE1 =document.getElementById('mins')
const secondsE1 =document.getElementById('seconds')




const newYears= "1 1, 2023"
function countDown(){
    const newYearDate= new Date(newYears);
    const curentDate= new Date();

    const totalSeconds= (newYearDate-curentDate)/1000;
    
    const days=Math.floor(totalSeconds/3600/24); 

    const hours =Math.floor(totalSeconds/3600)%24;

    const mins=Math.floor(totalSeconds/60)%60;

    const seconds=Math.floor(totalSeconds)%60;

    // console.log(days,hours,mins,seconds);

    dayE1.innerHTML=days;
    hoursE1.innerHTML=hours;
    minutesE1.innerHTML=mins;
    secondsE1.innerHTML=seconds;
}
// inttial call
countDown();
setInterval(countDown,1000);