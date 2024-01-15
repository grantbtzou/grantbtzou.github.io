<!DOCTYPE html>
<html>
    <head>
    <link rel="stylesheet" href="jelly-bean-style.css">
    <link rel="stylesheet" href="style.css">
        <title> </title>
    </head>
    <body>
    <?php include 'shared-header.php';?>
    <main>
        <div class=column> 
            <h1>The Jelly Bean Problem</h1> 
            <p>If you randomly drew and ate one jelly bean at a time from a bag, how many would you eat before getting one of each flavor?</p>
            <p>    With 6 
               uniformly distributed flavors and a hypothetical infinite amount of 
               jelly beans(so each draw is independent) each flavor has a 1/6 chance
               of being drawn. At each draw, the probability of getting a flavor you 
               haven't already drawn is [number of remaining flavors/6], making the average
               amount of draws to hit a new flavor [6/number of remaining flavors]. 
               Summing up the average number of draws to get each remaining flavor gives 14.7. Run the simulation to try it yourself.
               Use the slider to run many times to see it approach 14.7. 
               This simulation was definitely not based on a real story.
            </p> 
            <div class=row1>
                <p>Current run: <span id="counter">0</span></p>
                <p>Average: <span id=average>0</span></p>
                <p>Runs: <span id=run_display>0</span></p>
            </div> 
            <div class="section2">
                <div class=row2>
                    <div class="remaining">
                        <img id="0" src="/images/pink-jellybean-black-outline.png">
                        <img id="1" src="/images/orane-jellybean-black-outline.png">
                        <img id="2" src="/images/yellow-jellybean-black-outline.png">
                        <img id="3" src="/images/green-jellybean-black-outline.png">
                        <img id="4" src="/images/blue-jellybean-black-outline.png">
                        <img id="5" src="/images/purple-jellybean-black-outline.png">
                    </div>
                   
                </div>
                <div class=row3>
                    <p style="margin-right:auto; margin-top: 0px;">Remaining flavors</p>
                    <div id="color">
                        <img id="6" style="display:none">
                    </div>
                    <button id="draw" style="align-self: center">Draw <span id="draw number">1</span></button>
                    <button id="run" style="align-self: center; width: 70px">Run <span class="runs">1</span></button>
                </div>
                <div class="row4">
                    <p id="cd" style="align-self: center; margin-right: 55px; margin-top: 0px;">Current draw</p>
                    <input type="range" min="1" max="1000" value="1" id="runRange">
                    <p style="margin-top: 0px; width: 90px;">Run: <span class="runs">1</span> </p>
                </div>
            </div>
        </div>
        <script>
            const pulled = [false, false, false, false, false, false];
            let count=0, avg = 0, runs = 0, total = 0;
            let drawButton=document.getElementById("draw");
            let runButton=document.getElementById("run");
            let counter=document.getElementById("counter");
            let average_counter=document.getElementById("average");
            drawButton.addEventListener("click", function(){
                pull();
                reset();
            });
            runButton.addEventListener("click", function (){
                for(let i = 0; i < slider.value;i++){
                    while(!pulled.every(v => v === true)){
                        pull();
                    }
                    reset();
                }
            })

            function pull(){
                let pull = Math.floor(Math.random() * 6); 
                pulled[pull] = true;
                let img = document.getElementById(pull.toString());
                let current_pull = document.getElementById("6"); 
                current_pull.style.display = 'block'; 
                current_pull.src = img.src;            
                img.style.visibility = 'hidden';
                count++;
                counter.innerHTML = count;
                
            }
            function reset(){
                if(pulled.every(v=> v === true)){
                    pulled.fill(false);
                    runs += 1;
                    for(let i = 0; i < pulled.length; i++){
                        let img = document.getElementById(i.toString());
                        img.style.visibility = 'visible';
                    }
                    total += count;
                    avg = total/runs;
                    average_counter.innerHTML = avg.toFixed(2);
                    count = 0;
                    counter.innerHTML = count;
                    run_display.innerHTML = runs;
                    console.log("runs: ", runs); 
                    console.log("total: ", total);
                    console.log("average: ", avg);
                }
            }
            let slider = document.getElementById("runRange"); 
            let output = document.querySelectorAll(".runs"); 
            slider.oninput = function(){
                output.forEach(function(span){
                span.innerHTML = slider.value;})
                
            }
        </script>
    </main>
    </body>
</html>