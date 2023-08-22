


document.addEventListener('DOMContentLoaded', function() {
  const idListText = [];
  const idListImage = [];
  const UpdatedTextList = [];
  const UpdatedTextListId = [];
  const UpdatedPhotoList = [];

  const saveButton = document.getElementById('saveButton');
  const photoInput = document.getElementById('photoInput');

  const paragraph = document.querySelectorAll('p');

  const images = document.querySelectorAll('img');

  paragraph.forEach(paragraph => {
    console.log('Enter paragraph');
    paragraph.addEventListener('blur', function() {
      idListText.push(this.id);
      // console.log(this.id);
      // console.log(idListText)
    })
  })

  photoInput.addEventListener('change', (event) => {
    const selectedPhoto = event.target.files[0];
    if(selectedPhoto) {
      const reader = new FileReader;
      const photoDisplay = document.getElementById(idListImage[idListImage.length-1]);
      reader.onload = (e) => {
        photoDisplay.src = e.target.result;
      }
      UpdatedPhotoList.push(photoInput.files[0]);
      console.log(UpdatedPhotoList);
      reader.readAsDataURL(selectedPhoto);
    }
  })

  images.forEach(image => {
    console.log('Enter paragraph');
    image.addEventListener('click', function() {
      idListImage.push(this.id);
      console.log(idListImage);
      photoInput.click();
    })
  })

  saveButton.addEventListener('click', function() {
    for(let i = 0; i < idListText.length ; i++) {
      var editableText = document.getElementById(idListText[i]);
      var updatedText = editableText.innerText;
      UpdatedTextListId.push(idListText[i]);
      UpdatedTextList.push(updatedText)
    }
    // console.log(UpdatedTextList);
    // console.log(UpdatedTextListId);

    
  })

})
