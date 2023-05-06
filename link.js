// Define the component that renders the user table
var UsertheTables = /** @class */ (function () {
    function UsertheTables(container) {
        this.container = container;
        this.users = [];
    }
    // Load the user data from a JSON file
    UsertheTables.prototype.loadData = function () {
        var _this = this;
        return fetch('assign.json')
            .then(function (response) { return response.json(); })
            .then(function (data) {
            _this.users = data;
            _this.render();
        });
    };
    // Render the user table
    UsertheTables.prototype.render = function () {
        var _this = this;
        var table = document.createElement('table');
        // Add the header row
        var headerRow = table.insertRow();
        headerRow.innerHTML = "\n      <th>First name</th>\n      <th>Middle name</th>\n      <th>Last name</th>\n      <th>Email</th>\n      <th>Phone number</th>\n      <th>Role</th>\n      <th>Address</th>\n      <th></th>\n    ";
        // Add the data rows
        this.users.forEach(function (user) {
            var row = table.insertRow();
            // Add the user data cells
            row.innerHTML = "\n        <td>".concat(user.firstName, "</td>\n        <td>").concat(user.middleName, "</td>\n        <td>").concat(user.lastName, "</td>\n        <td>").concat(user.email, "</td>\n        <td>").concat(user.phoneNumber, "</td>\n        <td>").concat(user.role, "</td>\n        <td>").concat(user.address, "</td>\n        <td>\n          <button class=\"edit-btn\">Edit</button>\n          <button class=\"delete-btn\">Delete</button>\n        </td>\n      ");
            // Add event listeners for the edit and delete buttons
            var editBtn = row.querySelector('.edit-btn');
            editBtn.addEventListener('click', function () { return _this.editUser(row, user); });
            var deleteBtn = row.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', function () { return _this.deleteUser(row, user); });
        });
        // Add the table to the container element
        this.container.innerHTML = '';
        this.container.appendChild(table);
        // Add the refresh button
        var refreshBtn = document.createElement('button');
        refreshBtn.textContent = 'Refresh data';
        refreshBtn.addEventListener('click', function () { return _this.loadData(); });
        this.container.appendChild(refreshBtn);
    };
    // Edit a user row
    UsertheTables.prototype.editUser = function (row, user) {
        var _this = this;
        // Disable the edit button
        var editBtn = row.querySelector('.edit-btn');
        editBtn.disabled = true;
        // Create the input elements
        var firstNameInput = document.createElement('input');
        firstNameInput.value = user.firstName;
        var middleNameInput = document.createElement('input');
        middleNameInput.value = user.middleName;
        var lastNameInput = document.createElement('input');
        lastNameInput.value = user.lastName;
        var emailInput = document.createElement('input');
        emailInput.value = user.email;
        var phoneNumberInput = document.createElement('input');
        phoneNumberInput.value = user.phoneNumber;
        var roleInput = document.createElement('input');
        roleInput.value = user.role;
        var addressInput = document.createElement('input');
        addressInput.value = user.address;
        var saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        var cancelBtn = document.createElement('button');
        cancelBtn.textContent = 'Cancel';
        // Replace the user data cells with the input elements
        row.cells[0].textContent = '';
        row.cells[0].appendChild(firstNameInput);
        row.cells[1].textContent = '';
        row.cells[1].appendChild(middleNameInput);
        row.cells[2].textContent = '';
        row.cells[2].appendChild(lastNameInput);
        row.cells[3].textContent = '';
        row.cells[3].appendChild(emailInput);
        row.cells[4].textContent = '';
        row.cells[4].appendChild(phoneNumberInput);
        row.cells[5].textContent = '';
        row.cells[5].appendChild(roleInput);
        row.cells[6].textContent = '';
        row.cells[6].appendChild(addressInput);
        row.cells[7].textContent = '';
        row.cells[7].appendChild(saveBtn);
        row.cells[7].appendChild(cancelBtn);
        // Add event listeners for the save and cancel buttons
        saveBtn.addEventListener('click', function () {
            user.firstName = firstNameInput.value;
            user.middleName = middleNameInput.value;
            user.lastName = lastNameInput.value;
            user.email = emailInput.value;
            user.phoneNumber = phoneNumberInput.value;
            user.role = roleInput.value;
            user.address = addressInput.value;
            _this.render();
        });
        cancelBtn.addEventListener('click', function () {
            _this.render();
        });
    };
    // Delete a user row
    UsertheTables.prototype.deleteUser = function (row, user) {
        var index = this.users.indexOf(user);
        if (index !== -1) {
            this.users.splice(index, 1);
            this.render();
        }
    };
    // Initialize the component
    UsertheTables.prototype.init = function () {
        var _this = this;
        var loadBtn = document.createElement('button');
        loadBtn.textContent = 'Load data';
        loadBtn.addEventListener('click', function () { return _this.loadData(); });
        this.container.appendChild(loadBtn);
    };
    return UsertheTables;
}());
document.addEventListener('DOMContentLoaded', function () {
    var container = document.getElementById('user-table-container');
    if (container) {
        var userTable = new UsertheTables(container);
        userTable.init();
    }
    else {
        console.error('Container element not found.');
    }
});
