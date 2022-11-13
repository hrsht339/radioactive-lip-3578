arr=JSON.parse(localStorage.getItem("products"))
arr=arr.filter((elem)=>{
    // console.log(elem)
    return elem.category==="jewelery"
    
})
console.log(arr)
cards=document.querySelector(".cards-men")

function display(arr){
    cards.innerHTML=null
    arr.forEach((elem)=>{
        divs=document.createElement("div")

        image=document.createElement("img")
        image.src=elem.image
        image.addEventListener("click",()=>{
            localStorage.setItem("individual",JSON.stringify(elem))
            location.href="individual.html"
        })

        title=document.createElement("h4")
        title.innerText=elem.title

        des=document.createElement("p")
        des.innerText=elem.description

        price=document.createElement("h4")
        price.innerText=`€ ${elem.price}`

        button=document.createElement("button")
        button.innerText="Add To Cart"
        button.addEventListener("click",()=>{
            cartelem(elem)
        })

        divs.append(image,title,des,price,button)
        cards.append(divs)
    })
}

function cartelem(elem){
    cart=JSON.parse(localStorage.getItem("cart"))||[]
    cart.push(elem)
    localStorage.setItem("cart",JSON.stringify(cart))

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