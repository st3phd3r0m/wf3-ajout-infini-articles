// Attente chargement page web
$(function () {

    $(document).scroll(defile);


});

function defile() {
    //porpriétès clès en js natif
    // window.scrollY : nombre de pixel entre le haut du document et la position actuelle du haut de la fenetre
    //window.innerHeight : hauteur intérieure de la fenêtre
    // document.documentElement.scrollHeight : hauteur du document
    // console.log(window.scrollY);
    // console.log(window.innerHeight);
    // console.log(document.documentElement.scrollHeight);

    //Propriétés clès en jQuery
    let hauteurDoc = $(document).height();
    let hauteurFenetre = $(window).height();
    let positionScroll = $(document).scrollTop();

    if (hauteurFenetre + positionScroll >= hauteurDoc - 1) {
        console.log("je suis en bas");

        //Collection class = post - preview
        let clone= $(".post-preview").clone();

        //Collection du code html dans chacun des elements de classe post - preview

        
        $(".btn").parent().before(clone);
        
        
        
    }
}