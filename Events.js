// click
document.getElementById("click").addEventListener("click", function(){
    this.style.background="#a5d6a7";
    this.textContent="Click detectado";
});

// mouseover
document.getElementById("hover").addEventListener("mouseover", function(){
    this.style.background="#fff59d";
    this.textContent="Mouse encima";
});

// dblclick
document.getElementById("dblclick").addEventListener("dblclick", function(){
    this.style.background="#ffcc80";
    this.textContent="Doble click";
});

// keydown
document.getElementById("keydown").addEventListener("keydown", function(){
    this.style.background="#80cbc4";
    this.textContent="Tecla presionada";
});

// focus
document.getElementById("focus").addEventListener("focus", function(){
    this.style.background="#b39ddb";
});

// blur
document.getElementById("blur").addEventListener("blur", function(){
    this.style.background="#ef9a9a";
    this.value="Perdiste el foco";
});

// submit
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    this.style.background="#ce93d8";
    this.textContent="Formulario enviado";
});

// change
document.getElementById("change").addEventListener("change", function(){
    this.style.background="#ffab91";
});



