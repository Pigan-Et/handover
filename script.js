
document.getElementById("target-date-str").innerText=leaveDate;

function update(){

let diff=new Date(leaveDate+" 23:59:59")-new Date();

if(diff<=0){
timer.innerHTML="";
celebrate.innerHTML="🎉 已顺利从本公司毕业！";
return;
}

let d=Math.floor(diff/86400000);
let h=Math.floor(diff%86400000/3600000);
let m=Math.floor(diff%3600000/60000);
let s=Math.floor(diff%60000/1000);

timer.innerHTML=`${d} 天 ${h} 时 ${m} 分 ${s} 秒`;
}

setInterval(update,1000);
update();


tasks.forEach(x=>{

document.getElementById("task-list").innerHTML+=`

<tr>
<td>${x.project}</td>
<td>${x.owner}</td>
<td>${x.email}</td>
<td>${x.note}</td>
</tr>

`;

});
