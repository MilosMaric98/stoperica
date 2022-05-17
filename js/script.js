var isRunning = false,
startTime,
elapsedTime = 0,
currentTime,
timeInterval,
hours,
minutes,
seconds,
remainder,
formattedTime,
time;

function add_leading_zero(number){
    if(number < 10){
        return "0" + number;
    } else{
        return number;
    }
}

document.getElementById("start_stop").onclick = function(){
    if(!isRunning){
        isRunning = true;
        if(elapsedTime == 0){
            startTime = new Date().getTime();
        } else{
            startTime = new Date().getTime() - elapsedTime;
        }
        timeInterval = window.setInterval(function(){
            currentTime = new Date().getTime();
            elapsedTime = currentTime - startTime;

            hours = Math.floor(elapsedTime / 3600000);
            remainder = elapsedTime - (hours * 3600000);

            minutes = Math.floor(remainder / 60000);
            remainder -= minutes * 60000;

            seconds = Math.floor(remainder / 1000);
            remainder -= seconds * 1000;

            formattedTime = add_leading_zero(hours) + ":" + add_leading_zero(minutes) + ":" + add_leading_zero(seconds) + ":" + add_leading_zero(remainder);

            document.getElementById("stopwatch").innerHTML = formattedTime.toString();
        },10);
    } else{
        isRunning = false;
        window.clearInterval(timeInterval);
        document.getElementById("time").innerHTML = formattedTime;
    }

    document.getElementById("reset").onclick = function(){
        startTime = new Date().getTime();
        if(!isRunning){
            elapsedTime = 0;
            document.getElementById("stopwatch").innerHTML = "00:00:00:000";
        }
        document.getElementById("time").innerHTML = "";
    }
}