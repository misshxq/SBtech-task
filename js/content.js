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
  flagsHover();
  XMLHttPRequest();

};


function accordionToggler(){

  var accBtns = document.getElementsByClassName('accordion-toggle'),
      accContent = document.getElementsByClassName('accordion-content');

      for ( i=0; i < accBtns.length; i++ ) {        
        accBtns[i].onclick = toggleItem;
        accBtns[i].onmouseover = btnHoverToggler;
        accBtns[i].onmouseleave = btnHoverToggler;
      } 

      function toggleItem() {
        for (i=0; i < accContent.length; i++ ) {
          this.nextElementSibling.classList.toggle('hide');
          if (accContent[i] !== this.nextElementSibling) {
            accContent[i].classList.add('hide')
          }
        } 
      };

      function btnHoverToggler() {
        this.classList.toggle('accordion-toggle-Hover');
      }

}


function dropDownMenu(){

  var menuItems = document.getElementsByClassName('nav-items'),      
      gamesTab = document.getElementsByClassName('games-menu'),
      gamesSub = document.getElementById('games-submenu-list');

  for ( i=0; i < menuItems.length; i++ ) {
    menuItems[i].onmouseover = hoverInFunc;
    menuItems[i].onmouseleave = hoverOutFunc; 
  }

  gamesSub.onmouseover = function () {        
    this.previousElementSibling.classList.add('navMenuHover');
    this.previousElementSibling.lastChild.classList.remove('hide');
  }

  gamesSub.onmouseleave = function () {
    this.previousElementSibling.classList.remove('navMenuHover');
    this.previousElementSibling.lastChild.classList.add('hide');
    this.classList.add('hide');
  }

  function hoverInFunc() {
    this.classList.add('navMenuHover');
    this.lastChild.classList.remove('hide');

    if ( this.classList.contains('games-menu') ) {
      gamesSub.classList.remove('hide');
    }

  };

  function hoverOutFunc() { 
    this.classList.remove('navMenuHover');
    this.lastChild.classList.add('hide');
  };

}

function flagsHover() {

  var flags = document.getElementsByClassName('lang-items');

  for (i=0; i < flags.length; i++) {   
    flags[i].onmouseover = function () {this.style.opacity= '1'};
    flags[i].onmouseleave = function () {this.style.opacity= '0.5'}; 
    flags[i].onclick = flagToggler;
   }  

  function flagToggler() { 
    this.classList.toggle('opaque'); 
    for (i=0; i < flags.length; i++) {            
      if (flags[i] !== this) {        
        flags[i].classList.remove('opaque');
      } 
    }
  };

}

function XMLHttPRequest() {

  var xmlhttp = new XMLHttpRequest(),
      url = "http://cn.sbtech.com/sb-test/content.json";

  xmlhttp.onreadystatechange = function() {
      if ( this.readyState == 4 && this.status == 200 ) {
          jsonText(this.responseText);
      }
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();

  function jsonText(response) {
      var people = JSON.parse(response),
          tableContainer = document.getElementById('table'),
          out = "<table><tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Occupation</th><th>Hidden Field</th><th>Special Field</th>",
          i;

      for (i = 0; i < people.length; i++) {
          out += 
          "<tr><td>" + people[i]['ID'] + 
          "</td><td>" + people[i]['First Name'] +          
          "</td><td>" + people[i]['Last Name'] + 
          "</td><td>" + people[i]['Occupation'] +
          "</td><td>" + people[i]['Hidden Field'] + 
          "</td><td>" + people[i]['Special Field']          
      } 
      out += "</table>";   

      tableContainer.innerHTML = out;
    }

  }






 











