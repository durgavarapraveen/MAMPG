
const idtextChange = [];
const ListtextChange = [];
const idRowChange = [];
const ListRowChnage = [];
const IdDeleteButtonds = [];
const addedPoints = [];

const paragraph = document.querySelectorAll('p')
const textTable = document.querySelectorAll('td');
const saveButton = document.getElementById('saveButton')
const textInput = document.querySelectorAll('.input')
const submitBtn = document.querySelectorAll('.input-btn')
const form = document.getElementsByClassName('.form')
const left = document.querySelectorAll('.left');

for (var i = 0; i < form.length; i++) {
    form[i].addEventListener('click', function(event) {
      event.preventDefault();
    });
}

textInput.forEach((text, index) => {
    text.addEventListener('click', function() {
        const lefts = left[index]
        const input = this.previosElementSibling;
        const point = input.value;
        if(point!=='') {
            const listItem = document.createElement('p');
            listItem.innerHTML = `${point} <button  id="cac-1" onclick="DeleteBtn(this)" class="btn-icon"><i class="fa-solid fa-trash"></i></button>`;
            addedPoints.push(listItem);
            lefts.appendChild(listItem);
        }
        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function() {
                    // Remove the clicked list item and remove it from the array
        pointList.removeChild(listItem);
            addedPoints.splice(addedPoints.indexOf(listItem), 1);
        });

                // Clear the text area
        input.value = '';
    })
})


paragraph.forEach((text) => {
    text.addEventListener('blur', function() {
        idtextChange.push(this.id);
        var editableText = document.getElementById(this.id).innerText;
        ListtextChange.push(editableText);
        console.log(ListtextChange);
        console.log(idtextChange);
    })
})

textTable.forEach((text) => {
    text.addEventListener('blur', function() {
        idRowChange.push(this.id)
        console.log(idRowChange)
        var editableRow = document.getElementById(this.id);
        var arialabel = editableRow.getAttribute('sno')
        console.log(arialabel);
        ListRowChnage.push(editableRow);
        console.log(ListRowChnage);
    })

})


function DeleteBtn(element) {
    console.log('Clicked')
    const Id = element.id;
    const X = document.getElementById(Id);
    IdDeleteButtonds.push(Id);
    X.style.visibility = 'hidden';
    X.style.height = 0 + 'px';
    X.style.display = 'none';
    console.log(IdDeleteButtonds)
}


saveButton.addEventListener('click', function() {
    const form = [{
        idRowChange,
        ListRowChnage,
        idtextChange,
        ListtextChange,
        IdDeleteButtonds
    }]
    console.log(form)
}) 