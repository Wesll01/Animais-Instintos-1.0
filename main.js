function initTabNav(){

  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent li');
  tabContent[0].classList.add('ativo');
  
  if(tabContent.length && tabMenu.length){
  
  function activeTab(index){
    tabContent.forEach((li)=>{
      li.classList.remove('ativo');
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
  if(accordionList.length ){
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
  
  
 
    

    function initNav(){
    const navMenu = document.querySelectorAll('.navmenu li');
    
    const navContent = document.querySelectorAll('section');
    navContent[0].classList.add('ativo');
    
    if(navContent.length && navMenu.length){
    
    function activTab(index){
      navContent.forEach((section)=>{
       section.classList.remove('ativo');
      });
      navContent[index].classList.add('ativo');
    
    }
    navMenu.forEach((itemMenu,index)=>{
      itemMenu.addEventListener('click',()=>{
    
      activTab(index);
      });
    
    });
    }
    }
    
    initNav();

    console.log(navContent);