const filter = document.querySelector(".filter");
const filter_section = document.querySelector(".filter-section");
document.addEventListener("click",(event)=>{
    // alert(event.target.className)
    if(!filter_section.contains(event.target) && !filter.contains(event.target) ){
        filter_section.style.display = "none";
    }
})

filter.addEventListener("click",()=>{
    filter_section.style.display = "block";
})

document.querySelector(".reset").addEventListener("click",()=>{
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });
})

document.querySelector(".submit").addEventListener("click",()=>{
    let arr=[];
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    allCheckboxes.forEach(function(checkbox) {
        if(checkbox.checked){
            arr.push(1);
        }
        else{
            arr.push(0);
        }
    });
    document.querySelector(".array").value = arr;
    document.getElementById("submit-filterdata").click();
})





document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('#ratings');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // If this checkbox is checked
            if (this.checked) {
                // Uncheck all other checkboxes
                checkboxes.forEach(function(otherCheckbox) {
                    if (otherCheckbox !== checkbox && otherCheckbox.checked) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('#review');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // If this checkbox is checked
            if (this.checked) {
                // Uncheck all other checkboxes
                checkboxes.forEach(function(otherCheckbox) {
                    if (otherCheckbox !== checkbox && otherCheckbox.checked) {
                        otherCheckbox.checked = false;
                    }
                });
            }
        });
    });
});





//routes using fetch


const boxes = document.querySelectorAll('.box');

// Loop through each box and attach click event listener
boxes.forEach(box => {
    box.addEventListener('click', function(event) {
        const inputValue = box.querySelector('input').value;
        box.querySelector("form input").value = inputValue;
        box.querySelector("form button").click();
        
    });
});









