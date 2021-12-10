function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu; 


function spinWheel() {
    // document.getElementById("box2").style.transform = "rotate(360deg)" ;
    
    let min = 1;
    let max = 12;
    let count = 0;
    let myArr = [1,2,3,4,5,6,7,8,9,10,11,12]
    let meal = document.getElementById("hello").textContent;
    for (i=6;i!=0;i--) {
        let randNum = Math.floor(Math.random() * (max - min + 1) + min);
        
        // let meal = document.getElementById(randNum.toString()).textContent;
        // document.getElementById("day-" + count.toString() + "-meal").innerHTML = meal
        console.log(randNum);
        console.log(i);
        console.log(meal);

    }
    
}



function populateDays() {
    const d = new Date();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let curDay = d.getDay();
    let count = 0;

    for (let i = curDay; i<7; i++) {
        document.getElementById("day-" + count.toString()).innerHTML = "Your " + weekday[i] + " Dinner";
        count++;
    }

    if (count < 7) {
        for (let i = 0; i!=curDay; i++) {
            document.getElementById("day-" + count.toString()).innerHTML = "Your " + weekday[i] + " Dinner";
            count++;
        }
    }
    
}
