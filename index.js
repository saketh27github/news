// document.getElementById("counter").innerText = 10


// let count = 0;
// console.log(count);
// let try some examples 

// when increment is clicked we need to increase our count by 1

// we need to add onclick event lisiner



// let variables are block scope

let count = 0;

function increment(){
    count += 1;
    document.getElementById("counter").innerText = count;
}


function decrease(){
    if(count == 0){
        return;
    }
    count -= 1;
    document.getElementById("counter").innerHTML = count;
   
}

function save(){

    saveEl = document.getElementById("save-el")
    let countStr = " " + count + " - "
    saveEl.textContent += countStr;

    // now we have to reset to "Zero"
    counter.textContent = 0;
    count = 0;

    
}

// let do some "strings"

// let username = "saketh"
// let message = "You Have 5 New Notifications"
// console.log(message + ", " +username +"!")

// output: You Have 5 New Notifications, saketh!