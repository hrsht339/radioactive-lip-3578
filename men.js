arr=JSON.parse(localStorage.getItem("products"))
arr.filter((elem)=>{
    return elem.category=="men's clothing"
})
cards=document.querySelector(".cards-men")

function display(arr){
    arr.forEach((elem)=>{
        divs=document.createElement("div")

        image=document.createElement("img")
        image.src=elem.image

        title=document.createElement("h4")
        title.innerText=elem.title

        des=document.createElement("p")
        des.innerText=elem.description

        price=document.createElement("h4")
        price.innerText=elem.price

        divs.append(image,title,des,price)
        cards.append(divs)
    })
}

display(arr)