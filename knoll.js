
  console.log('pip');
function growingKnoll(){
  document.querySelector('pimple_box').remove();
// knoll.style.cssText=``;
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
    top:70px; // и пипка на управлятется высотой отсюда
  `;
  let knoll=document.createElement('knoll');
  document.querySelector('pimple_box').appendChild(knoll);
  knoll.style.cssText=`
    display:flex;
    // position:fixed;
    justify-content:flex-start;
    align-items:center;
    width:30px;
    height:100px;
    background:green;
    border-top-left-radius: 333px;
    border-bottom-left-radius:333px;
    // margin-top:110px;
    opacity:0.3;
    transition: all 1s ease-out;
  `;
  knoll.innerHTML=`❌`;

  knoll.classList.add('bob');
  let countClick=+0;
  document.querySelector('.bob').addEventListener('click',()=>{
    countClick++;
    if(countClick==1){
      knoll.style.cssText=`
      display:flex;
      // position:fixed;
      justify-content:flex-start;
      align-items:center;
      width:270px;
      max-width:100%;
      height:100px;
      background:green;
      border-top-left-radius: 333px;
      border-bottom-left-radius:333px;
      // margin-top:110px;
      opacity:1;
      transition: all 1s ease-out;
      z-index:9;
      `;
      knoll.innerHTML=`разработки pimple knoll`;
      let display=document.createElement('display');
      document.querySelector('pimple_box').appendChild(display);
      display.style.cssText=`
      display:flex;
      position:fixed;
      justify-content:center;
      align-items:center;
      width:100%;
      height:100%;
      background:rgba(0,255,0,0.3);
      flex-direction:column;
      // z-index:0;
      transition: all 1s ease-out;
      opacity:1;
      `;
      display.innerHTML=`
      <p style="background:rgba(25,0,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/rat-mAscow/'>мАсковские крысы</a></p>
      <p style="background:rgba(0,100,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/mAscow/'>мАсква</a></p>
      <p style="background:rgba(0,0,25,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/moscow-will-lose-the-war/'>москва проиграет войну</a></p>
      <p style="background:rgba(100,100,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/justification/'>оправдание войне</a></p>
      <p style="background:rgba(10,100,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/facking-moscow/'>facking-moscow</a></p>
      <p style="background:rgba(0,0,100,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/muscovite/'>мАсковщина</a></p>
      <p style="background:rgba(0,10,10,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/war-against-moscow/'>война</a></p>
      <p style="background:rgba(0,255,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/victory-over-fascist-moscow/'>Victory</a></p>
      <p style="background:rgba(255,0,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/the-prophecy-of-war-came-true/'>сбылось пророчество</a></p>
      <p style="background:rgba(100,150,0,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/fackNews/'>Fack news</a></p>
      <p style="background:rgba(10,150,70,0.3);margin:1%;border-radius:7px; text-align:center;"><a href='https://amir248.github.io/knoll/'>Пипочка knoll</a></p>
      `;
    }else if(countClick>1){
      knoll.style.cssText=`
      display:flex;
      // position:fixed;
      justify-content:flex-start;
      align-items:center;
      width:30px;
      max-width:100%;
      height:100px;
      background:green;
      border-top-left-radius: 333px;
      border-bottom-left-radius:333px;
      // margin-top:110px;
      opacity:0.3;
      transition: all 1s ease-out;
      `;
      knoll.innerHTML=`⭐`;
      document.querySelector('display').remove();
      countClick=0;
    }
  });
} // end function flugegeheimen


// if(window.innerWidth<700){
//   console.log('<700');
//   // flugegeheimen();
//
//
// }else
if(window.innerWidth<1100){
  console.log("<1100");
  // flugegeheimen();
  let butT=false;
  window.addEventListener('scroll',()=>{
    if(scrollY>=50){
        console.log("ooO");
        if(butT==false){
        flugegeheimen();
      }else{
        console.log("butT==false");
      }
      butT=true;

    }else if(scrollY<50){
      console.log("<<<");
      growingKnoll();
      butT=false;
    }else{
      console.log("else");
    }
  });
}else{
  console.log("else");
}
