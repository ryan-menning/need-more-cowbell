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

    if (count < 7) {
        for (let j = 0; j!=curDay; j++) {
            document.getElementById("day-" + count.toString()).innerHTML = "Your " + weekday[j] + " Dinner";
            count++;
            console.log(count);
        }
    }
    
}
