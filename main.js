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

