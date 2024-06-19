
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop; // Cross-browser scroll position
  
    const nav = document.getElementById('navbar'); // Select element using querySelector
  
    if (scrollPosition > 10) {
     nav.style.backgroundColor = 'rgb(73, 97, 97)';
    } else {
      nav.style.backgroundColor = 'rgb(73, 97, 97)';
    }
  });
 
  let usedbikes=document.getElementById("usedbike-container");
  let sellbike=document.getElementById("sellbike");
  let buy=document.getElementById('buy');
  let sell=document.getElementById('sell');

  function showBuy(){

   buy.style.backgroundColor=' #8d7d7d';
    sell.style.backgroundColor='white';
   console.log("hello");
    
  }
  function showSell(){

   sell.style.backgroundColor=' #8d7d7d';
   buy.style.backgroundColor='white';

  }
 
  let index=0;

  function imgslider(){
    setTimeout(imgslider,4000);
    let i;
    const images=document.getElementsByClassName('img');
    for(i=0; i<images.length;i++){
      images[i].style.display='none';
    }
    index++;
    if(index>images.length){
      index=1;
    }
    images[index-1].style.display='block';
  }
imgslider();
  