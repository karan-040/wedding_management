let  rating = 3;
document.querySelector("#star1").addEventListener("click",()=>{
    rating = 4;
})

document.querySelector("#star2").addEventListener("click",()=>{
    rating = 3;
})

document.querySelector("#star3").addEventListener("click",()=>{
    rating = 2;
})

document.querySelector("#star4").addEventListener("click",()=>{
    rating = 1;
})


document.querySelector("#star0").addEventListener("click",()=>{
    rating = 5;
})

document.querySelector(".submit-btn").addEventListener("click",()=>{
    document.querySelector(".title").innerHTML = "Submitted";
    document.querySelector(".content").innerHTML = "redirecting...";
    document.querySelector(".rate-box").style.display = "none";
    document.querySelector("textarea").style.display = "none";
    document.querySelector(".submit-btn").style.display = "none";
})

document.querySelector(".submit-btn").addEventListener("click",()=>{
    document.getElementById("stars").value = rating;
    document.getElementById("message").value = document.querySelector("textarea").value;
    setTimeout(()=>{
        document.getElementById("send").click();
    },2000);
})