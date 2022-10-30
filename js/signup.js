const form = document.querySelector("form");
const usend = form.querySelector('#signup');

form.onsubmit = (e)=>{
    e.preventDefault();

}

usend.addEventListener("click", ()=>{
    const h = new XMLHttpRequest();
    h.open('POST', 'config/signup.php', true);

    h.onload = () =>{
        if (h.readyState === XMLHttpRequest.DONE) {
            if(h.status == 200){
                let data = h.response;
                
                if(data == "You can now sign in!"){
                const altt = document.querySelector(".altt");

                    altt.innerHTML = data;
                    let atype = "success";
                    document.querySelector(".aaa").innerHTML=atype;
                    document.querySelector(".js-alt").setAttribute("class", "alert alert-primary alert-dismissible js-alt");
                } else {
                    const altt = document.querySelector(".altt");

                    altt.innerHTML = data;
                    let atype = "Warning!";
                    document.querySelector(".aaa").innerHTML=atype;
                    document.querySelector(".js-alt").setAttribute("class", "alert alert-primary alert-dismissible js-alt");
                }
            }
        }
    }

    let formData = new FormData(form);
    h.send(formData);
    
});