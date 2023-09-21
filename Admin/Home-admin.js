document.addEventListener('DOMContentLoaded', function() {
    const idListText = [];
    const idListImages = [];
    const ListTextChange = [];
    const ListImageChange = [];

    const saveButton = document.getElementById('saveButton');
    const paragraph = document.querySelectorAll('p')
    const paragraphSpan = document.querySelectorAll('span')
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

    photoInput1.addEventListener('change', (event) => {
        const selectedPhoto = event.target.files[0];
        console.log('Photo input changed');
        console.log('Selected photo:', selectedPhoto);
    
        if (selectedPhoto && idListImages.length > 0) {
            const reader = new FileReader();
            reader.onload = (e) => {
                // Update the src attribute of the last image in idListImages
                idListImages[idListImages.length - 1].src = e.target.result;
            };
            reader.readAsDataURL(selectedPhoto);
        }
    });


    photoDisplay1.addEventListener('click' , ()=> {
        photoInput1.click();
    })

    photoInput2.addEventListener('change' , (event) => {
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

    photoDisplay2.addEventListener('click' , ()=> {
        photoInput2.click();
    })

    photoInput3.addEventListener('change' , (event) => {
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

    photoDisplay3.addEventListener('click' , ()=> {
        photoInput3.click();
    })

    photoInput4.addEventListener('change' , (event) => {
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

    photoDisplay4.addEventListener('click' , ()=> {
        photoInput4.click();
    })


    saveButton.addEventListener('click', function() {

    })

})


