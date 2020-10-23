function btnOn(){

    var menumb = document.getElementById('menumb');
    var body = document.getElementById('body');

    if(menumb.style.display === "block"){
        menumb.style.display = "none";
        body.style.overflow = "auto";
        
    }else {

        menumb.style.display = "block";
        body.style.overflow = "hidden";
        menumb.style.position = "relative";
        
    }
}
