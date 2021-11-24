let selectItem = document.getElementById('item-select');
// console.log(selectItem);
let selectBtn = document.getElementById('go');
// console.log(selectBtn);
let numberSelect = document.getElementsByClassName('selectNumber');
// console.log(selectNumber);配列
let Info = document.getElementsByClassName('info');
// console.log(Info);配列
let text = document.createElement('input');

text.style.type == 'text';

text.classList.add('input');

selectBtn.addEventListener('click', function () {
    // console.log(selectItem.value);
    if (selectItem.value !== '選択') {
        if (selectItem.value == '仕事') {
            text.placeholder = '仕事頑張るぞ！'
        } else if (selectItem.value == '勉強') {
            text.placeholder = '日々勉強'
        } else if (selectItem.value == '遊び') {
            text.placeholder = '好きにまみれろ'
        } else if (selectItem.value == 'トレーニング') {
            text.placeholder = 'Just Do It !!'
        }
        Info[0].appendChild(text);
        // console.log(Info[0]);
    }
});

// テキストを区分に分けてアウトプット
let outBtn = document.getElementsByClassName('button')
// console.log(outBtn);
for (let i = 0; i < outBtn.length; i++) {
    outBtn[i].addEventListener('click', function () {
        if (text.value != '') {
            const outPutText = text.value;
            // console.log(outPutText);
            let liTag = document.createElement('li');
            // console.log(liTag);
            liTag.classList.add('list');
            liTag.textContent = outPutText;
            let ulTag = document.getElementsByClassName('todo-list');
            // console.log(ulTag[0]);

            if (selectItem.value == '仕事') {
                ulTag[0].appendChild(liTag);
            } else if (selectItem.value == '勉強') {
                ulTag[1].appendChild(liTag);
            } else if (selectItem.value == '遊び') {
                ulTag[2].appendChild(liTag);
            } else if (selectItem.value == 'トレーニング') {
                ulTag[3].appendChild(liTag);
            }
            text.value = '';


            let deleteBtn = document.createElement('div');
            // console.log(deleteBtn);
            deleteBtn.textContent = '削除';
            deleteBtn.classList.add('delete');
            liTag.appendChild(deleteBtn);
            // console.log(liTag);
            deleteBtn.addEventListener('click', function () {
                this.parentElement.remove();
            })
        }

    })
}