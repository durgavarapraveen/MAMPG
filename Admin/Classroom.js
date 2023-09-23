const idListText = [];
const idListImages = [];
const ListTextChange = [];
const ListImageChange = [];
const IdDeleteButtonds = [];

const text = document.querySelectorAll('p')
const clickableImages = document.querySelectorAll('img');
const photoInput = document.getElementById('photoInput');

clickableImages.forEach((image) => {
    image.addEventListener('click', function () {
        console.log('clicked')
        console.log(this.id);
        idListImages.push(this.id);
        photoInput.dataset.selectedImageId = this.id;
        photoInput.click();
    });
});

photoInput.addEventListener('change', (event) => {
    const selectedPhoto = event.target.files[0];
    const selectedImageId = photoInput.dataset.selectedImageId;
    const displayElement = document.getElementById(selectedImageId);
    ListImageChange.push(selectedPhoto);

    if (selectedPhoto && displayElement) {
        const reader = new FileReader();
        reader.onload = (e) => {
            displayElement.src = e.target.result;
        };
        reader.readAsDataURL(selectedPhoto);
    }
    console.log(ListImageChange)
    console.log(idListImages)
});

text.forEach(para => {
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
