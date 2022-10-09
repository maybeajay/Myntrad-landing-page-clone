let a;
function hideDiv(){
    if(a==1){
        document.getElementById("whenClicked").style.display="inline";
        return a=0;
    }
    else{
        document.getElementById("whenClicked").style.display="none";
        return a=1;
    }

}