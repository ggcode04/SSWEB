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