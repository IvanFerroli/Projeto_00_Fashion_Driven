var featuresSelected = 0;
var url = 'invalid';
const refImageInput = document.querySelector('#reference-image-input')
const refImageButton = document.querySelector('#reference-image-button');

function startApp() {
    userReception();
}
startApp();

function userReception() {
    const userName = prompt('Qual é o seu nome?');
    if(userName != null && userName != undefined && userName != ''){
        alert(`Olá ${userName}, seja bem vindo à Fashion Driven!`);
    }else{
        startApp();
    }
}

function selectModel(element) {
    const tShirt = document.querySelector('#t-shirt');
    const tankTop = document.querySelector('#tank-top');
    const longSleeves = document.querySelector('#long-sleeves');
    const selectedModel = element
    selectedModel.classList.toggle("selected")
    
    if(selectedModel == tShirt){
        tankTop.classList.remove("selected");
        longSleeves.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }else if(selectedModel == tankTop){
        tShirt.classList.remove("selected");
        longSleeves.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }else if(selectedModel == longSleeves){
        tShirt.classList.remove("selected");
        tankTop.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }
    enableButton();
}

function selectNeck(element) {
    const vNeck = document.querySelector('#v-neck');
    const shirt = document.querySelector('#shirt');
    const poloShirt = document.querySelector('#polo-shirt');
    const selectedNeck = element
    selectedNeck.classList.toggle("selected")
    
    if(selectedNeck == vNeck){
        shirt.classList.remove("selected");
        poloShirt.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }else if(selectedNeck == shirt){
        vNeck.classList.remove("selected");
        poloShirt.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }else if(selectedNeck == poloShirt){
        vNeck.classList.remove("selected");
        shirt.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }
    enableButton();
}

function selectMaterial(element) {
    const silk = document.querySelector('#silk');
    const organicCotton = document.querySelector('#organic-cotton');
    const poliester = document.querySelector('#poliester');
    const selectedMaterial = element
    selectedMaterial.classList.toggle("selected")
    
    if(selectedMaterial == silk){
        organicCotton.classList.remove("selected");
        poliester.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }else if(selectedMaterial == organicCotton){
        silk.classList.remove("selected");
        poliester.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }else if(selectedMaterial == poliester){
        silk.classList.remove("selected");
        organicCotton.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }
    enableButton();
}

function validateUrl() {
    if(validURL(refImageInput.value) === true){
        url = 'valid'
        console.log(validURL(refImageInput.value), 'válido')
    }else{
        console.log(validURL(refImageInput.value), 'inválido')
        url = 'invalid'
    }
}

function validURL(str) {
    var pattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g); // fragment locator
    return !!pattern.test(str);
  }

var tc1 = "https://yt3.ggpht.com/ytc/AKedOLQ6Ief26j8b1lgSA1OpXSCzJBlnlEEsWtQAfdwB=s900-c-k-c0x00ffffff-no-rj";
    console.log(validURL(tc1), tc1); 
  
function enableButton() {
    validateUrl();
    if(featuresSelected == 3 && url == 'valid'){
        
        document.getElementById("reference-image-button").disabled = false;
        
        refImageButton.classList.add('enable');
    }else{
        console.log('not ok');
        console.log(refImageInput)
    }
}

function checkInputEvent(){
    enableButton();
    console.log(refImageInput)
}

function purchase() {
    alert("Encomenda confirmada, obrigado por escolher a Fashion Driven!");
}

// const requisitesChecking = setInterval(enableButton, 500);
// const inputChecking = setInterval(console.log(`tô chamando ${refImageInput} fora da enable button`), 500);

// function postNewModel() {

// }

