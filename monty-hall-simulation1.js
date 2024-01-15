// Get the doorcount slider/display 
const adjustableSimulation = document.getElementById('adjustableSimulation');
const doorCountSlider = document.getElementById('doorCountSlider'); 
const doorCounterDisplay = document.getElementById('doorCounter'); 
doorCountSlider.addEventListener('input', updateDoorCount); 
// Set up simulation variables and counters 
let globalRemainingDoorIndex_1 = 0; 
let globalStartingDoorIndex_1 = 0;
let globalWinningDoorIndex = 0;
let prizes_1 = [];
let running_1 = false, stage2_1 = false, reset_1 = false;
let switchWins_1 = 0, switchLosses_1 = 0, stayWins_1 = 0, stayLosses_1 = 0;
let stayWinsCounter_1 = document.getElementById('staywins1'), stayLossesCounter_1 = document.getElementById('staylosses1'),
stayWrCounter_1 = document.getElementById('staywr1'), switchWinsCounter_1 = document.getElementById('switchwins1'), 
switchLossesCounter_1 = document.getElementById('switchlosses1'), switchWrCounter_1 = document.getElementById('switchwr1'); 
updateDoorCount();
// Change the amount of doors to match the slider input 
function updateDoorCount(){
    // Get the value of the slider, set door size
    const doorCount = parseInt(doorCountSlider.value, 10);
    doorCounterDisplay.textContent = `${doorCount} `;
    let doorWidth = '54px';
    let doorHeight = '54px';
    let doorMargin = 8;
    // Clear existing doors
    const adjustableSimulation = document.getElementById('adjustableSimulation');
    adjustableSimulation.innerHTML = '';
    // Generate and append new doors
    for (let i = 0; i < doorCount; i++) {
        const door = document.createElement('div');
        door.className = 'door';
        door.id = 'sim1_door' + i;
        door.addEventListener('click', () => start2(door.id));
        door.style.minWidth = doorWidth;
        door.style.maxWidth = doorWidth;
        door.style.margin = `${doorMargin}px`;
        door.style.maxHeight = doorHeight;
        door.style.minHeight = doorHeight;
        adjustableSimulation.appendChild(door);
        const doorImage = document.createElement('img'); 
        doorImage.className = 'door-image'; 
        doorImage.id = 'sim1_door' + i + '_image';
        const doorText = document.createElement('p');
        doorText.id = 'sim1_door' + i + '_text';
        door.appendChild(doorImage);
        door.appendChild(doorText);
    }
    // Reset the prizes, and status variables 
    // Fill up the array with 0's 
    prizes_1 = [];
    for(let i = 0; i < doorCount; i++){
        prizes_1.push(0);
    }
    // Decide which door is the winning door 
    let winningDoor = Math.floor(Math.random() * doorCount);
    globalWinningDoorIndex = winningDoor;
    prizes_1[winningDoor] = 1; 
    reset_1 = false, stage2_1 = false, running_1 = false;
    switchWins_1 = 0, switchLosses_1 = 0, stayWins_1 = 0, stayLosses_1 = 0;
    switchWinsCounter_1.innerHTML = switchWins_1, switchLossesCounter_1.innerHTML = switchLosses_1, stayWinsCounter_1.innerHTML = stayWins_1, 
    stayLossesCounter_1.innerHTML = stayLosses_1, switchWrCounter_1.innerHTML = 'N/A', stayWrCounter_1.innerHTML = 'N/A';
}

