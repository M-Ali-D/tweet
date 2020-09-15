var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    loop: false,
    mousewheel: true,
    coverflowEffect: {
      rotate: 0,
      stretch: -100,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  });
// ----------------------------------------------------------------------------------------------------


// -----------------------------------------------------------------------------------
var swiperSlide=document.querySelectorAll('.swiper-slide');
var blackScreen=document.querySelector('.black-screen');
var blackSwiperSlide=document.querySelector('.black-screen .swiper-slide');
for(let i=0;i<swiperSlide.length;i++){
  swiperSlide[i].addEventListener('click',()=>{
      blackScreen.style.display='flex';
      blackScreen.style.opacity='1';
      blackSwiperSlide.innerHTML=swiperSlide[i].innerHTML;
  })
}

// -------------------------------------------------------------------------------------
var cross=document.querySelector('.cross');
cross.addEventListener('click',()=>{
  blackScreen.style.display='none'
  blackScreen.style.opacity='0;'
})

// ---------------------------------------------------------------------------------------
var divMarquee=document.querySelector('div.marquee');
var speed=2;
var content=document.querySelector('.marquee .content');
var ref;
var over=1;
// console.log('marquee ',divMarquee.pageX)
function marqueeScroll(){
  requestAnimationFrame(marqueeScroll);
  divMarquee.scrollLeft+=speed;
  if(divMarquee.scrollLeft>=window.innerWidth+content.offsetWidth){
    // console.log(divMarquee.scrollLeft)
    divMarquee.scrollLeft=0;
  }
  else if(divMarquee.scrollLeft<=0){
    divMarquee.scrollLeft=window.innerWidth+content.offsetWidth
  }
}
marqueeScroll()

divMarquee.addEventListener('mouseover',(e)=>{
    // console.log('over')
    speed=0;
    if(ref!=undefined){
      if(ref-5>e.clientX){
        speed=4;
      }
      else if(e.clientX>5+ref){
        speed=-4;
      }
    }  
    if(ref==undefined){
      ref=e.clientX;
    }
})
divMarquee.addEventListener('mousemove',(e)=>{
  // console.log('move',e.clientX)
  if(ref-5>e.clientX){
    speed=4;
  }
  else if(e.clientX>5+ref){
    speed=-4;
  }
  else if(ref+5>e.clientX && ref-5<e.clientX){
    speed=0;
  }
})
divMarquee.addEventListener('mouseout',()=>{
  if(over==0){
    speed=2;
    ref=undefined;
  }
  // console.log('out')
})
content.addEventListener('mouseover',()=>{

})

window.onmousemove=(e)=>{
  if(e.pageY>520){
    over=1;
  }
  else{
    over=0;
  }
}
window.onmouseout=()=>{
  speed=2
}

var tr=document.querySelectorAll('tr');
// console.log(tr[0].children[1]);
for(let i=0;i<tr.length;i++){
  let input=tr[i].children[0].children[0];
  input.addEventListener('click',()=>{
    if(input.checked==true){
      if(tr[i].children[1].children[0].type=='text' || tr[i].children[1].children[0].type=='number'){
        tr[i].children[1].children[0].style.transform='translateX(20px) scale(1)';
      }
      else{
        tr[i].children[1].children[0].style.transform='translateX(20px) scale(1)'
        tr[i].children[1].children[0].checked=true;
      }
    }
    else{
      if(tr[i].children[1].children[0].type=='text' || tr[i].children[1].children[0].type=='number'){
        tr[i].children[1].children[0].style.transform='translateX(20px) scale(0)';
      }
      else{
        tr[i].children[1].children[0].style.transform='translateX(20px) scale(0)'
        tr[i].children[1].children[0].checked=false;
      }
    }
  })
  let itag=tr[i].children[1].children[1];
  itag.addEventListener('mouseover',()=>{
    tr[i].children[1].children[2].style.display='block';
  })
  itag.addEventListener('mouseout',()=>{
    tr[i].children[1].children[2].style.display='none';
  })
  itag.addEventListener('touchstart',()=>{
    tr[i].children[1].children[2].style.display='block';
    console.log('start')
  })
  itag.addEventListener('touchend',()=>{
    tr[i].children[1].children[2].style.display='none'
    console.log('end')
  })
}

var filterBtn=document.querySelector('.filter .btn');
var options=document.querySelector('.options');

filterBtn.addEventListener('click',()=>{
  if(options.style.transform=='translate(-50%, 0%)'){
    options.style.transform='translate(-50%,-150%)'
    console.log('if')
  }
  else{
    options.style.transform='translate(-50%,0%)';
    console.log(options.style.transform)
  }
})

var clear=document.getElementById('clear-all');
clear.addEventListener('click',()=>{
  for(let i=0;i<tr.length;i++){
    tr[i].children[0].children[0].checked=false;
    if(tr[i].children[1].children[0].type=='text' || tr[i].children[1].children[0].type=='number'){
      tr[i].children[1].children[0].style.transform='scale(0)';
    }
    else{
      tr[i].children[1].children[0].style.transform='translateX(5px) scale(0)'
    }
  }
})