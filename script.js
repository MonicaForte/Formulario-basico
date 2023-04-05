function campo(p){
    var campo = document.getElementsByTagName('input')[p]
    var styleLabel = campo.parentElement.lastElementChild.style;

    if(campo.value !=""){
        styleLabel.fontSize="12px";
        styleLabel.top="-3px";

    }else{
        styleLabel.fontSize="1rem";
        styleLabel.top="25px";
        styleLabel.left="47px";

    }
}