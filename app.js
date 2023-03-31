let gifs=document.getElementsByClassName("gif");
let bu=document.getElementById("bu");
let nav=document.getElementById("n");
let c=document.getElementById("di");
let mainimg=document.getElementById("main");
let num=document.getElementById("num");
console.log(typeof num.innerHTML);
let n=+num.innerHTML;
function fun(){
    if(n>0){
        num.innerHTML=`${n-1}`;
        n--;

    }

}
function fun2(){
    if(n>=0){
        num.innerHTML=`${n+1}`;
        n++;

    }

}
const arr=["image-product-1","image-product-2","image-product-3","image-product-4"]
console.log(mainimg)
for(let i=0;i<gifs.length;i++){
    gifs[i].addEventListener("click",()=>{
    
            mainimg.src=`images/${arr[i]}.jpg`;
       
    })

}







