function preventdefault_(ev){
    ev.preventDefault();
}

function drag(ev){

    ev.dataTransfer.setData("data", ev.target.id);

}

function drop(ev){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("data");
    ev.target.style.backgroundImage='url('+document.getElementById(data).src+')';
    console.log('ev.target', document.getElementById(data).src);
}


// function verificar_win(){
    // document.querySelectorAll('#block').forEach(e => {
    //     var bgimg  = getComputedStyle(e)
    //         .getPropertyValue('background-image')
    //         .slice(3, -1).replace(/"/g, "");
    
    //     console.log(bgimg);
    // });
    
// }




function limpar_gamer(){
    document.querySelectorAll('#block').forEach(e => {
        e.style.backgroundImage= '';
    })
}


