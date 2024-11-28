function expandable(number) {
    const title = document.getElementById(`expandableTitle${number}`);
    const content = document.getElementById(`expandableContent${number}`);

    title.addEventListener('click', () => {
        content.classList.toggle('d-none');
        title.classList.toggle('fw-bold');

        replaceIcon(number);
    });
}

function replaceIcon(number) {
    const icon = document.getElementById(`expandableIcon${number}`);

    const downIcon = 'bi-chevron-down';
    const rightIcon = 'bi-chevron-right';

    if (icon.classList.contains(rightIcon)) { 
        icon.classList.replace(rightIcon, downIcon);
    } else {
        icon.classList.replace(downIcon, rightIcon);
    }
}

expandable(1);
expandable(2);
expandable(3);