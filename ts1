// Define the user interface
interface User {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
  address: string;
}

// Define the component that renders the user table
class UsertheTables {
  private users: User[] = [];

  constructor(private readonly container: HTMLElement) {}

  // Load the user data from a JSON file
  private loadData(): Promise<void> {
    return fetch('assign.json')
      .then(response => response.json())
      .then(data => {
        this.users = data;
        this.render();
      });
  }

  // Render the user table
  private render(): void {
    const table = document.createElement('table');

    // Add the header row
    const headerRow = table.insertRow();
    headerRow.innerHTML = `
      <th>First name</th>
      <th>Middle name</th>
      <th>Last name</th>
      <th>Email</th>
      <th>Phone number</th>
      <th>Role</th>
      <th>Address</th>
      <th></th>
    `;

    // Add the data rows
    this.users.forEach(user => {
      const row = table.insertRow();

      // Add the user data cells
      row.innerHTML = `
        <td>${user.firstName}</td>
        <td>${user.middleName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
        <td>${user.phoneNumber}</td>
        <td>${user.role}</td>
        <td>${user.address}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;

      // Add event listeners for the edit and delete buttons
      const editBtn = row.querySelector('.edit-btn') as HTMLButtonElement;
      editBtn.addEventListener('click', () => this.editUser(row, user));
      const deleteBtn = row.querySelector('.delete-btn') as HTMLButtonElement;
      deleteBtn.addEventListener('click', () => this.deleteUser(row, user));
    });

    // Add the table to the container element
    this.container.innerHTML = '';
    this.container.appendChild(table);

    // Add the refresh button
    const refreshBtn = document.createElement('button');
    refreshBtn.textContent = 'Refresh data';
    refreshBtn.addEventListener('click', () => this.loadData());
    this.container.appendChild(refreshBtn);
  }

  // Edit a user row
  private editUser(row: HTMLTableRowElement, user: User): void {
    // Disable the edit button
    const editBtn = row.querySelector('.edit-btn') as HTMLButtonElement;
    editBtn.disabled = true;

    // Create the input elements
    const firstNameInput = document.createElement('input');
    firstNameInput.value = user.firstName;
    const middleNameInput = document.createElement('input');
    middleNameInput.value = user.middleName;
    const lastNameInput = document.createElement('input');
    lastNameInput.value = user.lastName;
    const emailInput = document.createElement('input');
    emailInput.value = user.email;
    const phoneNumberInput = document.createElement('input');
    phoneNumberInput.value = user.phoneNumber;
    const roleInput = document.createElement('input');
    roleInput.value = user.role;
    const addressInput = document.createElement('input');
    addressInput.value = user.address;
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    const cancelBtn = document.createElement('button');
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
    saveBtn.addEventListener('click', () => {
      user.firstName = firstNameInput.value;
      user.middleName = middleNameInput.value;
      user.lastName = lastNameInput.value;
      user.email = emailInput.value;
      user.phoneNumber = phoneNumberInput.value;
      user.role = roleInput.value;
      user.address = addressInput.value;
      this.render();
    });
    cancelBtn.addEventListener('click', () => {
      this.render();
    });
  }

  // Delete a user row
  private deleteUser(row: HTMLTableRowElement, user: User): void {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.render();
    }
  }

  // Initialize the component
  public init(): void {
    const loadBtn = document.createElement('button');
    loadBtn.textContent = 'Load data';
    loadBtn.addEventListener('click', () => this.loadData());
    this.container.appendChild(loadBtn);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('user-table-container') as HTMLElement;

  if (container) {
    const userTable = new UsertheTables(container);
    userTable.init();
  } else {
    console.error('Container element not found.');
  }
});

