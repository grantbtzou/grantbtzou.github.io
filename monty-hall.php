<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="monty-style.css">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="combined-header.css">

        <title> </title>
    </head>
    <body>
        <?php include 'shared-header.php';?>
        <div class="container">
            <h1 id="title">The Monty Hall Problem</h1>
            <p>The Monty Hall problem is one of my favorite statistical problems because of its counter intuitive result. Using this simulation I want to make it clear with a visual 
                demonstration.
                 
            </p>
            <h2>The Problem</h2>
            <p>You're on a TV show faced with three doors. Behind one of the doors is a new car, while behind the other two are goats. You select one of the doors, then the host opens
                 one of the two remaining doors, revealing a goat. Then the host offers you the option to either stay 
               with your initial pick, or to switch your pick to the remaining door. Should you make the switch? Does it matter? 
            </p>
            <p >The intuitive result is that it makes no difference whether you stay or switch because there are two doors remaining, making it a 50/50 between them. However, it turns out that 
                switching actually has a 66% of selecting the correct door while staying has a 33% chance. Don't believe it? Try it for yourself on the simulation below. Try each strategy 30 times 
                and compare the results.
            </p>  
            <div id="simanddata">
                <div id="simulation">
                    <div id="doors">
                        <div id="door0"><img id="door0-image" src="" style="display: none"><p></p></div>
                        <div id="door1"><img id="door1-image" src="" style="display: none"><p></p></div>
                        <div id="door2"><img id="door2-image" src="" style="display: none"><p></p></div>
                    </div>
                    <p id="result">Select a door</p>
                </div>
                <div id="data">
                    <p>Stay: </p>
                    <p>Wins: <span id="staywins">0</span></p> 
                    <p>Losses: <span id="staylosses">0</span></p>
                    <p>Winrate: <span id="staywr">N/A</span></p>
                    <p style="margin-top:50px">Switch: </p>
                    <p>Wins: <span id="switchwins">0</span></p> 
                    <p>Losses: <span id="switchlosses">0</span></p>
                    <p>Winrate: <span id="switchwr">N/A</span></p>
                </div>
            </div>
            <p>
                This can be explained with a table showing all possible cases of the event. Notice how staying is only the correct strategy if you start on the correct door. Picking the correct
                door from the start has a 1/3 chance of occuring because none of the doors have been eliminated yet, meaning that switching must be correct 2/3 times.   
            </p>
            <div id="table-container">
                <table style="width: 50%">
                    <caption style="color:#918da6">All possible cases and outcomes</caption>
                    <tr>
                        <th>Door 1</th>
                        <th>Door 2</th>
                        <th>Door 3</th>
                        <th>Winning Strategy</th>
                    </tr>
                    <tr>  <td style="background-color: orange; color:green">Car</td> <td style="background-color: maroon; color: red">Goat</td>  <td  style="background-color: black; color: red">Goat</td>  <td>Stay</td>
                    </tr>   
                    <tr>  <td style="background-color: orange; color:green">Car</td> <td style="background-color: black; color: red">Goat</td>  <td style="background-color: maroon; color: red">Goat</td>  <td>Stay</td>
                    </tr>   
                    <tr>  <td style="background-color: orange; color: red">Goat</td> <td style="background-color: black; color: green">Car</td>  <td style="background-color: maroon; color: red">Goat</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: orange; color: red">Goat</td> <td style="background-color: black; color: green">Car</td>  <td style="background-color: maroon; color: red">Goat</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: orange; color: red">Goat</td> <td style="background-color: maroon; color: red">Goat</td>  <td style="background-color: black; color: green">Car</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: orange; color: red">Goat</td> <td style="background-color: maroon; color: red">Goat</td>  <td style="background-color: black; color: green">Car</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: black; color: green">Car</td> <td style="background-color: orange; color: red">Goat</td>  <td style="background-color: maroon; color: red">Goat</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: black; color: green">Car</td> <td style="background-color: orange; color: red">Goat</td>  <td style="background-color: maroon; color: red"> Goat</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: maroon; color: red">Goat</td> <td style="background-color: orange; color:green">Car</td>  <td style="background-color: black; color: red">Goat</td>  <td>Stay</td>
                    </tr>   
                    <tr>  <td  style="background-color: black; color: red">Goat</td> <td style="background-color: orange; color:green">Car</td>  <td style="background-color: maroon; color: red">Goat</td>  <td>Stay</td>
                    </tr>   
                    <tr>  <td style="background-color: maroon; color: red">Goat</td> <td style="background-color: orange; color: red">Goat</td>  <td  style="background-color: black; color: green">Car</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: maroon; color: red">Goat</td> <td style="background-color: orange; color: red">Goat</td>  <td  style="background-color: black; color: green">Car</td>  <td>Switch</td>
                    </tr>
                    <tr>  <td  style="background-color: black; color: green">Car</td> <td style="background-color: maroon; color: red">Goat</td>  <td style="background-color: orange; color: red">Goat</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td  style="background-color: black; color: green">Car</td> <td style="background-color: maroon; color: red">Goat</td>  <td style="background-color: orange; color: red">Goat</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: maroon; color: red">Goat</td> <td  style="background-color: black; color: green">Car</td>  <td style="background-color: orange; color: red">Goat</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: maroon; color: red">Goat</td> <td  style="background-color: black; color: green">Car</td>  <td style="background-color: orange; color: red">Goat</td>  <td>Switch</td>
                    </tr>   
                    <tr>  <td style="background-color: maroon; color: red">Goat</td> <td  style="background-color: black; color: red">Goat</td>  <td style="background-color: orange; color:green">Car</td>  <td>Stay</td>
                    </tr>   
                    <tr>  <td  style="background-color: black; color: red">Goat</td> <td style="background-color: maroon; color: red">Goat</td>  <td style="background-color: orange; color:green">Car</td>  <td>Stay</td>
                    </tr>
                </table>
                <div class="key-container"> 
                    <div class="key-item" style="margin-top: 20px">
                        <div class="key-color" style="background-color: orange"></div>
                        <p>Starting door</p>
                    </div>
                 
                    <div class="key-item">
                        <div class="key-color" style="background-color: maroon"></div>
                        <p>Eliminated door</p>
                    </div>
                  
                    <div class="key-item">
                        <div class="key-color" style="background-color: black"></div>
                        <p>Remaining door</p>
                    </div>
                   
                </div>
            </div>
            <h2>
                I'm still not satisfied...
            </h2>
            <p>
                However, that still might feel a little bit too much like cheating. Shouldn't the remaining door also have a 1/3 chance of winning just like the starting door?
                If not, then could I use this strategy when making everyday decisions to double my odds?
            </p> 
            <p>
                Unfortunately not. The key is that the host is eliminating a losing door, so if you picked the wrong starting door the remaining door is 
                guaranteed to be the winning door. But if you were to eliminate a door yourself, you would sometimes eliminate the winning door, in which case the remaining door would have a 1/3 chance of 
                being the correct door.
            </p>
            <p>
                What the host is doing is curating the other doors 
                and giving you the best door out of them with his extra information. This is best visualized with 100 doors and the host eliminating 98 of them. There is a 99% chance that you do not
                start with the winning door. If the winning door is not the door you started with, it will be the last one left after the host eliminates the 98 losing doors that you did not pick. Therefore,
                switching will be the winning strategy 99% of the time. It will only lose when you picked the winning door initially, which is unlikely. The following simulation allows you to test this with
                any number of doors from 3 to 100, and also reveal the winning door before you pick your door so that you can see that switching will only lose in the unlikely event that you managed to pick 
                the winning door from the start. 
            </p>
            <div id="adjustableSimulationAndData">
                <div id="adjustableSimulation">

                </div>
                <div id="settings">
                    <p>Stay: </p>
                    <p>Wins: <span id="staywins1">0</span></p> 
                    <p>Losses: <span id="staylosses1">0</span></p>
                    <p>Winrate: <span id="staywr1">N/A</span></p>
                    <p style="margin-top: 50px;">Switch: </p>
                    <p>Wins: <span id="switchwins1">0</span></p> 
                    <p>Losses: <span id="switchlosses1">0</span></p>
                    <p>Winrate: <span id="switchwr1">N/A</span></p>
                    <input type="range" id="doorCountSlider" min="3" max="100" value="100">
                    <p style="text-align: left">Doors: <span id="doorCounter">3</span></p>
                    <p id="reveal">Reveal</p>
                </div>
            </div>
           
        </div>
    <script src=monty-hall-simulation.js></script>
    <script src=monty-hall-simulation1.js></script>
    </body>
</html>