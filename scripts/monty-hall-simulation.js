// Prizes keeps track of the where the winning door is 
let prizes = [0,0,0];  
// Stats to keep track of winrates 
let switchWins = 0, switchLosses = 0, stayWins = 0, stayLosses = 0;
// Conditions to check what stage of the simulation we're in 
// Each button has the same event listener that is on all the time, so these make sure that the event always does the right thing 
let running = false, stage2 = false, reset = false;
// These keep track of what door was originally picked and which door was revealed for when the function is run during later stages 
let globalRevealedDoorIndex = 0, globalStartingDoorIndex = 0; 
// Get the correspnding stats divs and doors from the html 
let stayWinsCounter = document.getElementById("staywins"), stayLossesCounter = document.getElementById("staylosses"),
stayWrCounter = document.getElementById("staywr"), switchWinsCounter = document.getElementById("switchwins"), 
switchLossesCounter = document.getElementById("switchlosses"), switchWrCounter = document.getElementById("switchwr"); 
const doorOne = document.getElementById("door0"); 
const doorTwo = document.getElementById("door1");
const doorThree = document.getElementById("door2");
doorOne.addEventListener("click", () => start("door0")); 
doorTwo.addEventListener("click", () => start("door1")); 
doorThree.addEventListener("click", () => start("door2")); 
// Run the simulation, startingDoor is the door that was just clicked 
function start(startingDoor){
    // Get the starting door html div and index
    let pickedDoor = document.getElementById(startingDoor); 
    let pickedDoorIndex = parseInt(pickedDoor.id.slice(-1));
    // If not currently running then this is the first stage. The first stage is where the user picks a door and one of the other two doors is revealed 
    if(!running){
        // Set running to true and the starting door 
        running = true;
        globalStartingDoorIndex = pickedDoorIndex;
        // Decide the winning door 
        let winningDoor = Math.floor(Math.random() * 3);
        prizes[winningDoor] = 1; 
        // Set the starting door's color to orange 
        pickedDoor.style.backgroundColor = "orange";
        let pickedDoorText = pickedDoor.querySelector('p'); 
        pickedDoorText.textContent = "STAY";
        // Decide which door to reveal 
        // If the starting door had the prize, then we need to randomly choose between the remaining two
        if(prizes[pickedDoorIndex] == 1){
            // Randomly choose how many doors to go past (pass either 0 or 1 non-prize doors)
            let revealedDoorIndex = Math.floor(Math.random() * 2); 
            let passedDoors = 0;
            for(let i = 0; i < 3; i++){
                // If not on the prize and we've passed the right amount of doors, reveal the door 
                if(prizes[i] != 1 && passedDoors == revealedDoorIndex){
                    let revealedDoor = document.getElementById("door" + i);
                    let revealedDoorImage = document.getElementById("door"+i+"-image");
                    globalRevealedDoorIndex = i;
                    revealedDoorImage.src = "/images/GOAT.jpeg";
                    revealedDoorImage.style.display = "block";
                    passedDoors++;
                }
                // Only increment if not passing the prize 
                else if(prizes[i] != 1){
                    passedDoors++;
                } 
            } 
        }
        // If the starting door did not have the prize, pick the non-prize door to reveal 
        else{
            let revealedDoorIndex = 3 - (pickedDoorIndex + winningDoor);
            globalRevealedDoorIndex = revealedDoorIndex;
            let revealedDoorImage = document.getElementById("door"+revealedDoorIndex+"-image");
            revealedDoorImage.src = "/images/GOAT.jpeg";
            revealedDoorImage.style.display = "block";
        }
        // Set the remaining door to SWITCH
        let remainingDoorIndex = 3 - (globalRevealedDoorIndex + globalStartingDoorIndex);
        let remainingDoor = document.getElementById("door"+remainingDoorIndex);
        let remainingDoorText = remainingDoor.querySelector('p');
        remainingDoorText.textContent = "SWITCH";
        remainingDoorText.style.color = "white";
        stage2 = true;
        return;
    } 
    // The user decides to stay or switch 
    // We can't pick the revealed door, so don't do anything in that case(or if it's not stage2 yet)
    if(!(pickedDoorIndex == globalRevealedDoorIndex) && stage2){
        stage2 = false;
        let resultText = document.getElementById("result");
        // Get the remaining door index and element 
        let pickedDoorImage = document.getElementById("door" + pickedDoorIndex + "-image");
        let remainingDoorIndex = 3 - (pickedDoorIndex + globalRevealedDoorIndex);  
        let remainingDoorImage = document.getElementById("door" + remainingDoorIndex+"-image");
        pickedDoorImage.style.display = "block";
        remainingDoorImage.style.display = "block";
        const doors = document.getElementById('simulation'); 
        const text = doors.querySelectorAll('p');
        text.forEach(p => p.textContent ="");
        // If we picked the right door set the color to green, reveal the remaining door to be red
        if(prizes[pickedDoorIndex] == 1){
            pickedDoorImage.src = "images/CAR.jpeg";
            remainingDoorImage.src = "images/GOAT.jpeg";
            // If the picked door was the same door, increment stay data 
            if(pickedDoorIndex == globalStartingDoorIndex){
                stayWins++; 
                stayWinsCounter.innerHTML = stayWins; 
                stayWrCounter.innerHTML = (stayWins/(stayLosses+stayWins)*100).toFixed(2) + "%";
                resultText.textContent = "You stayed and won! Click any image to play again";
            }
            // If the picked door was the other door, increment switch data 
            else{
                switchWins++;
                switchWinsCounter.innerHTML = switchWins;
                switchWrCounter.innerHTML = (switchWins/(switchWins+switchLosses)*100).toFixed(2) + "%";
                resultText.textContent = "You switched and won! Click any image to play again";
            }
        }  
        // The wrong door was picked 
        else{
            pickedDoorImage.src = "images/GOAT.jpeg";
            remainingDoorImage.src = "images/CAR.jpeg";
            if(pickedDoorIndex == globalStartingDoorIndex){
                stayLosses++;  
                stayLossesCounter.innerHTML = stayLosses; 
                stayWrCounter.innerHTML = (stayWins/(stayLosses+stayWins)*100).toFixed(2) + "%";
                resultText.textContent = "You stayed and lost. Click any image to play again";
            }
            else{
                switchLosses++;
                switchLossesCounter.innerHTML = switchLosses; 
                switchWrCounter.innerHTML = (switchWins/(switchWins+switchLosses)*100).toFixed(2) + "%";
                resultText.textContent = "You switched and lost. Click any image to play again";
            }
        }
        reset = true;
        return;
    }
    // All the doors have been revealed, clicking them again resets the simulation 
    if(reset){
        // Set all the doors to black again 
        const doors = document.getElementById('doors'); 
        const childDivs = doors.querySelectorAll('div'); 
        const images = doors.querySelectorAll('img'); 
        const text = doors.querySelectorAll('p');
        let resultText = document.getElementById("result");
        childDivs.forEach(div => div.style.backgroundColor="black"); 
        images.forEach(img => img.src="");
        images.forEach(img => img.style.display = "none");
        text.forEach(p => p.textContent ="");
        resultText.textContent = "Select a door";
        // Reset the status of the variables, startingDoor and revealedDoor get reset during the simulation 
        prizes =[0,0,0]; 
        reset = false;
        running = false;
    }
}