var timerId;
//result.style.backgroundColor = "green"
let navbar1 = document.getElementById("navbar-div")
let container = document.getElementById("container")
    import navbar from "../components/navbar.js"
    navbar1.innerHTML = navbar();
    
    import {search,results} from "./search.js";
function showlatest(){
   
   let response = search(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)
response
.then((res)=>{
    
        results(res.meals,container)
    
})
}
showlatest()
 