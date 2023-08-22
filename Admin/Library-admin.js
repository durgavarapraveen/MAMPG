

document.addEventListener('DOMContentLoaded', function() {
    const photoInput = document.getElementById('photoInput');
    const photoDisplay = document.getElementById("photoDisplay");
    const Info = document.getElementById('Info');
    const saveButton = document.getElementById('saveButton');

    const idAims = [];
    const idProvides = [];
    const UpdateAims = [];
    const UpdateProvides = [];
    const iddels = [];

    photoInput.addEventListener('change', (event)=> {
        const selectedPhoto = event.target.files[0];
        if(selectedPhoto) {
            const reader = new FileReader;
            reader.onload = (e) => {
                photoDisplay.src = e.target.result;
            }
            reader.readAsDataURL(selectedPhoto);
        }
    })

    photoDisplay.addEventListener('click', function() {
        photoInput.click();
    })

    Info.addEventListener('blur', function() {
        const editableText = document.getElementById('Info');
        const updatedText = editableText.innerText;
    })

    const Aims = document.querySelectorAll('p');
    const Provides = document.querySelectorAll('span');
    const dels = document.querySelectorAll('i');


    dels.forEach(del => {
        del.addEventListener('click', function() {
            iddels.push(this.id);
        })
    })

    Aims.forEach(aim => {
        aim.addEventListener('blur', function() {
          idAims.push(this.id);
        })
    })

    Provides.forEach(provide => {
        provide.addEventListener('click', function() {
            idProvides.push(this.id);
        })
    })

    saveButton.addEventListener('click', function() {
        for(let i = 0; i<idAims.length; i++) {
            var editableText = document.getElementById(idAims[i]);
            var updatedText = editableText.innerText;
            UpdateAims.push(updatedText);
        }
        for(let i = 0; i<idProvides.length; i++) {
            var editableText = document.getElementById(idProvides[i]);
            var updatedText = editableText.innerText;
            UpdateProvides.push(updatedText);
        }

        console.log(idAims)
        console.log(idProvides)
        console.log(iddels)
        console.log(UpdateAims)
    console.log(UpdateProvides);        

    })



})