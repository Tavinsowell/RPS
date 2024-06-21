const rps = ["R", "P", "S"]
// let computer = math.random("R", "P", "S");

// window.prompt("R, P, or S?")
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
  
function myFunction() {
    let response = prompt("R, P, or S?", "Enter Here");
    if (response === "R" || "P" || "S") {
        let x = Math.floor((Math.random() * 3) + 1);
   alert(rps[x])
   
    } else
     {
    



 alert("Invalid choice")


     
    }
  }
