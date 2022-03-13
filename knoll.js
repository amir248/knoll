
  console.log('pip');
function growingKnoll(){

}
function flugegeheimen(){
  let pimple_box=document.createElement('pimple_box');
  document.querySelector('article').appendChild(pimple_box);
  pimple_box.style.cssText=`
    display:flex;
    position:fixed;
    justify-content:flex-end;
    /* align-items:flex_end; */
    width:100%; // способ по всей ширине блока
    max-width:100%;
    z-index:9;
    top:270px; // и пипка на управлятется высотой отсюда
  `;
  let knoll=document.createElement('knoll');
  document.querySelector('pimple_box').appendChild(knoll);
  knoll.style.cssText=`
    display:flex;
    // position:fixed;
    justify-content:flex-start;
    align-items:flex-end;
    width:30px;
    height:100px;
    background:green;
    border-top-left-radius: 333px;
    border-bottom-left-radius:333px;
    // margin-top:110px;
    transition: all 1s ease-out;
  `;
  knoll.classList.add('bob');
  let countClick=+0;
  document.querySelector('.bob').addEventListener('click',()=>{
    countClick++;
    if(countClick==1){
      knoll.style.cssText=`
      display:flex;
      // position:fixed;
      justify-content:flex-start;
      align-items:flex-end;
      width:270px;
      max-width:100%;
      height:100px;
      background:green;
      border-top-left-radius: 333px;
      border-bottom-left-radius:333px;
      // margin-top:110px;
      transition: all 1s ease-out;
      `;
    }else if(countClick>1){
      knoll.style.cssText=`
      display:flex;
      // position:fixed;
      justify-content:flex-start;
      align-items:flex-end;
      width:30px;
      max-width:100%;
      height:100px;
      background:green;
      border-top-left-radius: 333px;
      border-bottom-left-radius:333px;
      // margin-top:110px;
      transition: all 1s ease-out;
      `;
      countClick=0;
    }
  });
}
if(window.innerWidth<700){
  console.log('<700');
  flugegeheimen();
}else if(window.innerWidth<1100){
  console.log("<1100");
  flugegeheimen();
}else{
  console.log("else");
}
let butT=false;
window.addEventListener('scroll',()=>{
  if(scrollY>=100&&butT==true){
      console.log("ooO");

  }else if(scrollY<150){
    console.log("<<<");
  }else{
    console.log("else");
  }
});
