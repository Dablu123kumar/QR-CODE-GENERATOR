let qrCode = document.querySelector("#qrCode")
let codeImg = document.querySelector("#codeImg")
let loader = document.querySelector("#loading")


qrCode.addEventListener("click", () => {
    loader.style.display = "block"
    codeImg.onload = () => {
        loader.style.display = "none"

    }
    const input = document.getElementById("input").value
   
   
   let api =`http://api.qrserver.com/v1/create-qr-code/?data=${input}`
   codeImg.src = api

    
})
 