let display = document.getElementById('cal-input')

let buttons = document.getElementsByClassName('btn')

let data  ;


function clicked(n){
    data = display.value += n

}

function equal(){
    data = display.value;
    if(display.value){
        display.value = eval(data);
}
}


function clearall(){
    if(display.value){
    display.value = '';
    }
}

function cancel(){
    if(display.value){
    display.value =  display.value.slice(0, -1)
    }
}