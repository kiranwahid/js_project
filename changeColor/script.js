let index = 0
function changeColor(){
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'cyan', 'magenta', 'lime'];
    document.body.style.backgroundColor = colors[index];
    if(index > colors.length -1){
        index = 0;
    }else{
        index++;
    }

}