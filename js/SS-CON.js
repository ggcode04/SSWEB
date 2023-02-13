function showContents (activeTab, contentsId) {
    var tabs = document.querySelectorAll('.btn');
    var contents = document.querySelectorAll('.contents');
    var i = 0;
    while (i < tabs.length){
        tabs[i].classList.remove('show');
        contents[i].classList.remove('show')
        i++;
    }
    activeTab.classList.add('show');
    document.getElementById(contentsId).classList.add('show')
}

function showTabs (activeBtn, contentsId2) {
    var btn = document.querySelectorAll('.btnContainer');
    var btnContents = document.querySelectorAll('.contents2');
    var i = 0;
    while (i < btn.length) {
        btn[i].classList.remove('show2');
        btnContents[i].classList.remove('show2');
        i++
    }
    activeBtn.classList.add('show2');
    document.getElementById(contentsId2).classList.add('show2');
}

const table = document.getElementById("table");
const modal = document.getElementById("modal");
const inputs = document.querySelectorAll("input");
let count = 0;

window.addEventListener("click", (e) => {
  if (e.target.matches(".btn-warning")) {
    let data = e.target.parentElement.parentElement.children;
    fillData(data);
    modal.classList.toggle("translate");
  }

  if (e.target.matches(".btn-danger")) {
  modal.classList.toggle("translate");
  count=0
  }
});

const fillData = (data) => {
  for (let index of inputs) {
    index.value = data[count].textContent;
    console.log(index);
    count += 1;
  }
};