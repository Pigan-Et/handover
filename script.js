// 显示最后工作日
document.getElementById("target-date-str").innerText = leaveDate;


// ======================
// 倒计时
// ======================

function update(){

    let diff = new Date(leaveDate + " 23:59:59") - new Date();


    // 已到离职日
    if(diff <= 0){

        timer.innerHTML = "";

        celebrate.innerHTML = 
        "🎉 已顺利从本公司毕业！<br>祝大家前程似锦！";

        return;
    }


    let d = Math.floor(diff / 86400000);

    let h = Math.floor(
        diff % 86400000 / 3600000
    );

    let m = Math.floor(
        diff % 3600000 / 60000
    );

    let s = Math.floor(
        diff % 60000 / 1000
    );


    timer.innerHTML = 
    `${d} 天 ${h} 时 ${m} 分 ${s} 秒`;

}


setInterval(update,1000);

update();




// ======================
// 项目交接表渲染
// ======================

const taskList = document.getElementById("task-list");


tasks.forEach(x=>{


    let noteContent = x.note;


    // 自动识别备注里的链接

const urlRegex = /(https?:\/\/[^\s]+)/;


if(urlRegex.test(noteContent)){


    const url = noteContent.match(urlRegex)[0];


    noteContent = noteContent.replace(
        url,
        `
        <a class="doc-link"
        href="${url}"
        target="_blank">
        📄 查看文档
        </a>
        `
    );

}



    taskList.innerHTML += `

    <tr>

        <td>
        ${x.project}
        </td>


        <td>
        ${x.owner}
        </td>


        <td 
        class="copy-email"
        onclick="copyEmail('${x.email}')">

        ${x.email}

        </td>


        <td>
        ${noteContent}
        </td>


    </tr>

    `;


});





// ======================
// 点击邮箱复制
// ======================

function copyEmail(email){


    navigator.clipboard.writeText(email)

    .then(()=>{


        alert(
        "邮箱已复制：\n" + email
        );


    })


    .catch(()=>{


        alert(
        "复制失败，请手动复制"
        );


    });


}
