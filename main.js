function onForm(){
    let formData = readFormData();
    insertData(formData);
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
    let table = document.getElementById("userList").getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.userEmail;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.userCity;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.userSalary;
    cell4.innerHTML = "<a>Edit</a><a>Delete</a>"
}