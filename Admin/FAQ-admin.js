


document.addEventListener('DOMContentLoaded', function() {
    const idListQue = [];
    const idListAns = [];
    const Updatedques = [];
    const Updatedans = [];
    const idIcons = [];

    const saveButton = document.getElementById('saveButton');

    const ques = document.querySelectorAll('span');

    const icons = document.querySelectorAll('i');

    const ans = document.querySelectorAll('p');

    ques.forEach(que => {
        que.addEventListener('click', function() {
            idListQue.push(this.id);
        })
    })

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            idIcons.push(this.id);
            console.log(idIcons)
        })
    })

    ans.forEach(anss => {
        anss.addEventListener('click', function() {
            idListAns.push(this.id);
        })
    })

    saveButton.addEventListener('click', function() {
        for(let i=0; i<idListQue.length; i++) {
            var editableText = document.getElementById(idListQue[i]);
            Updatedques.push(editableText.innerText);
        }

        for(let j = 0; j<idListAns.length; j++) {
            var editableText = document.getElementById(idListAns[i]);
            Updatedans.push(editableText.innerText);
        }
        console.log(idListAns);
        console.log(idListQue);
        console.log(Updatedans);
        console.log(Updatedques);
    })


})