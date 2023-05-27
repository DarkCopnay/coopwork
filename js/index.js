let daytext = document.getElementById("day");
let hourstext = document.getElementById("hours");
let minutestext = document.getElementById("minutes");
let scendstext = document.getElementById("scends");
let day = 15;
let hours = 5;
let minutes = 50;
let scends = 1;

daytext.childNodes[1].innerHTML = day;
hourstext.childNodes[1].innerHTML = hours;
minutestext.childNodes[1].innerHTML = minutes;
scendstext.childNodes[1].innerHTML = scends;

let TimeInterval = setInterval(function() {
    scendstext.childNodes[1].innerHTML = scends--;
    if (scends == 0) {
        scends = 59;
        minutestext.childNodes[1].innerHTML = minutes--;
        if (minutes == 0) {
            minutes = 59;
            hourstext.childNodes[1].innerHTML = hours--;
            if (hours == 0) {
                hours = 24;
                daytext.childNodes[1].innerHTML = day--;
                clearInterval(TimeInterval);
            }
        }
    }
}, 1000)
