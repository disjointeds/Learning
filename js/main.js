let colors=["#ffffff","#000000","#ff0000","#0000ff","#00ff00","#ff25ff"];
let button1=document.getElementsByClassName('changeBG')[0];
let body = document.getElementsByTagName('body')[0]
let cont=0;
button1.onclick=function(){
    console.log(colors[cont])
    body.style.background = colors[cont]
    if(cont>=5){
        cont=0
    }
    else{
        cont++;
    }
}
