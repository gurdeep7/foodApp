var result1 = document.getElementById("result")
result1.textContent= "hello"
//result.style.backgroundColor = "green"
let navbar1 = document.getElementById("navbar-div")
    import navbar from "../components/navbar.js"
    navbar1.innerHTML = navbar();
    let serachlistener = document.getElementById("searchvalue")
    serachlistener.addEventListener("input",search1)
    import {search} from "./search.js";
function search1(){
    let value = document.getElementById("searchvalue").value

   let response = search(`http://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata`)

response
.then((res)=>{
    console.log(res.meals)
    if(res.meals.length != 2){
        result.textContent = "hello"
    }
})

}
    