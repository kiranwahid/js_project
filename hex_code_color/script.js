function changeColor(){
    let color = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hex_code = "#";

    for(let i = 0 ; i < 6; i++){
        let generatedRandomColor = Math.floor(Math.random() * color.length);
        hex_code += color[generatedRandomColor];
    }

    document.getElementById("hex_code").innerHTML = hex_code;
    document.body.style.backgroundColor = hex_code;

}
  