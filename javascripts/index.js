var timerId;
//result.style.backgroundColor = "green"
let navbar1 = document.getElementById("navbar-div")
let container = document.getElementById("container")
    import navbar from "../components/navbar.js"
    navbar1.innerHTML = navbar();
    let serachlistener = document.getElementById("searchvalue")
    serachlistener.addEventListener("input",debounce)
    import {search,results} from "./search.js";
function search1(){
    let value = document.getElementById("searchvalue").value
   let response = search(`http://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
response
.then((res)=>{
    
        results(res.meals,container)
    
})
}
 function debounce(){
     console.log("hello")
     if(timerId){
         clearTimeout(timerId)
     }
     timerId = setTimeout(()=>{
         search1()
     },1000)
 }