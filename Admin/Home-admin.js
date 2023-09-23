// document.addEventListener('DOMContentLoaded', function() {
    const idListText = [];
    const idListImages = [];
    const ListTextChange = [];
    const ListImageChange = [];
    const IdDeleteButtonds = [];

    const saveButton = document.getElementById('saveButton');
    const paragraph = document.querySelectorAll('p')
    const paragraphSpan = document.querySelectorAll('span')
    const btn = document.querySelectorAll('i');
    const photoInput1 = document.getElementById('photoInput1');
    const photoDisplay1 = document.getElementById('photoDisplay1');
    const photoInput2 = document.getElementById('photoInput2');
    const photoDisplay2 = document.getElementById('photoDisplay2');
    const photoInput3 = document.getElementById('photoInput3');
    const photoDisplay3 = document.getElementById('photoDisplay3');
    const photoInput4 = document.getElementById('photoInput4');
    const photoDisplay4 = document.getElementById('photoDisplay4');
    
    
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

    paragraphSpan.forEach(para => {
        console.log('Entered paragraph');
        para.addEventListener('blur', function() {
            idListText.push(this.id);
            var editableText = document.getElementById(this.id);
            ListTextChange.push(editableText.innerText)
        })
        console.log(idListText);
    })

    // Function to handle file input change events
    function handleFileInputChange(inputElement, displayElement) {
        inputElement.addEventListener('change', (event) => {
            const selectedPhoto = event.target.files[0];
            idListImages.push(displayElement);
            ListImageChange.push(selectedPhoto);
            console.log('Enter photo input');
            if (selectedPhoto) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    displayElement.src = e.target.result;
                }
                reader.readAsDataURL(selectedPhoto);
            }
            console.log(idListImages);
            console.log(ListImageChange)
        });

        displayElement.addEventListener('click', () => {
            inputElement.click();
        });
    }
    handleFileInputChange(photoInput1, photoDisplay1);
    handleFileInputChange(photoInput2, photoDisplay2);
    handleFileInputChange(photoInput3, photoDisplay3);
    handleFileInputChange(photoInput4, photoDisplay4);

// }

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

saveButton.addEventListener('click',function() {
    const form = [{
        idListImages,
        ListImageChange,
        idListText,
        ListTextChange,
        IdDeleteButtonds
    }]
    console.log(form)
})