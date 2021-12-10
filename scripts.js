function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 

function populateDays() {
    const d = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let curDay = d.getDay();
    let count = 0;

    for (let i = curDay; i<7; i++) {
        document.getElementById("day-" + count.toString()).innerHTML = "Your " + weekday[i] + " Dinner";
        count++;
        console.log(count);
    }
    console.log(count);

    if (count < 7) {
        for (let j = 0; j===curDay; j++) {
            document.getElementById("day-" + count.toString()).innerHTML = "Your " + weekday[j] + " Dinner";
            count++;
            console.log(count);
        }
    }
    
}


// document.getElementById("day-0").innerHTML = "Your " + weekday.curDay + " Dinner"
// document.getElementById("day-1").innerHTML = "Your " + weekday[curDay + 1] + " Dinner"
// document.getElementById("day-2").innerHTML = "Your " + weekday[curDay + 2] + " Dinner"
// document.getElementById("day-3").innerHTML = "Your " + weekday[curDay + 3] + " Dinner"
// document.getElementById("day-4").innerHTML = "Your " + weekday[curDay + 4] + " Dinner"
// document.getElementById("day-5").innerHTML = "Your " + weekday[curDay + 5] + " Dinner"
// document.getElementById("day-6").innerHTML = "Your " + weekday[curDay + 6] + " Dinner"