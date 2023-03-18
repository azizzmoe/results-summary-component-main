const reaction = document.querySelector("#s-1");
const memory = document.querySelector("#s-2");
const verbal = document.querySelector("#s-3");
const visual = document.querySelector("#s-4");

async function f() {
  const response = await fetch("./data.json");
  const json = await response.json();
  const [Re, Me, Ve, Vi] = json;

  function all(input) {
    let code = `<div class="scores">
            <img src="${input.icon}" alt="img" class="icon">
            <div class="category">${input.category}</div>
            <strong class="score">${input.score}<span>/100</span></strong>
          </div>
  `;
    return code;
  }

  reaction.innerHTML = all(Re);
  memory.innerHTML = all(Me);
  verbal.innerHTML = all(Ve);
  visual.innerHTML = all(Vi);
}
f();
