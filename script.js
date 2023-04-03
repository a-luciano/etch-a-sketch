createBoard(16);
setHoverColor();
document.getElementById('btnToggle').style.background = 'linear-gradient(90deg, red, yellow, orange, green, blue)';


function createBoard (numOfSquares){
    for (let i = 1; i <= numOfSquares; i++){
        const row = document.createElement ('div');
            row.id = (`row${i}`);
            row.classList.add('row');
            container.appendChild(row);
            for(let j = 1; j <= numOfSquares; j++){
                const square = document.createElement ('div');
                    square.classList.add('square');
                    square.id = `${i}-${j}`;
                    row.appendChild(square);
            }
            
    }    
} 


function setHoverColor(){
    
    let toggleKey = false;
    document.getElementById('btnToggle').addEventListener("click",toggleColorMode);
    function toggleColorMode(){
        toggleKey = !toggleKey;
        if (toggleKey === false){
            document.getElementById('btnToggle').textContent = 'Rainbow Mode';
            document.getElementById('btnToggle').style.background = 'linear-gradient(90deg, red, yellow, orange, green)';
            
        }else{
            document.getElementById('btnToggle').textContent = 'Default Mode';
            document.getElementById('btnToggle').style.background = "#008080";
        }

}
    document.addEventListener("mouseover", function (e){
        const hover = e.target.id;
        const elClass = e.target.classList.value;
            if(elClass === 'square'){
                if (toggleKey === false){
                    document.getElementById(hover).style.background = "#008080";
                }else{
                    document.getElementById(hover).style.background = getColor();  
                }
            }
    })  

}

        document.getElementById('btnSubmit').addEventListener("click", ()=>{
            let input = document.getElementById("numOfSquares").value;
            if(input > 0 && input <= 100){
                let elem = document.querySelectorAll("div.row");
                    elem.forEach(row => row.parentNode.removeChild(row));
                    createBoard(input);
            }else{
                alert('Please, insert a value between 0 and 100!')              
            }
           
        }) 


function getColor(){
    const colorArray = ['#FF5733', '#FF6347', '#FF4500', '#FFA07A', '#FF7F50', '#FF8C00', '#F08080', '#DC143C', '#CD5C5C', '#B22222', '#8B0000', '#800000', '#FFC0CB', '#FF69B4', '#FF1493', '#C71585', '#DB7093', '#FFB6C1', '#FFA07A', '#FA8072', '#E9967A', '#F4A460', '#D2691E', '#8B4513', '#A52A2A', '#B8860B', '#DAA520', '#FFD700', '#FFFFE0', '#FFFACD', '#FAFAD2', '#FFEFD5', '#FFE4B5', '#FFE4C4', '#F5DEB3', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B', '#ADFF2F', '#7FFF00', '#7CFC00', '#00FF00', '#32CD32', '#98FB98', '#90EE90', '#00FA9A', '#00FF7F', '#2E8B57', '#3CB371', '#66CDAA', '#20B2AA', '#008080', '#008B8B', '#00FFFF', '#E0FFFF', '#AFEEEE', '#7FFFD4', '#40E0D0', '#48D1CC', '#00CED1', '#5F9EA0', '#4682B4', '#6495ED', '#00BFFF', '#1E90FF', '#4169E1', '#0000FF', '#00008B', '#000080', '#191970', '#7B68EE', '#6A5ACD', '#483D8B', '#8A2BE2', '#9400D3', '#9932CC', '#8B008B', '#800080', '#4B0082', '#6B8E23', '#556B2F', '#2E8B57', '#008000', '#006400', '#228B22', '#32CD32', '#00FF00', '#7CFC00', '#ADFF2F', '#FFFF00', '#FFD700', '#FFA500', '#FF8C00', '#FF7F50', '#FF6347', '#FF4500', '#FF0000'];
          const index = Math.floor(Math.random()*100);
          return colorArray[index]; 
         
}
