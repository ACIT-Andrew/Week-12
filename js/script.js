const print = console.log;

const b1 = document.querySelector('.b1');
print(b1);

function linkme(){
    alert("helooo");
    // window.open("https://www.youtube.com");
    // b1.removeEventListener("click", linkme);
}

b1.addEventListener('click', linkme), {once:true};

