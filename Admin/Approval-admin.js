
const IddeleteBtns = [];
console.log('approval')
function DeleteBtn(element) {
    console.log('Clicked')
    const Id = element.id;
    const X = document.getElementById(Id);
    IddeleteBtns.push(Id);
    X.style.visibility = 'hidden';
    X.style.height = 0 + 'px';
    X.style.display = 'none';
    console.log(IdDeleteButtonds)
}
const saveButton = document.getElementById('saveButton');
saveButton.addEventListener('click',function() {
    const form = [{
        IddeleteBtns
    }]
    console.log(form)
})