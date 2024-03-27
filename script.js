var css = document.querySelector("h3");
var inp1 = document.querySelector(".color1");
var inp2 = document.querySelector(".color2");
var body = document.querySelector("body");
var btn = document.querySelector("#btnRand");
function colorStyle(){
        body.style.background = "linear-gradient(to right, " + inp1.value + ", " + inp2.value + ")"
        css.textContent = body.style.background + ";"
}

function randColors(){
        var num = "0123456789ABCDEF"
        var result1 = "#"
        var result2 = "#"
        var charLength = num.length
        for (var i = 0; i < 12; i++) {
                if (result1.length < 7){
                        result1 += num.charAt(Math.floor(Math.random() * charLength))
                }else{
                        result2 += num.charAt(Math.floor(Math.random() * charLength))
                }
        }
        body.style.background = "linear-gradient(to right, " + result1 + ", " + result2 + ")"
        css.textContent = body.style.background + ";"
}
        

inp1.addEventListener("input", colorStyle)
inp2.addEventListener("input", colorStyle)
btn.addEventListener("click", randColors)



