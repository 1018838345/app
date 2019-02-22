let pagers = document.querySelectorAll(".pagerBox>li");
let imags = document.querySelectorAll(".imgBox>li");
let banner = document.querySelector(".banner");
console.log(pagers);
console.log(imags);
console.log(banner);
let flag=false;
pagers.forEach(function (ele, index) {
    ele.onclick = function () {
        for (let i = 0; i < pagers.length; i++) {
            pagers[i].classList.remove("active");
            imags[i].classList.remove("active");
        }
        pagers[index].classList.add("active");
        imags[index].classList.add("active");
    }
});
let now = 0;
function move () {                                            //创建move函数
    now++;
    if (now===imags.length) {                                  //当now=imgs的长度,将now的值变为0
        now=0;
    }
    if (now===-1){
        now=imags.length-1;
    }
    for (let i=0;i<imags.length;i++) {
        imags[i].classList.remove("active");
        pagers[i].classList.remove("active");
    }
    imags[now].classList.add("active");
    pagers[now].classList.add("active");
}

let st=setInterval(move,3000);                   //按照指定的周期（以毫秒计）来调用函数或计算表达式
banner.onmouseenter=function () {                 //onmouseenter 事件在鼠标指针移动到元素上时触发。
    clearInterval(st);                           //clearInterval() 方法可取消由 setInterval() 函数设定的定时执行操作。
};                                               //clearInterval()参数必须是由 setInterval() 返回的 ID 值。
banner.onmouseleave=function () {               //onmouseleave 事件在鼠标移除元素时触发。
    if (flag) {
        return;                                 //如果flag为假则返回函数的值
    }
    st=setInterval(move,3000);                  //变量st通过setInterval方法定时3000毫秒调用move函数一次
};
