const greeting = "Greetings traveler. Welcome to the Web.";
function displayMessage(message) {
    console.log(message);
}
displayMessage(greeting);


const inputForm = document.getElementById('inputForm');

function imgTagSubmit(e) {
    e.preventDefault();

    const output = document.querySelector('.output');
    output.innerText = '';

    let src = document.getElementById('src').value;
    let ext = document.getElementById('srcExt').value;
    let href = document.getElementById('href').value;
    let alt = document.getElementById('alt').value;
    let elclass = document.getElementById('class').value;
    let iterations = document.getElementById('iterations').value;

    if (ext.charAt(0) === '.') {
        ext = ext.slice(1);
    }

    if (iterations >= 1000) {
        output.innerText = "iterations too high, don't break your computer. Max iteration is 999.";
        return;
    }

    for (let i = 0; i <= iterations - 1; i++) {
        if (elclass) {
            if (href) {
                output.innerText += `<a href="${href}" target="_blank"><img src="${src}-${i + 1}.${ext}" alt="${alt} ${i + 1}" class="${elclass}"></a>`;
                output.innerHTML += '<br>';
            } else {
                output.innerText += `<img src="${src}-${i + 1}.${ext}" alt="${alt} ${i + 1}" class="${elclass}">`;
                output.innerHTML += '<br>';
            }
        } else {
            if (href) {
                output.innerText += `<a href="${href}" target="_blank"><img src="${src}-${i + 1}.${ext}" alt="${alt} ${i + 1}"></a>`;
                output.innerHTML += '<br>';
            } else {
                output.innerText += `<img src="${src}-${i + 1}.${ext}" alt="${alt} ${i + 1}">`;
                output.innerHTML += '<br>';
            }
        }

    }

    inputForm.reset();
    document.getElementById("submit").blur();
}

inputForm.onsubmit = imgTagSubmit;