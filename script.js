
let mail = document.getElementById('mail');
let feed =document.getElementById("feedback");
let btn= document.getElementById('btn');
let chk=false;


btn.onclick = (event)=>{
    event.preventDefault;
    console.log("hi");

    if (chk) {
        document.write(' <h1>logged in......</h1>')
    }
}

mail.addEventListener("input",()=>{

    if(mail.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        mail.classList.remove("is-invalid");
        mail.classList.add('is-valid');
        feed.style.display='none'
        chk = true;
    }
    else{
        mail.classList.remove("is-valid");
        mail.classList.add("is-invalid");
        feed.style.display='block'

        if(mail.value==""){
            feed.classList.add("in-validfeedback")
            feed.textContent="E-mail can't be Empty";
        }
        else{
            feed.classList.add("in-validfeedback")
            feed.textContent="Enter a valid Email";
        }
    }
})

console.log(mail.value);


