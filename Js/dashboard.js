var selectedRow = null

function onFormSubmit() {
  if (validate()) {
  window.open("dashboard.html")
    var formData = readFormData();
    if (selectedRow == null)
      insertNewRecord(formData);
    else
      updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["exampleInputFirstName"] = document.getElementById("exampleInputFirstName").value;
  formData["exampleInputLastName"] = document.getElementById("exampleInputLastName").value;
  formData["exampleInputEmail1"] = document.getElementById("exampleInputEmail1").value;
  formData["exampleInputPassword"] = document.getElementById("exampleInputPassword").value;
  return formData;
}

function insertNewRecord(data) {
  var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.exampleInputFirstName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.exampleInputLastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.exampleInputEmail;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.exampleInputPassword;
  cell5 = newRow.insertCell(5);
  cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
  document.getElementById("exampleInputFirstName").value = "";
  document.getElementById("exampleInputLastName").value = "";
  document.getElementById("exampleInputEmail").value = "";
  document.getElementById("exampleInputPassword").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("exampleInputFirstName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("exampleInpuLastName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("exampleInputEmail").value = selectedRow.cells[2].innerHTML;
  document.getElementById("exampleInputPassword").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.exampleInputFirstName;
  selectedRow.cells[1].innerHTML = formData.exampleInputLastName;
  selectedRow.cells[2].innerHTML = formData.exampleInputEmail;
  selectedRow.cells[3].innerHTML = formData.exampleInputPassword;
}

function onDelete(td) {
  if (confirm('Are you sure to delete this record ?')) {
    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
  }
}
function validate() {
  isValid = true;
  if (document.getElementById("exampleInputFirstName").value == "") {
    isValid = false;
    document.getElementById("firstNameValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("firstNameValidationError").classList.contains("hide"))
      document.getElementById("firstNameValidationError").classList.add("hide");
  }
  return isValid;
}

