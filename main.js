var selectedRow = null;
function onForm(){
    let formData = readFormData();
    if(selectedRow == null){
        insertData(formData);
    }
    resetData();
}
function readFormData(){
    let formData = {};
    formData["userName"] = document.getElementById("userName").value;
    formData["userEmail"] = document.getElementById("userEmail").value;
    formData["userCity"] = document.getElementById("userCity").value;
    formData["userSalary"] = document.getElementById("userSalary").value;
    return formData;
}
function insertData(data){
    let table = document.getElementById("userList").getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.userEmail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.userSalary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.userCity;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML =`<button onClick ="onEdit(this)">Edit</button>
                    <button>Delete</button>`;
}
function resetData (){
    document.getElementById("userName").value = "";
    document.getElementById("userEmail").value = "";
    document.getElementById("userSalary").value = "";
    document.getElementById("userCity").value = "";
}
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("userEmail").value = selectedRow.cells[1].innerHTML;
    document.getElementById("userSalary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("userCity").value = selectedRow.cells[3].innerHTML;
}