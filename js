function promptNumber() {
  let number;
  while (true) {
    const input = prompt("Enter a number:");
    if (!isNaN(input) && input.trim() !== '') {
      number = parseInt(input);
      break;
    }
  }

  let output = `Number inputted: ${number}\n\n`;
  if (number % 2 !== 0) {
    for (let i = number; i >= 1; i--) {
      output += (i + " ").repeat(number).trim() + "\n";
    }
  } else {
    for (let i = number; i >= 1; i--) {
      output += (i + " ").repeat(i).trim() + "\n";
    }
  }
  document.getElementById("output").innerText = output;
}

let contacts = [];

function displayContacts() {
  document.getElementById("contacts").innerText = "Contacts: " + contacts.join(", ");
}

function addName() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput.value.trim();
  if (name !== "") {
    if (contacts.length === 7) {
      contacts.shift();
    }
    contacts.push(name);
    displayContacts();
    nameInput.value = "";
  }
}

function removeName() {
  if (contacts.length > 0) {
    contacts.pop();
    displayContacts();
  }
}
