function initTabNav() {
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

initTabNav();/* função para as imagens onde no evento de clique do animal a descrição aparece onde ele associa a li do da imagem a li de descrição */
 
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
    
initNav(); // função para o menu onde associa a li do menu clicado a seção do animal correspondente 

console.log(navContent);
