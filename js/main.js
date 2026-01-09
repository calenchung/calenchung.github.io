

// let contone = document.getElementById('contone');
// document.getElementById('myButton').onclick = function() {
//   contone.classList.toggle('fade');
// }

function showMission() {
  let contone = document.getElementById('contone');
  contone.classList.add('fade');
  document.getElementById('contone').style.zIndex='100';
  document.getElementById('conttwo').style.zIndex='0';
  document.getElementById('contthree').style.zIndex='0';
  document.getElementById('contone').style.opacity='100';
  document.getElementById('logo-pages').style.display='block';
  document.getElementById('logo').style.display='none';
  var elms3 = document.querySelectorAll("[id='whiteLayer3']");
  document.querySelectorAll("[id='whiteLayer3']");
  for(var i = 0; i < elms3.length; i++)
    elms3[i].classList.add('fade');
  var elms = document.querySelectorAll("[id='whiteLayer']");
  document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
    elms[i].classList.remove('fade');
  var elms2 = document.querySelectorAll("[id='whiteLayer2']");
  document.querySelectorAll("[id='whiteLayer2']");
  for(var i = 0; i < elms2.length; i++)
    elms2[i].classList.remove('fade');
  }

function showTeam() {
  let conttwo = document.getElementById('conttwo');
  conttwo.classList.add('fade2');
  document.getElementById('contone').style.zIndex='0';
  document.getElementById('conttwo').style.zIndex='100';
  document.getElementById('contthree').style.zIndex='0';
  document.getElementById('conttwo').style.opacity='100';
  document.getElementById('logo-pages').style.display='block';
  document.getElementById('logo').style.display='none';
  var elms2 = document.querySelectorAll("[id='whiteLayer2']");
  document.querySelectorAll("[id='whiteLayer2']");
  for(var i = 0; i < elms2.length; i++)
    elms2[i].classList.add('fade');
  var elms = document.querySelectorAll("[id='whiteLayer']");
  document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
    elms[i].classList.remove('fade');
  var elms3 = document.querySelectorAll("[id='whiteLayer3']");
  document.querySelectorAll("[id='whiteLayer3']");
  for(var i = 0; i < elms3.length; i++)
    elms3[i].classList.remove('fade');
  }

function showContact() {
  let contthree = document.getElementById('contthree');
  contthree.classList.add('fade3');
  document.getElementById('contone').style.zIndex='0';
  document.getElementById('conttwo').style.zIndex='0';
  document.getElementById('contthree').style.zIndex='100';
  document.getElementById('contthree').style.opacity='100';
  document.getElementById('logo-pages').style.display='block';
  document.getElementById('logo').style.display='none';
  var elms = document.querySelectorAll("[id='whiteLayer']");
  document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
    elms[i].classList.add('fade');
  var elms2 = document.querySelectorAll("[id='whiteLayer2']");
  document.querySelectorAll("[id='whiteLayer2']");
  for(var i = 0; i < elms2.length; i++)
    elms2[i].classList.remove('fade');
  var elms3 = document.querySelectorAll("[id='whiteLayer3']");
  document.querySelectorAll("[id='whiteLayer3']");
  for(var i = 0; i < elms3.length; i++)
    elms3[i].classList.remove('fade');
}

function home() {
  document.getElementById('contone').style.opacity='0';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('logo-pages').style.display='none';
  document.getElementById('logo').style.display='block';
  var elms = document.querySelectorAll("[id='whiteLayer']");
  for(var i = 0; i < elms.length; i++)
  elms[i].classList.remove('fade');
  var elms2 = document.querySelectorAll("[id='whiteLayer2']");
  for(var i = 0; i < elms2.length; i++)
  elms2[i].classList.remove('fade');
  var elms3 = document.querySelectorAll("[id='whiteLayer3']");
  for(var i = 0; i < elms3.length; i++)
  elms3[i].classList.remove('fade');
  }

function homeMob() {
  document.getElementById('contone').style.display='none';
  document.getElementById('contone').style.opacity='0';
  document.getElementById('pone').style.display='none';
  document.getElementById('conttwo').style.display='none';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('ptwo').style.display='none';
  document.getElementById('contthree').style.display='none';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('pthree').style.display='none';
}

function contentM() {
  document.getElementById('contone').style.display='block';
  document.getElementById('contone').style.opacity='1';
  document.getElementById('pone').style.display='block';
  document.getElementById('conttwo').style.display='none';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('ptwo').style.display='none';
  document.getElementById('contthree').style.display='none';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('pthree').style.display='none';
  }

function contentT() {
  document.getElementById('contone').style.display='none';
  document.getElementById('contone').style.opacity='0';
  document.getElementById('pone').style.display='none';
  document.getElementById('conttwo').style.display='block';
  document.getElementById('conttwo').style.opacity='1';
  document.getElementById('ptwo').style.display='block';
  document.getElementById('contthree').style.display='none';
  document.getElementById('contthree').style.opacity='0';
  document.getElementById('pthree').style.display='none';
  }

function contentC() {
  document.getElementById('contone').style.display='none';
  document.getElementById('contone').style.opacity='0';
  document.getElementById('pone').style.display='none';
  document.getElementById('conttwo').style.display='none';
  document.getElementById('conttwo').style.opacity='0';
  document.getElementById('ptwo').style.display='none';
  document.getElementById('contthree').style.display='block';
  document.getElementById('contthree').style.opacity='1';
  document.getElementById('pthree').style.display='block';
  }


  function myFunction(mobile) {
    if (mobile.matches) { // If media query matches
      document.getElementById('logo').style.display='none';
      document.getElementById('logo-pages').style.display='none';
      document.getElementById('contone').style.display='none';
      document.getElementById('conttwo').style.display='none';
      document.getElementById('contthree').style.display='none';
      document.getElementById('pone').style.display='none';
      document.getElementById('ptwo').style.display='none';
      document.getElementById('pthree').style.display='none';
    } else {
      document.getElementById('logo').style.display='block';
      document.getElementById('logo').style.display='block';
      document.getElementById('contone').style.display='block';
      document.getElementById('conttwo').style.display='block';
      document.getElementById('contthree').style.display='block';
      document.getElementById('pone').style.display='block';
      document.getElementById('ptwo').style.display='block';
      document.getElementById('pthree').style.display='block';
    }
  }


  var mobile = window.matchMedia("(max-width: 750px)")
  myFunction(mobile)
  mobile.addListener(myFunction)
