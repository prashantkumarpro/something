let form = document.getElementById('form');
let textarea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;


function handleFormSubmit(e) {
    e.preventDefault()
    disable(button)
    show(loadingMessage)
    hide(errorMessage)

    if (textarea.value !== 'Istanbul') {

        setTimeout(() => {
            error(errorMessage)
            enable(button)
            hide(loadingMessage)
        }, 1000)

    } else {

        setTimeout(() => {
            show(successMessage)
            hide(form)
        }, 1000)

    }
}





function handleTextareaChange() {
    if (textarea.value.trim() === '') {
        disable(button)
    }
    else {
        enable(button)
    }

}

function disable(element) {
    element.disabled = true;
}

function enable(element) {
    element.disabled = false;
}

function hide(element) {
    element.style.display = 'none'
}

function show(element) {
    element.style.display = ''
}

function error(element) {
    element.style.display = 'block'
}









