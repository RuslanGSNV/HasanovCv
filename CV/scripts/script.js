let display1 = document.querySelector(".display_home");
let display2 = document.querySelector(".display_edu");
let display3 = document.querySelector(".display_exp");
let display4 = document.querySelector(".display_skills");
let display5 = document.querySelector(".display_cont");

let contentHome = document.querySelector(".Home");
let contentEducation = document.querySelector(".Education");
let contentExperiance = document.querySelector(".Experiance");
let contentSkills = document.querySelector(".Skills");
let contentContacts = document.querySelector(".Contacts");

document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('display_home')){
    contentHome.style.transform = "translateX(0%)";
    contentEducation.style.transform = "translateX(-200%)";
    contentExperiance.style.transform = "translateX(-200%)";
    contentSkills.style.transform = "translateX(-200%)";
    contentContacts.style.transform = "translateX(-200%)";
  
    display1.style.border = "2px solid white";
    display2.style.border = "none";
    display3.style.border = "none";
    display4.style.border = "none";
    display5.style.border = "none";
  }

  if (event.target.classList.contains('display_edu')){
    contentHome.style.transform = "translateX(-200%)";
    contentEducation.style.transform = "translateX(0%)";
    contentExperiance.style.transform = "translateX(-200%)";
    contentSkills.style.transform = "translateX(-200%)";
    contentContacts.style.transform = "translateX(-200%)";

    display1.style.border = "none";
    display2.style.border = "2px solid white";
    display3.style.border = "none";
    display4.style.border = "none";
    display5.style.border = "none";
  }

  if (event.target.classList.contains('display_exp')){
    contentHome.style.transform = "translateX(-200%)";
    contentEducation.style.transform = "translateX(-200%)";
    contentExperiance.style.transform = "translateX(0%)";
    contentSkills.style.transform = "translateX(-200%)";
    contentContacts.style.transform = "translateX(-200%)";
  
    display1.style.border = "none";
    display2.style.border = "none";
    display3.style.border = "2px solid white";
    display4.style.border = "none";
    display5.style.border = "none";
  }

  if (event.target.classList.contains('display_skills')){
    contentHome.style.transform = "translateX(-200%)";
    contentEducation.style.transform = "translateX(-200%)";
    contentExperiance.style.transform = "translateX(-200%)";
    contentSkills.style.transform = "translateX(0%)";
    contentContacts.style.transform = "translateX(-200%)";
  
    display1.style.border = "none";
    display2.style.border = "none";
    display3.style.border = "none";
    display4.style.border = "2px solid white";
    display5.style.border = "none";
  }

  if (event.target.classList.contains('display_cont')){
    contentHome.style.transform = "translateX(-200%)";
    contentEducation.style.transform = "translateX(-200%)";
    contentExperiance.style.transform = "translateX(-200%)";
    contentSkills.style.transform = "translateX(-200%)";
    contentContacts.style.transform = "translateX(0%)";
  
    display1.style.border = "none";
    display2.style.border = "none";
    display3.style.border = "none";
    display4.style.border = "none";
    display5.style.border = "2px solid white";
  }
})

VANTA.NET({
  el: "body",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x2d2d2d,
  backgroundColor: 0x0,
});
