
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));


app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal() {
  createText("Welcome");
  await delay(700);
  createText("Starting the terminal...");
  await delay(500);
  new_line();
}


function new_line() {

  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# guest";
  span1.textContent = " in";
  span2.textContent = " ~/sugarxust";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");

  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();

}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {

  const value = document.querySelector("input").value;
  if (value === "-help" || value === "-h") {
    trueValue(value);

    createCode("works", "My github page with my projects.)");
    createCode("about", "Who am i and what do i do.");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");

  }
  else if (value === "works") {
    trueValue(value);
    createProj("<a class='inner' href='https://github.com/SUGARXUST' target='_blank'>FLAGGIT</a>", "UI/UX design of a web application which geo-locates water quality and reports the same");
    createProj("<a class='inner' href='https://github.com/SUGARXUST' target='_blank'>Geo-Dude</a>", "My github page with my projects.");
    createProj("<a class='inner' href='https://github.com/SUGARXUST' target='_blank'>QRIE</a>", "My github page with my projects.");
    createProj("contributions", "<a class='inner' href='https://github.com/SUGARXUST' target='_blank'>QRIE </a><br> <a class='inner' href='https://github.com/SUGARXUST' target='_blank'>Geo-Dude</a>")
  }
  else if (value === "about") {
    trueValue(value);
    createText("Sourav is a pro-active learner and is fluent with web-devlopment technologies. He has hands on experience in python and C/C++. His projects focus on reliability and feasiblity. He is currently learning <span class = 'blue'>tailwind.js and typescript</span>. He is also a opensource enthuisiast and has made contributions to some of the listed down repositories. Most of his works can be found on Github while some of them are listed below.")
  }
  else if (value === "social -a") {
    trueValue(value);
    createText("<a href='https://github.com/SUGARXUST' target='_blank'><i class='fab fa-github white'></i> github.com/SUGARXUST</a>")
    createText("<a href='https://www.linkedin.com/in/acharya-sourav/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/acharya-sourav</a>")
    createText("<a href='https://twitter.com/SouravA05117721' target='_blank'><i class='fab fa-twitter white'></i> SouravA05117721</a>")
  }
  else if (value === "social") {
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }

  else if (value === "clear") {
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else {
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value) {

  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {

  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");

  p.innerHTML =
    text
    ;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
    `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}
function createProj(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
    `${code} <br/><span class='proj'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();