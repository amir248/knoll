console.log('pip');
if(window.innerWidth<700){
  console.log('<700');
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
  width:40px;
  height:100px;
  background:green;
  border-top-left-radius: 333px;
  border-bottom-left-radius:333px;
  // margin-top:110px;
  transition: all 1s ease-out;
  `;

}else if(window.innerWidth<1100){
  console.log("<1100");
}else{
  console.log("else");
}
