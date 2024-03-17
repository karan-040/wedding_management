const element = document.querySelector(".short");
element.style.color = document.querySelector("h6").innerHTML;
const hall_id = document.getElementById("hall-id").value
element.addEventListener("click",()=>{
    if(element.style.color == "red"){
        const postData = {color: 'grey',hall:hall_id}
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(postData) 
        };
          
        fetch('/v1/updateWishlist',options)
        .then(()=>{
            element.style.color = "grey";
        })
        .catch((err)=>{
            console.log("could not add to wishlist",err)
        })
    }
    else{
        const postData = {color: 'red',hall:hall_id}
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(postData) 
        };
        fetch('/v1/updateWishlist',options)
        .then(()=>{
            element.style.color = "red";
        })
        .catch((err)=>{
            console.log("could not remove from wishlist",err)
        })
    }
})

document.querySelector(".rev").addEventListener("click",()=>{
    document.querySelector(".but").click();
})
// Make a GET request to a backend endpoint

