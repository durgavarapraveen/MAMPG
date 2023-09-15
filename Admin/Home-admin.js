document.addEventListener('DOMContentLoaded', function() {
    const idListText = [];
    const idListImages = [];
    const ListTextChange = [];
    const ListImageChange = [];

    const saveButton = document.getElementById('saveButton');

    const paragraph = document.querySelectorAll('p')
    const SpanParagraph = document.querySelectorAll('span')
    const images = document.querySelectorAll('img')
    
    paragraph.forEach(para => {
        console.log('Entered paragraph');
        para.addEventListener('blur', function() {
            idListText.push(this.id);
        })
        console.log(idListText);
    })


    saveButton.addEventListener('click', function() {

    })

})


