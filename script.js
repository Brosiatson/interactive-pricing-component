let price = document.querySelector(".span__price");
let type = document.querySelector(".span__type");
let time = document.querySelector(".span__time");
let sliderType = document.querySelector(".slider1");
let sliderTime = document.querySelector(".slider2");
let images = document.querySelectorAll("img");
let number = 12; 

const init = () => {

    sliderTime.oninput = function () {
        if(this.value === "0"){
            price.innerHTML = "$" + (number /= 10) + ".00"
            time.innerHTML = "/month"
            this.classList.add("leftslider2")
            this.classList.remove("rightslider2")
        }
        else if(this.value === "1"){
            price.innerHTML = "$" + (number *= 10) + ".00"
            time.innerHTML = "/year"
            this.classList.remove("leftslider2")
            this.classList.add("rightslider2")
        }
    }

    sliderType.oninput = function () {
        if(this.value === "0"){
            if(sliderTime.value === "0"){
                number = 12
            }
            else{
                number = 120
            }
            price.innerHTML = "$" + number + ".00"
            type.innerHTML = "REGULAR"
            images[0].src = "confirm.png"
            images[1].src = "cancel.png"
            images[2].src = "cancel.png"
            sliderType.classList.remove("rightslider1")
            sliderType.classList.add("leftslider1")
        }
        else if(this.value === "1"){ 
            if(sliderTime.value === "0"){
                number = 16
            }
            else{
                number = 160
            }
            price.innerHTML = "$" + number + ".00"
            type.innerHTML = "ADVANCED"
            images[0].src = "confirm.png"
            images[1].src = "confirm.png"
            images[2].src = "cancel.png"
            sliderType.classList.remove("rightslider1")
            sliderType.classList.remove("leftslider1")
        }
        else if(this.value === "2"){ 
            if(sliderTime.value === "0"){
                number = 20
            }
            else{
                number = 200
            }
            price.innerHTML = "$" + number + ".00"
            type.innerHTML = "PRO"
            images[0].src = "confirm.png"
            images[1].src = "confirm.png"
            images[2].src = "confirm.png"
            sliderType.classList.add("rightslider1")
            sliderType.classList.remove("leftslider1")
        }
    }
}

init()
