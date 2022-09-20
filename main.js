const container = document.querySelector('.container');
for (var i = 1; i<=3; i++){
    const blocks = document.createElement('div')
    blocks.classList.add('block');
    container.appendChild(blocks);
}