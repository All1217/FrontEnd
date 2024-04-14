var theOrder = 0;
    let checkboxes = [{
        id: "card1",
        selected: false,
        order: 0
    },
    {
        id: "card2",
        selected: false,
        order: 0
    },
    {
        id: "card3",
        selected: false,
        order: 0
    },
    {
        id: "card4",
        selected: false,
        order: 0
    },
    {
        id: "card5",
        selected: false,
        order: 0
    },
    {
        id: "card6",
        selected: false,
        order: 0
    },
    {
        id: "card7",
        selected: false,
        order: 0
    },
    {
        id: "card8",
        selected: false,
        order: 0
    },
    {
        id: "card9",
        selected: false,
        order: 0
    },
    ];

    var isMoved = false;
    var text1 = "材料选择：五花肉，青蒜、葱、姜、蒜、干红辣椒、花椒、豆瓣酱、糖、油。<br><br>首先,将带皮五花肉冷水下锅加入葱段、姜片，花椒7、8粒，黄酒适量煮开。撇净浮沫，煮至八成熟，取出自然冷却（筷子可插入即可）。将肉切成薄片，姜、蒜切片，葱切成斜段。<br><br>然后，将青蒜的白色部分先用刀拍一下，然后全部斜切成段备用。炒锅上火，加很少的油煸香辣椒、花椒。下入肉片煸炒，至肉片颜色变透明，边缘略微卷起。";
    var text2 = "最后，将肉拨到锅一边，下入豆瓣酱（可以先剁细）炒出红油。适当的加入少许酱油或甜面酱调色，与肉片一起翻炒均匀。下入青蒜，点少许料酒，糖调好味道即可出锅。<br><br>制作要诀：1、选肉要精：要当天宰杀的鲜猪肉，肥四后腿二刀，瘦六宽三指，太肥则腻，太瘦则焦，太宽太窄都难成型。<br><br>2、煮肉要调味：清水煮肉，难出肉香，因此，水滚开以后，要先放入生姜（用刀拍开）、大葱节、大蒜、花椒吊汤，等汤气香浓，再放入洗净的猪肉，六成熟就捞起备用，不能煮得太软。";
    var text3 = "3、切肉要巧：很多人等肉冷了再切，肥瘦易断，热的时候又烫手，下刀难以均匀，懂行的厨师，把捞起的肉放在冷水里浸一浸，趁外冷内热时下刀，如果有冰箱，可以把刚煮好的肉放到急冻室里两三分钟，这就更好切了。<br><br>4、配料要正当：豆瓣一定要正宗的郫县豆瓣，用刀剁细，酱油要浓稠可挂瓶壁。<br><br>5、煎熬要拿准火候：掌握火候是回锅肉的关键。用中火，下肉片后，即下剁细的郫县豆瓣，混合熬炒，使豆瓣特有的色泽和味道深入肉中。";


    function setText() {
        var description = document.getElementById('textBox-des')
        description.innerHTML = text1;
    }

    function setTextOfStep(number) {
        var description = document.getElementById('textBox-des')
        if (number === 1) {
            description.innerHTML = text1
        } else if (number === 2) {
            description.innerHTML = text2
        } else {
            description.innerHTML = text3
        };
    }

    function bind() {
        var dishBox = document.getElementById('back-to')
        dishBox.onclick = function () {
            window.location.href = '../views/test10.html'
        }
    }

    function goTo() {
        window.location.href = '../views/dishDisplay0.html'
    }

    function moveTextBox() {
        var target = document.getElementsByClassName('textBox')[0]

        if (!isMoved) {
            // 如果矩形尚未移动，则执行向右滑动的动画
            target.style.right = -800 + 'px';
            isMoved = true;
        } else {
            // 如果矩形已经移动，则将其移回初始位置
            target.style.right = '0';
            isMoved = false;
        }
        initialize()
    }

    function toggleCheckbox(index) {
        if (checkboxes[index].selected) {
            theOrder = theOrder - 1
            // 如果已选中，则……
            document.getElementById(checkboxes[index].id).style.border = '3px solid gray';
            document.getElementById(checkboxes[index].id).classList.remove('actived');
            //记录选择的顺序
            checkboxes[index].order = 0;
            checkboxes[index].selected = false
        } else {
            theOrder = theOrder + 1
            // 如果未选中，则……
            document.getElementById(checkboxes[index].id).style.border = '4px solid #4d85ff';
            document.getElementById(checkboxes[index].id).classList.add('actived');
            checkboxes[index].order = theOrder;
            checkboxes[index].selected = true
        }
        // console.log(checkboxes);
    }

    function getSelectedOptions() {
        var result = document.getElementById('result')
        var selectedOptionsList = [];
        for (let i = 0; i < 9; i++) {
            if (checkboxes[i].selected) {
                selectedOptionsList.push(checkboxes[i].order);
            }
        }
        if (selectedOptionsList.join(", ") === '1, 3, 9, 8, 4, 5, 7, 6, 2') {
            var myModal = new bootstrap.Modal(document.getElementById("identifier"));
            result.innerHTML = '回答正确！';
            myModal.toggle();
        } else {
            var myModal = new bootstrap.Modal(document.getElementById("identifier"));
            result.innerHTML = '回答错误！';
            myModal.toggle();
        }  
        initialize()
    }

    function initialize() {
        for (let index = 0; index < 9; index++) {
            checkboxes[index].selected = false
            checkboxes[index].order = 0
            theOrder = 0
            document.getElementById(checkboxes[index].id).style.border = '3px solid gray';
            document.getElementById(checkboxes[index].id).classList.remove('actived');
        }
    }