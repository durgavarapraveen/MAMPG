


document.addEventListener("DOMContentLoaded", function() {
    const editableText = document.getElementById('editableText');
    const photoInput = document.getElementById('photoInput');
    const saveButton = document.getElementById('saveButton');
    const photoDisplay = document.getElementById("photoDisplay");

    photoInput.addEventListener('change' , (event) => {
        const selectedPhoto = event.target.files[0];
        console.log('Enter photo input');
        if(selectedPhoto) {
            const reader = new FileReader();
            reader.onload = (e) => {
                photoDisplay.src = e.target.result;
            }
            reader.readAsDataURL(selectedPhoto);
        }
    }) 

    photoDisplay.addEventListener('click' , ()=> {
        photoInput.click();
    })

    saveButton.addEventListener('click', function() {
        const updateText = editableText.innerText;
        const photoFile = photoInput.files[0];
        console.log(updateText);
        console.log(photoFile)
    })


    function getCsrfToken() {
        const csrfTokenElement = document.querySelector('[name=csrfmiddlewaretoken]');
        return csrfTokenElement.ariaValueMax;
    }

});

