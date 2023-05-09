//-----TOGGLE HEADER VISIBILITY ON SCROLL----

let nav = document.querySelector(".header__navigation");
   
const navHeight = 70;
let lastScrollY = 0;
const delta = 10;

function scrolled() {
  let sy = window.scrollY;
  if (Math.abs(lastScrollY - sy) > delta) {
    if (sy > lastScrollY && sy > navHeight) {
      nav.classList.add("hide_navigation");
    } 
    else if (sy < lastScrollY) {
    nav.classList.remove("hide_navigation");  
    }
   lastScrollY = sy ;
  }
}


let didScroll = false;
window.addEventListener("scroll", function(e){
  didScroll = true;
});

setInterval(function() {
  if (didScroll) {
    scrolled();
    didScroll = false;
   }
}, 250)



//--------------TABS/CAROUSEL -----------------/

//-----tab heading-----------/
let vh = document.querySelector("#video_tab_header");
let ah = document.querySelector("#artist_tab_header");
let wh = document.querySelector("#writer_tab_header");
let mh = document.querySelector("#musician_tab_header");
let dh = document.querySelector("#developer_tab_header");
let gh = document.querySelector("#gaming_tab_header");
let ph = document.querySelector("#podcaster_tab_header");
let ch = document.querySelector("#community_tab_header"); 

//-------tab body----------/

let vb = document.querySelector("#video_tab_body");
let ab = document.querySelector("#artist_tab_body");
let wb = document.querySelector("#writer_tab_body");
let mb = document.querySelector("#musician_tab_body");
let db = document.querySelector("#developer_tab_body");
let gb = document.querySelector("#gaming_tab_body");
let pb = document.querySelector("#podcaster_tab_body");
let cb = document.querySelector("#community_tab_body");


function video_header() {
  vh.style.background = "rgb(230,230,230)";
  ah.style.background = "white";
  wh.style.background = "white";
  mh.style.background = "white";
  dh.style.background = "white";
  gh.style.background = "white";
  ph.style.background = "white";
  ch.style.background = "white";
  
  vb.style.display = "flex"
  ab.style.display = "none";
  wb.style.display = "none";
  mb.style.display = "none";
  db.style.display = "none";
  gb.style.display = "none";
  pb.style.display = "none";
  cb.style.display = "none";
   
}


function artist_header() {
  ah.style.background = "rgb(230,230,230)";
  vh.style.background = "white";
  wh.style.background = "white";
  mh.style.background = "white";
  dh.style.background = "white";
  gh.style.background = "white";
  ph.style.background = "white";
  ch.style.background = "white";
  
  ab.style.display = "flex"
  vb.style.display = "none";
  wb.style.display = "none";
  mb.style.display = "none";
  db.style.display = "none";
  gb.style.display = "none";
  pb.style.display = "none";
  cb.style.display = "none";
   
}


function writer_header() {
  wh.style.background = "rgb(230,230,230)";
  vh.style.background = "white";
  ah.style.background = "white";
  mh.style.background = "white";
  dh.style.background = "white";
  gh.style.background = "white";
  ph.style.background = "white";
  ch.style.background = "white";
  
  wb.style.display = "flex"
  vb.style.display = "none";
  ab.style.display = "none";
  mb.style.display = "none";
  db.style.display = "none";
  gb.style.display = "none";
  pb.style.display = "none";
  cb.style.display = "none";
   
}

function musician_header() {
  mh.style.background = "rgb(230,230,230)";
  vh.style.background = "white";
  wh.style.background = "white";
  ah.style.background = "white";
  dh.style.background = "white";
  gh.style.background = "white";
  ph.style.background = "white";
  ch.style.background = "white";
  
  mb.style.display = "flex"
  vb.style.display = "none";
  wb.style.display = "none";
  ab.style.display = "none";
  db.style.display = "none";
  gb.style.display = "none";
  pb.style.display = "none";
  cb.style.display = "none";
   
}

function developer_header() {
  dh.style.background = "rgb(230,230,230)";
  vh.style.background = "white";
  wh.style.background = "white";
  mh.style.background = "white";
  ah.style.background = "white";
  gh.style.background = "white";
  ph.style.background = "white";
  ch.style.background = "white";
  
  db.style.display = "flex"
  vb.style.display = "none";
  wb.style.display = "none";
  mb.style.display = "none";
  ab.style.display = "none";
  gb.style.display = "none";
  pb.style.display = "none";
  cb.style.display = "none";
   
}

function gaming_header() {
  gh.style.background = "rgb(230,230,230)";
  vh.style.background = "white";
  wh.style.background = "white";
  mh.style.background = "white";
  dh.style.background = "white";
  ah.style.background = "white";
  ph.style.background = "white";
  ch.style.background = "white";
  
  gb.style.display = "flex"
  vb.style.display = "none";
  wb.style.display = "none";
  mb.style.display = "none";
  db.style.display = "none";
  ab.style.display = "none";
  pb.style.display = "none";
  cb.style.display = "none";
   
}

function podcaster_header() {
  ph.style.background = "rgb(230,230,230)";
  vh.style.background = "white";
  wh.style.background = "white";
  mh.style.background = "white";
  dh.style.background = "white";
  gh.style.background = "white";
  ah.style.background = "white";
  ch.style.background = "white";
  
  pb.style.display = "flex"
  vb.style.display = "none";
  wb.style.display = "none";
  mb.style.display = "none";
  db.style.display = "none";
  gb.style.display = "none";
  ab.style.display = "none";
  cb.style.display = "none";
   
}

function community_header() {
  ch.style.background = "rgb(230,230,230)";
  vh.style.background = "white";
  wh.style.background = "white";
  mh.style.background = "white";
  dh.style.background = "white";
  gh.style.background = "white";
  ph.style.background = "white";
  ah.style.background = "white";
  
  cb.style.display = "flex"
  vb.style.display = "none";
  wb.style.display = "none";
  mb.style.display = "none";
  db.style.display = "none";
  gb.style.display = "none";
  pb.style.display = "none";
  ab.style.display = "none";
   
}
