async function search(url){
    let res = await fetch(url)

    let data = await res.json()

    return data;
}

function appendata(){

}

export{search}