function initTabNav(){

const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo');

if(tabContent.length && tabMenu.length){

function activeTab(index){
  tabContent.forEach((section)=>{
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');

}
tabMenu.forEach((itemMenu,index)=>{
  itemMenu.addEventListener('click',()=>{

  activeTab(index);
  });

});
}
}
initTabNav();
function initAccordion(){

const accordionList = document.querySelectorAll('.js-accordion dt');
const activeClass = 'ativo';
if(accordionList.length){
accordionList[0].classList.add(activeClass);
accordionList[1].nextElementSibling.classList.add(activeClass);
function actibeAccordion(){
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
}

accordionList.forEach((item)=>{
  item.addEventListener('click',actibeAccordion);

})

}
}
initAccordion();
function initScrollSuave(){
const linksInterno = document.querySelectorAll('.js-menu a[href^="#"}');

function scrolltoSection(event){
  event.preventDefault();
  const href= event.currentTarget.getAtributte('href');
  const section = document.querySelector(href);
  section.scrollIntoView({
    behavior:'smooth',
    block:'start',
  }

  )

}
}

initScrollSuave();



  const  sections = document.querySelectorAll('.js-scroll');

  if(sections.length){

  const windowMetade = window.innerHeight*0.6;

  function animaScroll(){

   sections.forEach((section)=>{
     const sectionTop = section.getBoundingClientRect().top;
     const isSectionVisible= (sectionTop - windowMetade < 0);
     if(isSectionVisible){
       
       section.classList.add('ativo');


     }else{
       section.classList.remove('ativo');

     }
   })

  }
animaScroll();

window.addEventListener('scroll',animaScroll)

  }