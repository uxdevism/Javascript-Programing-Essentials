let count = 0;



function increaseCount() {
    count++ // Increment the count by 1
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count // Display the count in HTML

}



function increaseCount() {

    count++ // Increment the count by 1
    displayCount(); //Dispalt the count
    checkCountValue() // Check count value and display message
}

function  checkCountValue() {
if (count === 10) {
    alert("Your Post gained 10 foloowers ! Congratulations !");
} else if (count === 20) {
    alert("Your post gained 20 followers ! Keep it up !");
}

}