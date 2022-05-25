const emojiContainer = document.querySelector("#emojiContainer");
const startBtn = document.querySelector("#start");
const endBtn = document.querySelector("#end");
const deleteStartBtn = document.querySelector("#startDelete");
const deleteEndBtn = document.querySelector("#endDelete");
const myEmojis = [];
let emojis = "";

startBtn.addEventListener("click", function () {
  if (inputField.value != "") {
    let element = inputField.value;
    emojiContainer.innerHTML = '';
    myEmojis.unshift(element);
    render();
  }
});

endBtn.addEventListener("click", function () {
  if (inputField.value != "") {
    let element = inputField.value;
    emojiContainer.innerHTML = '';
    myEmojis.push(element);
    render();
  }
});

deleteStartBtn.addEventListener("click", function () {
  myEmojis.shift();
  render();
});

deleteEndBtn.addEventListener("click", function () {
    myEmojis.pop();
    render();
});

function render() {
  // for (let i = 0; i < myEmojis.length; i++) {
  //    emojis += `<span>${myEmojis[i]}</span>`;
  // }
  myEmojis.forEach((emoji) => (emojis += `<span>${emoji}</span>`));

  // OR (in for loop)

  // const emoji = document.createElement('span');
  // emoji.textContent = myEmojis[i];
  // emojiContainer.append(emoji);

  emojiContainer.innerHTML = emojis;
  inputField.value = '';
  emojis = "";
}
