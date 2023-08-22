
function previewPDF() {
    const fileinput = document.getElementById('pdf-file');
    const previewcont = document.getElementById('pdf-preview');
    const file = fileinput.files[0];

    if(file) {
        console.log("Entered");
        const reader = new FileReader();
        reader.onload = function(event) {
            const pdfUrl = event.target.result;
            previewcont.innerHTML = `<embed src="${pdfUrl}" type='application/pdf' style="width: 100%; height: 600px;" />`;
        };
        reader.readAsDataURL(file);
    }
    else {
        previewcont.innerHTML = '';
    }
}