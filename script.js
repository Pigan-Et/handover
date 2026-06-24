// ======================
// 最后工作日显示
// ======================

document.getElementById("target-date-str").innerText = leaveDate;



// ======================
// 倒计时
// ======================

function update(){


    const diff = new Date(
        leaveDate + " 23:59:59"
    ) - new Date();



    // 已到离职日

    if(diff <= 0){

        document.getElementById("timer").innerHTML = "";

        document.getElementById("celebrate").innerHTML =
        "🎉 已顺利从本公司毕业！<br>祝大家前程似锦！";


        return;

    }



    const days = Math.floor(
        diff / 86400000
    );


    const hours = Math.floor(
        diff % 86400000 / 3600000
    );


    const minutes = Math.floor(
        diff % 3600000 / 60000
    );


    const seconds = Math.floor(
        diff % 60000 / 1000
    );



    document.getElementById("timer").innerHTML =
    `${days} 天 ${hours} 时 ${minutes} 分 ${seconds} 秒`;

}



setInterval(update,1000);

update();




// ======================
// 项目交接表
// ======================


const taskList = document.getElementById("task-list");



if(typeof tasks !== "undefined" && tasks.length > 0){


    tasks.forEach(item=>{


        let noteContent = item.note || "-";



        // ======================
        // 自动识别任意位置URL
        // ======================

        const urlRegex = /(https?:\/\/[^\s\)]+)/;



        if(urlRegex.test(noteContent)){


            const url = noteContent.match(urlRegex)[0];


            noteContent = noteContent.replace(
                url,

                `
                <a 
                class="doc-link"
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
            ${item.project}
            </td>



            <td>
            ${item.owner}
            </td>




            <td
            class="copy-email"
            data-email="${item.email}">


            ${item.email}


            </td>




            <td>

            ${noteContent}

            </td>



        </tr>


        `;



    });



}



// ======================
// 邮箱点击复制
// ======================


document
.querySelectorAll(".copy-email")
.forEach(cell=>{


    cell.addEventListener(
        "click",
        function(){


            const email = this.dataset.email;



            navigator.clipboard.writeText(email)


            .then(()=>{


                this.innerHTML =
                "✅ 已复制";


                setTimeout(()=>{


                    this.innerHTML = email;


                },1200);



            })



            .catch(()=>{


                alert(
                "复制失败，请手动复制"
                );


            });



        }
    );


});
