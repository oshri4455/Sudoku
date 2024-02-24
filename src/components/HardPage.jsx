import React from 'react'
import { useNavigate } from 'react-router-dom';
import './level.css'

export default function HardPage() {
  const nav = useNavigate()
  const db = [
    [
      [" "," ",7," ",5," "," "," ",1],
      [2," "," "," "," "," "," "," "," "],
      [" "," "," "," "," ",8," ",4,6],
      [1," ",8," ",3," "," "," "," "],
      [" "," "," "," ", " ",2," ",5," "],
      [" "," "," ",4," ",""," "," ",3," "],
      [" "," "," "," "," ",6," ",7," "],
      [4," ",""," ",1," "," "," ",8],
      [" "," "," ",7," "," "," "," ",9],
  
    ],
    [
      [" ",8," ",6," "," "," "," ",1],
      [2," "," "," "," "," "," ",8," "],
      [" "," "," ",9," ",8," "," "," "],
      [1,2," ",5," "," "," "," ",4],
      [" "," "," "," "," "," ",1," ",7],
      [" ",9," "," "," "," ",8," "," "],
      [" ",1," ",2," ",6," "," "," "],
      [" "," "," "," ",1," "," ",6," "],
      [" ",6," "," "," "," ",2," ",9],
  
    ],
    [
      [" ",8," "," "," ",4," "," "," "],
      [" "," "," "," "," "," "," "," ",5],
      [3," "," ",9," "," ",7," "," "],
      [" "," "," "," "," ",7," ",9," "],
      [" ",3," "," "," "," ",1," ",7],
      [7," ",5," "," ",1," ",3," "],
      [5," "," "," ",8," ",4," ",3],
      [" ",7," ",3," "," "," "," "," "],
      [" "," ",3," "," ",5," "," ",9],
  
    ],
    ];
    
        const fullBoard =[
            
                [9,8,7,6,5,4,3,2,1],
                [2,4,6,1,7,3,9,8,5],
                [3,5,1,9,2,8,7,4,6],
                [1,2,8,5,3,7,6,9,4],
                [6,3,4,8,9,2,1,5,7],
                [7,9,5,4,6,1,8,3,2],
                [5,1,9,2,8,6,4,7,3],
                [4,7,2,3,1,9,5,6,8],
                [8,6,3,7,4,5,2,1,9],
        
            ];  
      
     let board;//Boolean variable
     function sodukoBoard (level){
    let chooseBoard =Math.floor(Math.random()* 3);//Lottery of 3 boards
    board=db[chooseBoard];
    for(let row=0;row<9; row++){//A loop that checks the rows of the boards
        for(let col = 0; col<9; col++){//A loop that checks the columns of the boards 
            document.getElementById(`td${row}${col}`).value=board[row][col];//Link the element to the boards
        }
      
    }
    
     }
    
  function checkBoard (){
  
  
  
  for(let row = 0; row< 1; row++){//loop that checks the rows of the boards
  
    for(let col = 0; col< 1; col++){// loop that checks the columns of the boards
      let pressOnBoard = document.getElementById(`td${row}${col}`).value;//Link the element to the boards
      
   //If what the user types is equal to the board
      if(pressOnBoard == fullBoard[row][col]){
         // As soon as the user has finished answering the board,
      //  the system will pop up a message and take him back to select the stage
        alert ('Well done, you have finished successfully');
        nav('/menu')
      }
    
  
   else{
    //As soon as the user did not answer correctly on the board
    //  it will pop up a message to try again
      // and then the system will reset the board
      alert('try again');
    
  
      
    
   }
   
  }
  
  
  
  
    
  
  }
  
  
  }  
  
  
  



  return (
    <div>


<h1 id="title">Sudoku Hard</h1>
<br />
<br />
    <table>
      <tr>
        <td><input id="td00" type="number" maxlength="1" min="1" max="9"/></td>
        <td><input id="td01"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td02"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td03"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td04"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td05"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td06"type="number" maxlength="1" min="1" max="9"/></td>
        <td><input id="td07"type="number" maxlength="1" min="1" max="9"/></td>
        <td><input id="td08"type="number" maxlength="1" min="1" max="9"/></td>

      </tr>
      <tr>
        <td><input id="td10"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td11"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td12"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td13"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td14"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td15"type="number" maxlength="1" min="1"  max="9" /></td>
        <td><input id="td16"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td17"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td18"type="number" maxlength="1" min="1" max="9" /></td>
      </tr>
      <tr>
        <td><input id="td20"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td21"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td22"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td23"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td24"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td25"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td26"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td27"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td28"type="number" maxlength="1" min="1" max="9" /></td>
        

      </tr>
      <tr>
        <td><input id="td30"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td31"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td32"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td33"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td34"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td35"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td36"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td37"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td38"type="number" maxlength="1" min="1" max="9" /></td>
      </tr>
      <tr>
        <td><input id="td40"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td41"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td42"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td43"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td44"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td45"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td46"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td47"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td48"type="number" maxlength="1" min="1" max="9" /></td>
      </tr>
      <tr>
        <td><input id="td50"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td51"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td52"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td53"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td54"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td55"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td56"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td57"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td58"type="number" maxlength="1" min="1" max="9" /></td>
      </tr>
      <tr>
        <td><input id="td60"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td61"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td62"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td63"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td64"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td65"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td66"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td67"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td68"type="number" maxlength="1" min="1" max="9" /></td>
      </tr>
      <tr>
        <td><input id="td70"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td71"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td72"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td73"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td74"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td75"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td76"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td77"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td78"type="number" maxlength="1" min="1" max="9" /></td>
      </tr>
      <tr>
        <td><input id="td80"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td81"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td82"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td83"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td84"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td85"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td86"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td87"type="number" maxlength="1" min="1" max="9" /></td>
        <td><input id="td88"type="number" maxlength="1" min="1" max="9" /></td>
      </tr>

    </table>
    <button class="button" onClick={sodukoBoard}>again</button>
    <button class="button" onClick={checkBoard}>finish</button>
    <button class="button" onClick={sodukoBoard} >Start</button>
   



    </div>
  )
}
