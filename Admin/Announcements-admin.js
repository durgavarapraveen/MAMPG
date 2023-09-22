
const idListText = [];
const ListTextChange = [];
const IdDeleteButtonds = [];
console.log('admin')
const paragraph = document.querySelectorAll('p')

paragraph.forEach(para => {
    console.log('Entered paragraph');
    para.addEventListener('blur', function() {
        idListText.push(this.id);
        var editableText = document.getElementById(this.id);
        ListTextChange.push(editableText.innerText)
    })
})

function DeleteBtn(element) {
    console.log('Clicked')
    const Id = element.id;
    const X = document.getElementById(Id);
    IdDeleteButtonds.push(Id);
    X.style.display = 'none';
}

saveButton.addEventListener('click',function() {
    const form = [{
        idListText,
        ListTextChange,
    }]
    console.log(form)
})