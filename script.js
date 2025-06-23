


function update_clock() {
    const current_time= new Date() ;
    console.log("current time is : " +current_time) ;

    let hours=document.getElementById("hours") ;
    let minutes=document.getElementById("minutes") ;
    let seconds=document.getElementById("seconds") ;

    hours.innerHTML=String(current_time.getHours()).padStart(2,"0");
    minutes.innerHTML=String(current_time.getMinutes()).padStart(2,"0");
    seconds.innerHTML=String(current_time.getSeconds()).padStart(2, "0");

}

//update the clock every seconds

setInterval(update_clock,1000) ;  // c'est a dire execute la fonction update_cloclk chaque 1000 miliseconds(chaque seconds)

update_clock() ;