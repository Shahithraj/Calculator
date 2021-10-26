let button = document.querySelector('button')

let input = document.querySelector('input')

function Clear(){
    input.value = ''
}

function display(val){
    input.value += val
}

function calculate(){
    try{
        input.value = eval(input.value)
    }
    catch(err){
        alert('Invalid')
    }

}