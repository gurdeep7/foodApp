var timerId;
//result.style.backgroundColor = "green"
let navbar1 = document.getElementById("navbar-div")
let container = document.getElementById("container")
let dish = document.getElementById("dish")
    import navbar from "../components/navbar.js"
    navbar1.innerHTML = navbar();
    let serachlistener = document.getElementById("searchvalue")
    serachlistener.addEventListener("input",debounce)
    import {search,results,append_data} from "./search.js";
function search1(){
    let value = document.getElementById("searchvalue").value
   let response = search(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
response
.then((res)=>{
    
        results(res.meals,container)
    
})
}
 function debounce(){
     if(timerId){
         clearTimeout(timerId)
     }
     timerId = setTimeout(()=>{
         search1()
     },1000)
 }

 recipeofday()

 function recipeofday(){
    let response = search(`https://www.themealdb.com/api/json/v1/1/random.php`)
    response
    .then((res)=>{
        
           append_data(res.meals,dish)
        
    })
    }
 