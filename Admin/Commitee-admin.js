
const idtextChange = [];
const ListtextChange = [];
const idRowChange = [];
const ListRowChnage = [];
const IdDeleteButtonds = [];
const addedPoints = [];

const paragraph = document.querySelectorAll('p')
const textTable = document.querySelectorAll('td');
const saveButton = document.getElementById('saveButton')
const textInput = document.querySelectorAll('.input')
const submitBtn = document.querySelectorAll('.input-btn')
const form = document.getElementsByClassName('.form')
const left = document.querySelectorAll('.left');

var committeeMembers = [];
var pointsArray = [];

function deletePoint(button) {
    var pointId = button.parentElement.id;
    var pointElement = document.getElementById(pointId);
    pointElement.remove();

    // Remove the point from the array
    pointsArray = pointsArray.filter(point => point.id !== pointId);
}

function addPoint(event) {
    event.preventDefault();

    var newPointText = document.getElementById('newPointInput').value;

    if (newPointText.trim() !== '') {
        var pointsContainer = document.getElementById('pointsContainer');
        var newPointId = 'cac-' + (pointsArray.length + 1);

        var pointRow = document.createElement('div');
        pointRow.className = 'point-row';
        pointRow.id = newPointId;

        var pointText = document.createElement('p');
        pointText.className = 'point-text';
        pointText.contentEditable = true;
        pointText.textContent = newPointText;

        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn-icon';
        deleteButton.onclick = function () { deletePoint(this); };
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

        pointRow.appendChild(pointText);
        pointRow.appendChild(deleteButton);

        pointsContainer.appendChild(pointRow);

        // Add the point to the array
        pointsArray.push({ id: newPointId, text: newPointText });

        document.getElementById('newPointInput').value = ''; // Clear the input field after adding the point
    }
}

function displayPoints() {
    var pointsContainer = document.getElementById('pointsContainer');
    pointsContainer.innerHTML = ''; // Clear previous content

    pointsArray.forEach(function (point) {
        var pointRow = document.createElement('div');
        pointRow.className = 'point-row';
        pointRow.id = point.id;

        var pointText = document.createElement('p');
        pointText.className = 'point-text';
        pointText.contentEditable = true;
        pointText.textContent = point.text;

        var deleteButton = document.createElement('button');
        deleteButton.className = 'btn-icon';
        deleteButton.onclick = function () { deletePoint(this); };
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

        pointRow.appendChild(pointText);
        pointRow.appendChild(deleteButton);

        pointsContainer.appendChild(pointRow);
    });
}

// Initial display of points
displayPoints();

function addCommitteeMember() {
    var sno = document.getElementById('sno').value;
    var name = document.getElementById('name').value;
    var designation = document.getElementById('designation').value;
    var nature = document.getElementById('nature').value;

    var newMember = {
        sno: sno,
        name: name,
        designation: designation,
        nature: nature
    };

    committeeMembers.push(newMember);

    console.log(committeeMembers);
    document.getElementById('sno').value = '';
    document.getElementById('name').value = '';
    document.getElementById('designation').value = '';
    document.getElementById('nature').value = '';
    updateTable()
}


function updateTable() {
    var tableBody = document.getElementById('committeeTable').getElementsByTagName('tbody')[0];

    if (!tableBody) {
        tableBody = document.createElement('tbody');
        document.getElementById('committeeTable').appendChild(tableBody);
    }

    tableBody.innerHTML = '';

    committeeMembers.forEach(function (member, index) {
        var trElement = document.createElement('tr');
        trElement.innerHTML = '<td>' + member.sno + '</td>' +
            '<td>' + member.name + '</td>' +
            '<td>' + member.designation + '</td>' +
            '<td>' + member.nature + '</td>' +
            '<td><button onclick="deleteMember(' + index + ')">Delete</button></td>';
        tableBody.appendChild(trElement);
    });
    console.log(committeeMembers)
}

function deleteMember(index) {
    committeeMembers.splice(index, 1);
    updateTable();
}



updateTable()



for (var i = 0; i < form.length; i++) {
    form[i].addEventListener('click', function (event) {
        event.preventDefault();
    });
}

textInput.forEach((text, index) => {
    text.addEventListener('click', function () {
        const lefts = left[index]
        const input = this.previosElementSibling;
        const point = input.value;
        if (point !== '') {
            const listItem = document.createElement('p');
            listItem.innerHTML = `${point} <button  id="cac-1" onclick="DeleteBtn(this)" class="btn-icon"><i class="fa-solid fa-trash"></i></button>`;
            addedPoints.push(listItem);
            lefts.appendChild(listItem);
        }
        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            pointList.removeChild(listItem);
            addedPoints.splice(addedPoints.indexOf(listItem), 1);
        });
        input.value = '';
    })
})


paragraph.forEach((text) => {
    text.addEventListener('blur', function () {
        idtextChange.push(this.id);
        var editableText = document.getElementById(this.id).innerText;
        ListtextChange.push(editableText);
        console.log(ListtextChange);
        console.log(idtextChange);
    })
})

textTable.forEach((text) => {
    text.addEventListener('blur', function () {
        idRowChange.push(this.id)
        console.log(idRowChange)
        var editableRow = document.getElementById(this.id);
        var arialabel = editableRow.getAttribute('sno')
        console.log(arialabel);
        ListRowChnage.push(editableRow);
        console.log(ListRowChnage);
    })

})


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


saveButton.addEventListener('click', function () {
    const form = [{
        idRowChange,
        ListRowChnage,
        idtextChange,
        ListtextChange,
        IdDeleteButtonds,
        committeeMembers,
        pointsArray
    }]
    console.log(form)
}) 