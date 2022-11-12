arr=JSON.parse(localStorage.getItem("cart"))
// arr=arr.filter((elem)=>{
//     // console.log(elem)
//     return elem.category==="jewelery"
    
// })
// console.log(arr)
cards=document.querySelector(".cards-men")
total=document.querySelector(".nav4>h2")

function display(arr){
    cards.innerHTML=null
    arr.forEach((elem,i)=>{
        divs=document.createElement("div")

        image=document.createElement("img")
        image.src=elem.image

        title=document.createElement("h4")
        title.innerText=elem.title

        des=document.createElement("p")
        des.innerText=elem.description

        price=document.createElement("h4")
        price.innerText=`€ ${elem.price}`

        button=document.createElement("button")
        button.innerText="Remove"
        button.addEventListener("click",()=>{
            remove(i)
        })

        divs.append(image,title,des,price,button)
        cards.append(divs)
    })
    addup(arr)
}


function addup(arr){
    
    sum=arr.reduce((acc,curr)=>{
        return acc=acc+Number(curr.price)
    },0)
    total.innerText=`Total price - € ${sum}`
    // return sum
}
function remove(i){
    arr.splice(i,1)
    localStorage.setItem("cart",JSON.stringify(arr))
    addup(arr)
    display(arr)
}

display(arr)