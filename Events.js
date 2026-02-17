// click
document.getElementById("click").addEventListener("click", function(){
    this.style.background="#640808";
    this.textContent="Click detectado";
});

// mouseover
document.getElementById("hover").addEventListener("mouseover", function(){
    this.style.background="#0b025c";
    this.textContent="Mouse encima";
});

// dblclick
document.getElementById("dblclick").addEventListener("dblclick", function(){
    this.style.background="#425f02";
    this.textContent="Doble click";
});

// keydown
document.getElementById("keydown").addEventListener("keydown", function(){
    this.style.background="#2f0682";
    this.textContent="Tecla presionada";
});

// focus
document.getElementById("focus").addEventListener("focus", function(){
    this.style.background="#e009b5";
});

// blur
document.getElementById("blur").addEventListener("blur", function(){
    this.style.background="#042f02";
    this.value="Perdiste el foco";
});

// submit
document.getElementById("form").addEventListener("submit", function(e){
    e.preventDefault();
    this.style.background="#450750";
    this.textContent="Formulario enviado";
});

// change
document.getElementById("change").addEventListener("change", function(){
    this.style.background="#025853";
});



