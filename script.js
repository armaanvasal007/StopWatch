let timerdisplay=document.querySelector('.timerdisplay');
let stop=document.getElementById('stop');
let start=document.getElementById('start');
let reset=document.getElementById('reset');
let msec=0;
let secs=0;
let mins=0;
let timerID=null;
start.addEventListener('click',function(){
    if(timerID!=null)
    {
        clearInterval(timerID);
    }
    timerID=setInterval(startTimer,10);
});
stop.addEventListener('click',function(){
    clearInterval(timerID);
});
reset.addEventListener('click',function(){
    clearInterval(timerID);
    timerdisplay.innerHTML=`00:00:00`;
    msec=secs=mins=0;
});
function startTimer()
{
    msec++;
    if(msec==100)
    {
        msec=0;
        secs++;
        if(secs==60)
        {
            secs=0;
            mins++;
        }
    }
    let msecString=msec<10 ? `0${msec}` : msec;
    let secString=secs<10 ? `0${secs}` : secs;
    let minString=mins<10 ? `0${mins}` : mins;
    timerdisplay.innerHTML=`${minString} : ${secString} : ${msecString}`;
}