// Run the simulation 
function start2(startingDoor){
    // Determine how many doors there are and get the picked door 
    const doorCount = parseInt(doorCountSlider.value, 10);
    let pickedDoor = document.getElementById(startingDoor); 
    let pickedDoorIndex = parseInt(pickedDoor.id.match(/\d+$/));
    if(!running_1){
        running_1 = true;
        // The first picked door is the starting door, mark it orange 
        globalStartingDoorIndex_1 = pickedDoorIndex;
        pickedDoor.style.backgroundColor = 'orange'; 
        let pickedDoorText = pickedDoor.querySelector('p');
        pickedDoorText.textContent = 'STAY';
        let pickedDoorImage = pickedDoor.querySelector('img');
        pickedDoorImage.style.display = 'none';
        // Decide how many doors to pass - this picks a random door to leave as the remaining door while not selecting the starting door 
        let remainingDoorIndex = Math.floor(Math.random() * (doorCount-1)); 
        let passedDoors = 0;
        // Reveal all except one if we started on the correct door 
        if(prizes_1[globalStartingDoorIndex_1] == 1){
            for(let i = 0; i < doorCount; i++){
                // If we've passed the right amount of doors and are not on the winning door
                if(prizes_1[i] != 1 && passedDoors == remainingDoorIndex){
                    // Get the remaining door index 
                    let remainingDoor = document.getElementById('sim1_door'+i);
                    let remainingDoorText = document.getElementById('sim1_door'+i+'_text');
                    remainingDoorText.textContent = 'SWITCH'; 
                    remainingDoorText.style.color = 'white';
                    let remainingDoorImage = remainingDoor.querySelector('img'); 
                    remainingDoorImage.style.display = 'none';
                    globalRemainingDoorIndex_1 = i;
                    passedDoors++;
                }
                else if(i != globalStartingDoorIndex_1){
                    // Change the color of all the eliminated doors to red 
                    passedDoors++;
                    let eliminatedDoor = document.getElementById('sim1_door'+i);
                    eliminatedDoor.style.backgroundColor = 'red';
                    let eliminatedDoorImage = document.getElementById('sim1_door' + i + '_image');
                    eliminatedDoorImage.src = 'images/square-GOAT.jpeg';
                } 
            } 
        } 
        // If the starting door was not the winning door, the only door left will be the winning door 
        else{
            globalRemainingDoorIndex_1 = globalWinningDoorIndex;
            let remainingDoorText = document.getElementById('sim1_door'+globalRemainingDoorIndex_1+'_text');
            remainingDoorText.textContent = 'SWITCH'; 
            remainingDoorText.style.color = 'white';
            let remainingDoorImage = document.getElementById('sim1_door'+globalRemainingDoorIndex_1+'_image');
            remainingDoorImage.style.display = 'none';
            for(let i = 0; i < doorCount; i++){
                if(prizes_1[i] != 1 && i != globalStartingDoorIndex_1){
                    let eliminatedDoor = document.getElementById('sim1_door'+i);
                    eliminatedDoor.style.backgroundColor = 'red';
                    let eliminatedDoorImage = document.getElementById('sim1_door' + i + '_image');
                    eliminatedDoorImage.src = 'images/square-GOAT.jpeg';
                }
            }
        } 
        stage2_1 = true;
        return;
    } 
    // Only run stage2 if the picked door was either the starting door or the remaining door and if it's stage2
    if(((pickedDoorIndex == globalStartingDoorIndex_1) || (pickedDoorIndex == globalRemainingDoorIndex_1)) && stage2_1){
        stage2_1 = false;
        // Clear the STAY and SWITCH text 
        let startingDoorImage = document.getElementById('sim1_door' + globalStartingDoorIndex_1 + '_image');
        let remainingDoorImage = document.getElementById('sim1_door' + globalRemainingDoorIndex_1 + '_image');
        startingDoorImage.style.display = 'block';
        remainingDoorImage.style.display = 'block';
        let startingDoorText = document.getElementById('sim1_door' + globalStartingDoorIndex_1 + '_text'); 
        let remainingDoorText = document.getElementById('sim1_door' + globalRemainingDoorIndex_1 + '_text'); 
        startingDoorText.textContent = ''; 
        remainingDoorText.textContent = '';
        // We picked the winning door and we stayed 
        if(prizes_1[pickedDoorIndex] == 1 && pickedDoorIndex == globalStartingDoorIndex_1){
            // Set the colors 
            startingDoorImage.src = 'images/square-CAR.jpeg';
            remainingDoorImage.src = 'images/square-GOAt.jpeg'
            //we stayed and won, update stats 
            stayWins_1++; 
            stayWinsCounter_1.innerHTML = stayWins_1; 
            stayWrCounter_1.innerHTML = (stayWins_1/(stayLosses_1+stayWins_1)*100).toFixed(2) + '%';
        }
        // We switched and won, update stats 
        if(prizes_1[pickedDoorIndex] == 1 && pickedDoorIndex == globalRemainingDoorIndex_1){
            remainingDoorImage.src = 'images/square-CAR.jpeg'; 
            startingDoorImage.src = 'images/square-GOAT.jpeg';
            switchWins_1++;
            switchWinsCounter_1.innerHTML = switchWins_1;
            switchWrCounter_1.innerHTML = (switchWins_1/(switchWins_1+switchLosses_1)*100).toFixed(2) + '%';
        }
        
        // We stayed and lost 
        if(prizes_1[pickedDoorIndex] == 0 && pickedDoorIndex == globalStartingDoorIndex_1){
            remainingDoorImage.src = 'images/square-CAR.jpeg'; 
            startingDoorImage.src = 'images/square-GOAT.jpeg';     
            stayLosses_1++;  
            stayLossesCounter_1.innerHTML = stayLosses_1; 
            stayWrCounter_1.innerHTML = (stayWins_1/(stayLosses_1+stayWins_1)*100).toFixed(2) + '%';            
        }
        // We switched and lost, update stats 
        if(prizes_1[pickedDoorIndex] == 0 && pickedDoorIndex == globalRemainingDoorIndex_1){
            console.log('switch lose'); 
            startingDoorImage.src = 'images/square-CAR.jpeg';
            remainingDoorImage.src = 'images/square-GOAt.jpeg'
            switchLosses_1++;
            switchLossesCounter_1.innerHTML = switchLosses_1; 
            switchWrCounter_1.innerHTML = (switchWins_1/(switchWins_1+switchLosses_1)*100).toFixed(2) + '%';
        }    
        reset_1 = true;
        return;
    }
    if(reset_1){
        // Set all of the doors to black again 
        const doors = document.getElementById('adjustableSimulation'); 
        const childDivs = doors.querySelectorAll('div'); 
        childDivs.forEach(div => div.style.backgroundColor='black'); 
        const imgs = doors.querySelectorAll('img'); 
        imgs.forEach(img => img.src = '');
        // Reset the prizes, and status variables 
        // Fill up the array with 0's 
        prizes_1 = [];
        for(let i = 0; i < doorCount; i++){
            prizes_1.push(0);
        }
        // Decide which door is the winning door 
        let winningDoor = Math.floor(Math.random() * doorCount);
        globalWinningDoorIndex = winningDoor;
        prizes_1[winningDoor] = 1; 
        reset_1 = false;
        running_1 = false;
    }
}

// Reveal button shows where the prize is 
const revealButton = document.getElementById('reveal'); 
revealButton.addEventListener('mouseenter', () => show()); 
revealButton.addEventListener('mouseleave', () => hide());
function show(){
    let winningDoorImage = document.getElementById('sim1_door' + globalWinningDoorIndex + '_image');
    winningDoorImage.style.display = 'block';
    winningDoorImage.src = 'images/square-CAR.jpeg';
}

function hide(){
    let winningDoorImage = document.getElementById('sim1_door' + globalWinningDoorIndex + '_image');
    if(stage2_1){
        winningDoorImage.style.display = 'none';
    }
    if(reset_1){
        return;
    }
    winningDoorImage.src = '';
}