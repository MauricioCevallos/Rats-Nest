let device;



if(navigator.requestMIDIAccess){
    navigator.requestMIDIAccess().then(success,failure);
}

function failure(){
    console.log('Could not connect MIDI');
}

function updateDevices(event){
    console.log(event);
}

function success(midiAccess){
    midiAccess.addEventListener('statechange', updateDevices);
    const inputs = midiAccess.inputs;
    for (var output of midiAccess.outputs.values()){
        device = output;
    }
    inputs.forEach((input) => {
        console.log(input);
        input.addEventListener('midimessage', handleInput);

    })

    //console.log(inputs);
    colorAllBlue();
    colorKeys(60, 74);
    colorKeys(62, 74);
    colorKeys(57, 74);
    colorKeys(58, 74);
    colorKeys(59, 74);
    colorKeys(88, 74);
    colorKeys(98, 74);
    colorKeys(93, 74);
    colorKeys(95, 74);
    colorKeys(90, 74);
    colorKeys(89, 74);
    colorKeys(55, 74);
    colorKeys(51, 74);
    colorKeys(80, 74);      
    colorKeys(84, 74);
    colorKeys(47, 3);
    colorKeys(76, 3);
    colorKeys(37, 74);
    colorKeys(38,74);
    colorKeys(39,74);
    colorKeys(68, 74);
    colorKeys(69, 74);
    colorKeys(70, 74);
    colorKeys(75, 74);
    colorKeys(40, 74);
    colorKeys(45, 74);
    colorKeys(78, 74);
    colorKeys(82, 74);
    colorKeys(49, 74);
    colorKeys(50, 74);
    colorKeys(81, 74);
    colorKeys(53, 74);
    colorKeys(86, 74);
    colorKeys(79, 74);
    colorKeys(44, 74);
    colorKeys(65, 74);
    
    
}

function handleInput(input){
    //console.log(input);
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];

    switch (command) {
        case 144:
        if (velocity > 0){
            noteOn(note);
        } else {
            noteOff(note);
        }
        break;
    }
}

// functions for button pressed :
function noteOn(note){
    console.log(`note:${note} //on`);
   
    if (note == 88){
        location = "holy cheese/cheese.html";
    }

    if (note == 65){
        colorKeys(54, 5);
        colorKeys(85, 5);
        location = "moldy cheese/moldy.html";
        

    }

    if (note == 38){
        colorKeys(54, 5);
        colorKeys(85, 5);
        location = "hell/hell.html";
        
    }

    if (note == 79){
        colorKeys(54, 5);
        colorKeys(85, 5);
        location = "hole/hole.html";
    }

    if (note == 57){
        location = "moon/moon.html";
    }

    if (note == 45){
        location = "itchyNscratchy/itchyNscratchy.html";
    }

    if (note == 51){
        colorKeys(54, 5);
        colorKeys(85, 5);
        location = "trap/trap.html";
    }

}

function noteOff(note){
   

}


function colorKeys(key, clr){
    device && device.send([0x90,key,clr]);
}

function clearAll(){
    for (let i = 0; i < 100; i++){
        colorKeys(i, 0);
    }
}

function colorAll(){
    for(let i = 0; i < 100; i++){
        colorKeys(i,i);
    }
}

function colorAllBlue(){
    for(let i = 0; i < 100; i++){
        colorKeys(i, 67);
    }
}

function colorNote(note){
    
    colorKeys(note, 74);
}
