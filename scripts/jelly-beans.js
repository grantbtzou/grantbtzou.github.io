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
    current_pull.style.animation = 'none';
    current_pull.offsetHeight; /* trigger reflow */
    current_pull.style.animation = null;    
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