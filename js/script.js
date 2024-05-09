// ini javascript
function validationUsername(){
    const username = document.getElementById("required").value

    if(username == ""){
        document.getElementById("username-error").innerHTML = "Tolong masukan nama anda"
        alert("Jangan lupa isi nama lengkap")
    }
    else{
        alert("Welcome " + username)
        document.getElementById("username-error").innerHTML = ""
    }
}
document.getElementById("send").addEventListener("click", () => validationUsername())

function validationEmail(){
    const email = document.getElementById("email").value

    if(email == ""){
        alert("Jangan lupa masukan alamat email")
        document.getElementById("email-error").innerHTML = "Tolong masukan alamat email anda"
    }
    else{
        document.getElementById("email-error").innerHTML = ""
    }
}
document.getElementById("send").addEventListener("click", () => validationEmail())

function validationOption(){
    const option = document.getElementById("option").value

    if(option == ""){
        alert("Jangan lupa pilih kemana duitnya mau dihabiskan")
        document.getElementById("option-error").innerHTML = "Tolong kasih tau mau kemana"
    }
    else{
        document.getElementById("option-error").innerHTML = ""
    }
}
document.getElementById("send").addEventListener("click", () => validationOption())

let indexSlide = 1;
let n;
showSlide(1);


function nextSlide(n) {
    console.log("nextSlide: " + n)
    showSlide(indexSlide += n);
}

function showSlide(index) {
    let listImage = document.getElementsByClassName("main-picture");
    console.log(listImage);
    if(index > listImage.length) indexSlide = 1;
    let i = 0;
    while (i < listImage.length){
        listImage[i].style.display = "none";
        i++;
    }

    listImage[indexSlide - 1].style.display = "block"

    console.log("showSlide: " + index)
}

setInterval(() => nextSlide(1), 2000);

document.getElementById("next").addEventListener("click", () => nextSlide(1))