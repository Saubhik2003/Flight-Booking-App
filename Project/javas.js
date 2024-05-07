function change_background_button(n){
    x1=document.getElementById("economyclass");
    x2=document.getElementById("businessclass");
    x3=document.getElementById("firstclass");

    if(n===1){
        x1.style.background="#6C0345";
        document.getElementById("ec").style.color="white";
        x2.style.background="#f1f5f9";
        document.getElementById("buc").style.color="#64748b";
        x3.style.background="#f1f5f9";
        document.getElementById("fc").style.color="#64748b";
    }
    else if(n===2){
        x1.style.background="#f1f5f9";
        document.getElementById("ec").style.color="#64748b";
        x2.style.background="#6C0345";
        document.getElementById("buc").style.color="white";
        x3.style.background="#f1f5f9";
        document.getElementById("fc").style.color="#64748b";
    }
    else if(n===3){
        x1.style.background="#f1f5f9";
        document.getElementById("ec").style.color="#64748b";
        x2.style.background="#f1f5f9";
        document.getElementById("buc").style.color="#64748b";
        x3.style.background="#6C0345";
        document.getElementById("fc").style.color="white";
    }
}