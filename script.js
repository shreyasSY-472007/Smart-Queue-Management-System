let queue=[];

function addPerson(){

let input=document.getElementById("personID");
let id=input.value;

if(id && queue.length<10){

queue.push({
id:id,
wait:0
});

input.value="";   // input clear

display();

}

}

function removePerson(){

if(queue.length>0){

queue.shift();
display();

}

}

function tick(){

for(let i=0;i<queue.length;i++){

queue[i].wait++;

}

display();

}

setInterval(tick,1000);

function display(){

let container=document.getElementById("queueContainer");
container.innerHTML="";

let total=queue.length;
let sum=0;
let longest=0;

for(let i=0;i<queue.length;i++){

let box=document.createElement("div");
box.className="box";

box.innerHTML=
"👤 "+queue[i].id+
"<br>⏱ "+queue[i].wait+"s"+
"<br>📍 Pos "+(i+1);

container.appendChild(box);

sum+=queue[i].wait;

if(queue[i].wait>longest){
longest=queue[i].wait;
}

}

document.getElementById("total").innerText=total;
document.getElementById("avg").innerText= total?Math.floor(sum/total):0;
document.getElementById("long").innerText=longest;

}
