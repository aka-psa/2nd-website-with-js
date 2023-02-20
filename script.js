
//produces a hover effect
function bgcolor1(element){
    element.style.backgroundColor = "pink";
    element.style.boxShadow="3px 3px 6px rgb(0,0,0,0.4)";
    element.style.transition="all 0.8s"
    element.style.transitionTimingFunction="linear";
}

function bgcolor(element){
    element.style.backgroundColor = "lightblue";
    element.style.boxShadow="none";
}

// function transition(element){
//     element.style.transition="width 2s";
//     element.style.backgroundColor="lightpink";
//     element.style.color="white";
//     element.style.transitionTimingFunction="linear";
//     element.style.borderRadius="8px";
//     element.style.textdecoration="none";
// }

// function normalize(element){
//     element.style.backgroundcolor="lightblue";
//     element.style.color="white";
// }

// function delay(){
//     document.getElementsByClassName("sections").classList.add("secti");
// }

// setTimeout(delay,3000);

//enlarges the logo when hovered
var logo=document.getElementsByClassName("logo")[0];
logo.addEventListener("mouseover",scale);
logo.addEventListener("mouseout",scale1);

function scale(){
    logo.classList.add("logo1");
}

function scale1(){
    logo.classList.remove("logo1");
}