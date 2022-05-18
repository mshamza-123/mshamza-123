let leads = [];
let leadsFromlocalStorage = JSON.parse(localStorage.getItem("myLeads")); // Must convert to array from string.
let inputField = document.querySelector("#input");
let saveButton = document.getElementById("saveButton");
let deleteButton = document.getElementById("deleteButton");
let saveTabButton = document.querySelector("#saveTabButton");
let unorderedList = document.querySelector("#unorderedList");

// Initially, it will be undefined hence falsy.
// So it will skip.
if (leadsFromlocalStorage) {
  leads = leadsFromlocalStorage;
  render();
}

saveButton.addEventListener("click", function () {
  if (inputField.value !== "") {
    leads.push(inputField.value);
    inputField.value = "";
    localStorage.setItem("myLeads", JSON.stringify(leads));
    render();
  }
});

deleteButton.addEventListener("dblclick", function () {
  localStorage.removeItem("myLeads");
  leads = [];
  unorderedList.innerHTML = "";
});

saveTabButton.addEventListener("click", function () {
  inputField.value = window.location.href;
  leads.push(inputField.value);
  inputField.value = "";
  localStorage.setItem("myLeads", JSON.stringify(leads));
  render();
});

function render() {
  let list = "";
  for (let i = 0; i < leads.length; i++) {
    list += `
      <li>
         <a href="${leads[i]}" target="_blank" rel="noopener noreferrer">
            ${leads[i]}
         </a>
      </li>
      `;
  }
  unorderedList.innerHTML = list;
}