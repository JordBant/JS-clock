function mil_Time()
{
    const dateIRL = new Date();

    let hour = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    
    milHour = dateIRL.getHours();
    milMin = dateIRL.getMinutes();
    milSec = dateIRL.getSeconds(); 

    hour.textContent = milHour;
    hour.innerText = milHour;

    (milHour < 10) ? hour.textContent = "0" + milHour : milHour;
    (milHour < 10) ? hour.innerText = "0" + milHour : milHour;

    min.textContent = milMin;
    min.innerText = milMin;

    (milMin < 10) ? min.textContent = "0" + milMin : milMin;
    (milMin < 10) ? min.innerText = "0" + milMin : milMin;

    sec.textContent = milSec;
    sec.innerText = milSec;

    (milSec < 10) ? sec.innerText = "0" + milSec : milSec;
    (milSec < 10) ? sec.textContent = "0" + milSec : milSec;
}

mil_Time();
setInterval(mil_Time, 1000);