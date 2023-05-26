const inputbtn = document.getElementById("btn");
const inputel = document.getElementById("input-id");
const listContent = document.getElementById("listFun");
const deleteUl= document.getElementById("btn2");
const saveUl=document.getElementById("save");
let track = [];
// let displayTrack=[];
const validation= JSON.parse(localStorage.getItem("track"));
if(validation){
  track=validation
  fun(track);
}
inputbtn.addEventListener("click", function () {
  track.push(inputel.value)
  inputel.value = "";
  localStorage.setItem("track",JSON.stringify(track));
  // let ref=JSON.parse(localStorage.getItem("track"));
  // displayTrack.push(ref);
  
  fun(track);
});
deleteUl.addEventListener("dblclick",function(){
  localStorage.clear();
  track=[];
  fun(track);
})
saveUl.addEventListener("click",function(){
  chrome.tabs.query({active:true,currentWindow:true},function(tabs){
    track.push(tabs[0].url);
    localStorage.setItem("track",JSON.stringify(track));
    fun(track);
  })
})
function fun(trackinfo) {
  let lists = "";
  for (var i = 0; i < trackinfo.length; i++) {
    // lists+="<li><a target='_blank'href='"+track[i]+"'>"+ track[i]+"</a></li>"
    lists += `<li>
                 <a target='_blank' style='color:green' href='${trackinfo[i]}'>${trackinfo[i]}</a>
                
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
