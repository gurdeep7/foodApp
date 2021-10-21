async function search(url){
    let res = await fetch(url)

    let data = await res.json()

    return data;
}

function results(data,result1){
    console.log(data)
    result1.innerHTML = null;
    data.forEach(({strMeal,strMealThumb}) => {
        let div = document.createElement("div")
        let img = document.createElement("img");
        img.src = strMealThumb;
        img.style.width = "100%"
        let h4 = document.createElement("h4");
        h4.innerHTML=strMeal;
        div.append(img,h4)
        result1.append(div)
    });

}

export{search,results}