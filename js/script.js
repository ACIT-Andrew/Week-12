const print = console.log;

const body = document.body;
const b1 = document.querySelector('.b1');
const cart = document.querySelector('#cart')
const newButton = document.createElement('button');
newButton.innerHTML = 'Click me!';
const divCon = document.querySelector('#container');
// print(b1);

function linkme(){
    const newButton = document.createElement('button');
    newButton.innerHTML = 'Click me!';
    // alert("helooo");
    body.appendChild(newButton);
    // window.open("https://www.youtube.com");
    // b1.removeEventListener("click", linkme);
};
function changeBGpink(){
    body.style.backgroundColor = 'pink';
};
function changeText(){
    if(b1.textContent == 'Click me!'){
    b1.textContent = 'Clicked!';
    }
    else if (b1.textContent == 'Clicked!'){
        b1.textContent = 'Click me!';
    }
};
const showImage = ()=>{
    cart.src = 'images/shoppingcart.png';
    // cart.setAttribute('alt','cart');
    cart.alt = "cart";
    // cart.setAttribute('width','100px');
    cart.width = "100";    
};
const changeBGgreen = (e)=>{
    if(e.target.tagName == 'BUTTON'){
    e.target.style.backgroundColor = 'green';
    e.stopPropagation();
    }
}
const textRed = (e)=>{
    // e.target.style.color = e.target.textContent;
    e.target.classList.add('textRed');
}

b1.addEventListener('click', changeBGpink);
b1.addEventListener('click', linkme);

// b1.addEventListener('click', changeText);
// b1.addEventListener('click',showImage);
// cart.addEventListener('click')
divCon.addEventListener('mouseover', changeBGgreen);
divCon.addEventListener('click', textRed);

