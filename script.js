function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
   
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src="img/fotomanha.png"
        document.body.style.background = "linear-gradient(180deg, rgba(226,205,159,1) 0%, rgba(215,215,196,1) 100%)"
    } else if (hora >= 12 && hora <= 18) {
       // BOA TARDE!
       img.src="img/fototarde.png"
       document.body.style.background = "linear-gradient(180deg, rgba(185,132,111,1) 0%, rgba(215,215,196,1) 100%)"
} else {
    // BOA NOITE!
        img.src="img/fotonoite.png"
        document.body.style.background = "linear-gradient(180deg, rgba(81,81,84,1) 0%, rgba(215,215,196,1) 100%)"
}
}