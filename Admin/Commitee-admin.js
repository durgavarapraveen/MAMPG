
const idtextChange = [];
const ListtextChange = [];
const idRowChange = [];
const ListRowChnage = [];
const IdDeleteButtonds = [];

const paragraph = document.querySelectorAll('p')
const textTable = document.querySelectorAll('td');
const saveButton = document.getElementById('saveButton')


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