const audioCtx = new AudioContext();
        const oscillator = audioCtx.createOscillator();
        oscillator.type = "square";
        oscillator.frequency.value = 0; // value in hertz from almost 0 to 10000 at best (for safety)
        oscillator.connect(audioCtx.destination);
    

        document.getElementById('stop').addEventListener('click', function(){ oscillator.start();})
        let damn = '@'
        document.getElementById('start').addEventListener('keydown', function graj(event){
            
            const key = event.key;
        console.log(key);
        if (key === 'a') {
            oscillator.frequency.value = 261.6256;
            document.getElementById("keys" + key).style.backgroundColor = "#808080";
        } else if (key === 'w') {
            oscillator.frequency.value = 277.1826;
            document.getElementById("keys" + key).style.backgroundColor = "#1f1f1f";
        } else if (key === 's') {
            oscillator.frequency.value = 293.6648;
            document.getElementById("keys" + key).style.backgroundColor = "#808080";
        } else if (key === 'e') {
            oscillator.frequency.value = 311.1270;
            document.getElementById("keys" + key).style.backgroundColor = "#1f1f1f";
        } else if (key === 'd') {
            oscillator.frequency.value = 329.6276;
            document.getElementById("keys" + key).style.backgroundColor = "#808080";
        } else if (key === 'f') {
            oscillator.frequency.value = 349.2282;
            document.getElementById("keys" + key).style.backgroundColor = "#808080";
        } else if (key === 't') {
            oscillator.frequency.value = 369.9944;
            document.getElementById("keys" + key).style.backgroundColor = "#1f1f1f";
        } else if (key === 'g') {
            oscillator.frequency.value = 391.9954;
            document.getElementById("keys" + key).style.backgroundColor = "#808080";
        } else if (key === 'y') {
            oscillator.frequency.value = 415.3047;
            document.getElementById("keys" + key).style.backgroundColor = "#1f1f1f";
        } else if (key === 'h') {
            oscillator.frequency.value = 440.0000;
            document.getElementById("keys" + key).style.backgroundColor = "#808080";
        } else if (key === 'u') {
            oscillator.frequency.value = 466.1638;
            document.getElementById("keys" + key).style.backgroundColor = "#1f1f1f";
        } else if (key === 'j') {
            oscillator.frequency.value = 493.8833;
            document.getElementById("keys" + key).style.backgroundColor = "#808080";
        } else if (key === 'k') {
            oscillator.frequency.value = 523.2511;
            document.getElementById("keys" + key).style.backgroundColor = "#808080";
        } 


        setTimeout(() => {
            if(damn == key){
                oscillator.frequency.value = 0;
            }
            if(key === 'a' || key === 's' || key === 'd' || key === 'f' || key === 'g' || key === 'h' || key == 'j' || key == 'k'){
                document.getElementById("keys" + key).style.backgroundColor = "#ffffff";}
            if(key === 'w' || key === 'e' || key === 't' || key === 'y' || key === 'u'){
                    document.getElementById("keys" + key).style.backgroundColor = "#000000";}
        
        
        }, 600);
        damn = key
            })