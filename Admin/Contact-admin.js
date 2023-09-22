
const idListText = [];
const ListTextChange = [];

const saveButton = document.getElementById('saveButton');
const paragraph = document.querySelectorAll('*')

paragraph.forEach(para => {
    console.log('Entered paragraph');
    para.addEventListener('blur', function() {
        idListText.push(this.id);
        var editableText = document.getElementById(this.id);
        ListTextChange.push(editableText.innerText)
        console.log(ListTextChange)
        console.log(idListText)
    })
    console.log(idListText);
})

saveButton.addEventListener('click',function() {
    const form = [{
        idListText,
        ListTextChange,
    }]
    console.log(form)
})