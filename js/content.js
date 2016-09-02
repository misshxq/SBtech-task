/*
    #HTML/CSS/JS TEST SPECIFICATION AND REQUIREMENTS
    
    ##YOU MUST NOT USE!!!
    - scripts you didn't write yourself
    - JS libraries and frameworks
    - CSS "frameworks"
    
    ##Page overals
    - Liquid layout
    - max content wrapper width: 1280px, min width: 800
    - content centered on the page
    - right column width: 30% of content wrapper
    - left column and right column padding 10px
    - page main title - embed font -> HelveticaInserat LT
    - Logo element should be fixed at all time at the left border of the page
    
    ##Dynamics
    - main navigation, drop down menu based on JS - don't use ready scripts
    - right column dynamic boxes:
        click to open, click to close
        two boxes must not be open in the same time 
    
    ##Cross-browser
    - 10+
    - FF
    - Chrome
    
    ##Language menu
    - hover makes flag opaque
    - selected flag is opaque
    
    ##Misc
    - font sizes and box sizes may be in %, px or em
    
    ##Your test does NOT qualifie for review if:
    - JSON content is not loaded with AJAX
    - We need to fiddle with your code to make it work
    - JS global scope is polluted
 

     ##Table Task:
     1. Your script must be able to handle number of columns dynamically (i.e. more or less columns, depending on the JSON sent)
     2. Do not use any ready scripts and libraries 
     3. Decide on the table HTML structure by yourself
     4. All your JS code MUST be into this file
     5. Bonus: Implement sorting on the column headers
     6. Get content with XMLHTTP request from here: http://cn.sbtech.com/sb-test/content.json
*/

window.onload = function(){
  
  accordionToggler();  
  dropDownMenu();

};



function accordionToggler(){    

  var accordionBtn = document.getElementsByClassName('accordion-toggle'),
      accContainers = document.getElementsByClassName('accordion-container');
   

  accordionBtn[0].addEventListener('click', function(){
      accContainers[1].classList.remove('is-showing'); 
      accContainers[2].classList.remove('is-showing');
      accContainers[0].classList.toggle('is-showing');  
  });

  accordionBtn[1].addEventListener('click', function(){         
      accContainers[0].classList.remove('is-showing');
      accContainers[2].classList.remove('is-showing');
      accContainers[1].classList.toggle('is-showing');
  });

  accordionBtn[2].addEventListener('click', function(){
      accContainers[0].classList.remove('is-showing');
      accContainers[1].classList.remove('is-showing');
      accContainers[2].classList.toggle('is-showing');
  });

  // for ( i=0; i < accordionBtn.length; i++ ) {

  //     accordionBtn[i].addEventListener('click', function(){ 

  //         this.parentNode.childNodes[i].classList.remove('is-showing');
  //         this.nextElementSibling.classList.toggle('is-showing'); 
  //     });

  // }

}


function dropDownMenu(){

  var menuItems = document.getElementsByClassName('nav-items'),
      arrows = document.getElementsByClassName('arrow-right');

  for ( i=0; i < menuItems.length; i++ ) {

      menuItems[i].addEventListener('mouseover',hoverInFunc),
      menuItems[i].addEventListener('mouseout', hoverOutFunc);

  }

  function hoverInFunc() {
    this.firstChild.classList.add('navMenuHover');
    arrows.style.display = 'initial';
  };

  function hoverOutFunc() {
    this.firstChild.classList.remove('navMenuHover');
    this.lastChild.lastChild.style.display = 'none';
  };

}




