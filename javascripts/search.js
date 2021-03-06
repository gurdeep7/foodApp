async function search(url){
    let res = await fetch(url)

    let data = await res.json()

    return data;
}

function results(data,result1){
    console.log(data)
    result1.innerHTML = null;
    data.forEach(({strMeal,strMealThumb,strYoutube}) => {
        let div = document.createElement("div")
        let img = document.createElement("img");
        img.src = strMealThumb;
        img.style.width = "100%"
        let h4 = document.createElement("h4");
        h4.innerHTML=strMeal;
        div.append(img,h4)
        div.onclick = (()=>{
            window.location.href = strYoutube;
        })
        result1.append(div)
    });

}

function append_data(data1,dish){
dish.innerHTML = null;
data1.forEach(({strMeal,strMealThumb,strYoutube}) => {
    let div = document.createElement("div")
    div.style.width= "50%"
    div.style.margin = "auto"
    let img = document.createElement("img");
    img.src = strMealThumb;
    img.style.width = "100%"
    let h4 = document.createElement("h1");
    h4.innerHTML=strMeal;
    div.append(img,h4)
    div.onclick = (()=>{
        window.location.href = strYoutube;
    })
    dish.append(div)
});
}

export{search,results,append_data}