console.log(navigator);

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
    inputs.forEach((input) => {
        console.log(input);
        input.addEventListener('midimessage', handleInput);

    })

    //console.log(inputs);
}

function handleInput(input){
    //console.log(input);
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];

    console.log(`command ${command} , note: ${note}, velocity: ${velocity}`);

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

function noteOn(note){
    console.log(`note:${note} //on`);
    if (note == 99){
        document.getElementById("testelm").innerHTML = "( ͡° ͜ʖ ͡°)";
    }
}

function noteOff(note){
    console.log(`note:${note} //off`)
    if (note == 99){
        document.getElementById("testelm").innerHTML = "";
    }
}