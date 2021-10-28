function mil_Time()
{
    const dateIRL = new Date();

    let hour = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');

    hour.textContent = dateIRL.getHours();
    hour.innerText = dateIRL.getHours();

    min.textContent = dateIRL.getMinutes();
    min.innerText = dateIRL.getMinutes();

    sec.textContent = dateIRL.getSeconds(); 
    sec.innerText = dateIRL.getSeconds();
}

mil_Time();
setInterval(mil_Time, 1000);