let daytext = document.getElementById("day");
let hourstext = document.getElementById("hours");
let minutestext = document.getElementById("minutes");
let scendstext = document.getElementById("scends");
let step_1_footer_progersbar_2 = document.getElementById("step_1_footer_progersbar");

function Time(day = 0, hours = 0, minutes = 0, scends = 0) {
    daytext.childNodes[1].innerHTML = day;
    hourstext.childNodes[1].innerHTML = hours;
    minutestext.childNodes[1].innerHTML = minutes;
    scendstext.childNodes[1].innerHTML = scends;

    let TimeInterval = setInterval(function() {
        scendstext.childNodes[1].innerHTML = scends--;
        if (scends < 0) {
            scends = 59;
            minutestext.childNodes[1].innerHTML = minutes--;
            if (minutes < 0) {
                minutes = 59;
                hourstext.childNodes[1].innerHTML = hours--;
                if (hours < 0) {
                    hours = 23;
                    daytext.childNodes[1].innerHTML = day--;
                    clearInterval(TimeInterval);
                }
            }
        }
    }, 1000)
}


Time(18, 5, 30, 55);