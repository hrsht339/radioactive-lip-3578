arr=JSON.parse(localStorage.getItem("cart"))
total=document.querySelector(".nav4>h2")
function addup(arr){
    
    sum=arr.reduce((acc,curr)=>{
        return acc=acc+Number(curr.price)
    },0)
    total.innerText=`Total price - € ${sum}`
    // return sum
}
addup(arr)


function alerto(){
    alert("Your Order Has Been Placed")
    localStorage.setItem("placed",JSON.stringify(arr))
}