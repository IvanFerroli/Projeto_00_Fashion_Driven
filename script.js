let featuresSelected = 0;
let url = 'invalid URL';
const refImageInput = document.querySelector('#reference-image-input')
const refImageButton = document.querySelector('#reference-image-button');
let model = null;
let neck = null;
let material = null;
let image = null;
let owner = null;
let author = null;

function startApp() {
    userReception();
    // getLastOrders();
}
startApp();

function userReception() {
    const userName = prompt('Qual é o seu nome?');
    if(userName != null && userName != undefined && userName != ''){
        alert(`Olá ${userName}, seja bem vindo à Fashion Driven!`);
    }else{
        startApp();
    }
    owner = userName;
    author = userName;
}

function getLastOrders() {
    const promise = axios.get('https://mock-api.driven.com.br/api/v4/shirts-api/shirts');
    promise.then(renderizeLastOrders)
}

function renderizeLastOrders(answer) {
    const lastOrdersContainer = document.querySelector('.last-orders-container');
    for(i = 0; i < (answer.data).length; i++){
        const id = answer.data.id;
        const image = answer.data[i].image;
        const model = answer.data[i].model;
        const neck = answer.data[i].neck;
        const material = answer.data[i].material;
        const owner = answer.data[i].owner;
        const author = answer.data[i].author;
        if(i >= (answer.data.length) - 10){
            const order = `
                <div class="last-order-box" id="${id}">
                    <div class="last-orders-image">
                        <img src="${image}" alt="pedido${id}">
                    </div>
                    <div class="last-orders-creator">
                        <span>Criador: </span><span id="creator">${author}</span>
                    </div>
                </div>
            `
            lastOrdersContainer.innerHTML += order;
        }
    }    
}

function selectModel(element) { 
    const tShirt = document.querySelector('#t-shirt');
    const tankTop = document.querySelector('#tank-top');
    const longSleeves = document.querySelector('#long');
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
    model = element.id;
    enableButton();
    console.log(`Model selected: ${model}`)
}

function selectNeck(element) {
    const vNeck = document.querySelector('#v-neck');
    const round = document.querySelector('#round');
    const poloShirt = document.querySelector('#polo');
    const selectedNeck = element
    selectedNeck.classList.toggle("selected")
    
    if(selectedNeck == vNeck){
        round.classList.remove("selected");
        poloShirt.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }else if(selectedNeck == round){
        vNeck.classList.remove("selected");
        poloShirt.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }else if(selectedNeck == poloShirt){
        vNeck.classList.remove("selected");
        round.classList.remove("selected");
        featuresSelected = featuresSelected + 1;
    }
    neck = element.id;
    enableButton();
    console.log(`Neck selected: ${neck}`)
}

function selectMaterial(element) {
    const silk = document.querySelector('#silk');
    const organicCotton = document.querySelector('#cotton');
    const poliester = document.querySelector('#polyester');
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
    material = element.id;
    enableButton();
    console.log(`Material selected: ${material}`)
}

function checkInputEvent(){
    console.log(refImageInput.value)
    enableButton();
}

function validateUrl() {
    if(validURL(refImageInput.value) === true){
        url = 'valid URL'
    }else{
        url = 'invalid URL'
    }
}

function validURL(str) {
    var pattern = new RegExp(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g); // fragment locator
    return !!pattern.test(str);
  }
  
function enableButton() {
    if(featuresSelected == 3 && url === 'valid URL'){
        document.getElementById("reference-image-button").disabled = false;
        refImageButton.classList.add('enable');
    }else{
        document.getElementById("reference-image-button").disabled = true;
        refImageButton.classList.remove('enable');
    }
    validateUrl();
}


function purchase() {
    image = refImageInput.value
    orderPost();
}

function orderPost() {
    const orderPostObject= {
        model: `${model}`,
        neck: `${neck}`,
        material: `${material}`,
        image: `${image}`,
        owner: `${owner}`,
        author: `${author}`
    }
    const promise = axios.post('https://mock-api.driven.com.br/api/v4/shirts-api/shirts', orderPostObject);

    promise.then(() => {
        alert(`Encomenda confirmada ${userName}! obrigado por escolher a Fashion Driven!`)
    });

    promis.catch(() => {
        alert(`Ops ${userName}, não conseguimos processar a sua encomenda =[`);
    })


}


