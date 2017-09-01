
document.getElementById("main").style.background = 'url(static/img/backgrounds/'+Math.floor(Math.random() * 3)+'.jpg) no-repeat center fixed';
document.getElementById("main").style.backgroundSize = 'cover';

const inp = document.getElementsByClassName("reginput");

Object.keys(inp).forEach(el => {
    inp[el].addEventListener("focus", function() {
    this.classList.remove("input-error");
}, false);
});

function regSubmit(){
    let valid = true;
    Object.keys(inp).forEach(el => {
        if (inp[el].value == ""){
            inp[el].classList.add("input-error");
            valid = false;
        }
        else{
            inp[el].classList.remove("input-error");
        }
    });

    if (valid)
    {
        document.forms["registration-form"].submit();
    }
}
