let arr=JSON.parse(localStorage.getItem("tasks"))||[];

show();

function add(){

let t=document.getElementById("task").value;

if(t=="") return;

arr.push(t);

localStorage.setItem("tasks",JSON.stringify(arr));

show();

document.getElementById("task").value="";
}

function show(){

let s="";

for(let i=0;i<arr.length;i++)
s+="<li>"+arr[i]+"</li>";

document.getElementById("list").innerHTML=s;
}

let p=[
{name:"iPhone",type:"Phone"},
{name:"Samsung",type:"Phone"},
{name:"HP",type:"Laptop"}
];

filter("all");

function filter(x){

let s="";

for(let i=0;i<p.length;i++){

if(x=="all"||p[i].type==x)
s+=p[i].name+"<br>";

}

document.getElementById("products").innerHTML=s;
}