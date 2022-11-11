arr=JSON.parse(localStorage.getItem("products"))
cards=document.querySelector(".cards-men")
arr=arr.filter((elem)=>{
    // console.log(elem)
    return elem.category==="women's clothing"
    
})
console.log(arr)
cards=document.querySelector(".cards-men")

function display(arr){
    cards.innerHTML=null
    arr.forEach((elem)=>{
        divs=document.createElement("div")

        image=document.createElement("img")
        image.src=elem.image

        title=document.createElement("h4")
        title.innerText=elem.title

        des=document.createElement("p")
        des.innerText=elem.description

        price=document.createElement("h4")
        price.innerText=`€ ${elem.price}`

        divs.append(image,title,des,price)
        cards.append(divs)
    })
}
function search(){
bar=document.querySelector(".nav3>input").value
// console.log(bar)
farr=arr.filter((elem)=>{
    return elem.title.includes(bar)
})
// console.log(farr)
display(farr)
}

function sort(){
    bar=document.querySelector("#sort").value
    sarr=arr.slice(0)
        if(bar=="low to high"){
            sarr.sort((a,b)=>{ return Number(a.price)-Number(b.price)})
                display(sarr)
        }
        else if(bar=="high to low"){
            sarr.sort((a,b)=>{ return Number(b.price)-Number(a.price)})
                display(sarr)
        }
        else if(bar===""){
            display(arr)
        }
   
    
}

display(arr)