var min = 00;
var sec = 00;
var msec = 00;
var min_heading = document.getElementById("min")
var sec_heading = document.getElementById("sec")
var msec_heading = document.getElementById("msec")
var interval;

function timer()
{
    msec ++
    msec_heading.innerHTML = msec
    if (msec >= 99)
    {
        sec ++
        sec_heading.innerHTML = sec
        msec = 0
    }
    else if(sec>=60)
    {
        min ++
        min_heading.innerHTML = min
        sec =   0
    }
}
function start()
{
    interval = setInterval(timer,10)    
}
function Pause()
{
    clearInterval(interval)    
}
function reset()
{
    min = 00;
    sec = 00;
    msec = 00;
    min_heading.innerHTML = min;
    sec_heading.innerHTML = sec;
    msec_heading.innerHTML = msec;
    Pause();    
}