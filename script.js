const box = document.querySelector('#box_layer');
const text_box = box.querySelector('#textbox');
const text_box_text = text_box.querySelector('#cat_text');
const cat = box.querySelector('#cat');
const cat_waving_paw = cat.querySelector('#arm_r');
const heart = document.querySelector('#hrt');
cat.style.opacity = 0;
heart.style.opacity = 0;


box.addEventListener('pointerdown',(e)=>{
    cat.style.opacity = 1;
    heart.style.opacity = 1;
    box.classList.toggle('shake');
    cat.classList.toggle('emerge');
    cat.classList.toggle('leave');
    if(text_box.classList.contains('opacity1')){
        text_box_text.innerHTML = 'I go';
    }else{
        text_box_text.innerHTML = 'Heloo'; 
    }
    setTimeout(()=>{
        text_box.classList.toggle('opacity1');
        cat_waving_paw.classList.toggle('wave');
        heart.classList.toggle('drawStroke');
        heart.classList.toggle('unDrawStroke');
    },1000);
});