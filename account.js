form1=document.querySelector(".khata-banao>form")
arr1=JSON.parse(localStorage.getItem("users"))||[]
form1.addEventListener("submit",(event)=>{
    event.preventDefault()
    obj={
        n:form1.fname.value,
        e:form1.email.value,
        p:form1.pass.value
    }


    flag=0
    arr1.forEach((elem)=>{
        if(elem.n==obj.n && elem.e==obj.e && elem.p==obj.p){
            flag++
            
        }
    })
    if(flag>0){
        alert("account already exist")
    }
    else{
        arr1.push(obj)
    localStorage.setItem("users",JSON.stringify(arr1))
    alert("account created")
    }

    
})

form2=document.querySelector(".khata-hai>form")
form2.addEventListener("submit",(event)=>{
    event.preventDefault()
    
        
        email=form2.email.value
        pass=form2.pass.value
    
    flag=0
    arr1.forEach((elem)=>{
        if(elem.e==email && elem.p==pass){
            flag++
            
        }
    })
    if(flag>0){
        alert("succesfully logged in")
    }
    else{alert("create acount first")}
})