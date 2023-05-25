const inputbtn = document.getElementById("btn");
const inputel = document.getElementById("input-id");
const listContent = document.getElementById("listFun");
let track = [];
let displayTrack=[];
inputbtn.addEventListener("click", function () {
  track.push(inputel.value)
  inputel.value = "";
  localStorage.setItem("track",JSON.stringify(track));
  let ref=JSON.parse(localStorage.getItem("track"));
  displayTrack.push(ref);
  console.log(displayTrack)
  fun();
});

function fun() {
  let lists = "";
  for (var i = 0; i < track.length; i++) {
    // lists+="<li><a target='_blank'href='"+track[i]+"'>"+ track[i]+"</a></li>"
    lists += `<li>
                 <a target='_blank' style='color:green' href='${track[i]}'>${track[i]}</a>
                
                </li>
                `;
  }
  listContent.innerHTML = lists;
}
// function fun(){
//     num.innerHTML="<p>button clicked</p>"
// }
// const num=document.getElementById('exam')
// num.innerHTML="<button onclick='fun()'>click me</button>"

// let arr=["red","green","blue","orange"];
// let refa=document.getElementById('ne');
// let cnt=0;
// refa.addEventListener('click',function(){
//     cnt++;
//     let f=Math.floor(Math.random()*arr.length);
//     let newColor=arr[f];
//     refa.style.backgroundColor=newColor;
//     if(cnt%3===0){
//         refa.innerHTML="changed"
//     }else{
//         refa.innerHTML="open the box"
//     }
// })
