var isStretch = false;

function testFunction(){
    window.open("file:///C:/Users/Morton/vscodeProjects/FrontEndTest/view/test2.html");
}

function stretchHeight() {
    var obj = document.getElementsByClassName('dishBox')[1];

    if (!isStretch) {
        // 如果矩形尚未移动，则执行向右滑动的动画
        obj.style.height = 1000 + 'px';
        isStretch = true;
    } else {
        // 如果矩形已经移动，则将其移回初始位置
        obj.style.height = 400 + 'px';
        isStretch = false;
    }
}

// function isDisplay(){
//     var hiddenContent = document.getElementById('box3');
//     if (hiddenContent.style.display === 'none') {
//         hiddenContent.style.display = 'block';
//     } else {
//         hiddenContent.style.display = 'none';
//     }
// }