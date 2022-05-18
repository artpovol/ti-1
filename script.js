let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');
let clickButton = document.querySelector('.click-button');
themeButton.onclick = function () {
    page.classList.toggle('dark-theme');
};
clickButton.onclick = function () {
    let str = clickButton.textContent;
    clickButton.textContent = parseInt(str.match(/\d+/)) + 1 + ' нажатий';
};