const val = document.querySelector(".error").innerHTML.trim();
if(val!=""){
    document.querySelector(".error").classList.add('show');

    // Hide the error message after 3 seconds
    setTimeout(() => {
        document.querySelector(".error").classList.remove('show');
    }, 3000);
}
const icon1 = document.getElementById("show");
const icon2 = document.getElementById("hide");
icon1.addEventListener("click",()=>{
    document.getElementById("pass1").type = "text";
    icon1.style.display = "none";
    icon2.style.display = "block";
})
icon2.addEventListener("click",()=>{
    document.getElementById("pass1").type = "password";
    icon2.style.display = "none";
    icon1.style.display = "block";
})
document.getElementById("fake").addEventListener("click",()=>{
    document.getElementById("user2").value = document.getElementById("user1").value;
    document.getElementById("pass2").value = document.getElementById("pass1").value;
    document.getElementById("real").click();
})