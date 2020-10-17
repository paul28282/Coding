
function insert(num) {
    document.form.textview.value += num

    if(document.form.textview.value == 69) {
        document.querySelector('.audioa').play()
        console.log(document.form.textview.value)
    }
    else if(document.form.textview.value == 911) {
        document.querySelector('.audiob').play()
    } 
    else if(document.form.textview.value == 666) {
        document.querySelector('.audioc').play()
    }
}

function equal() {
    document.form.textview.value = eval(document.form.textview.value)
}

function clean() {
    document.form.textview.value = ''
    document.querySelector('.audioa').pause()
    document.querySelector('.audiob').pause()
    document.querySelector('.audioc').pause()
}


