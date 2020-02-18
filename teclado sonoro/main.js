const ctx = new AudioContext();

function playNote(freq) {
    const gain = ctx.createGain();
    const oscillatorSine = ctx.createOscillator();

        gain.connect(ctx.destination);
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 1);
        oscillatorSine.connect(gain);
        oscillatorSine.frequency.value = freq;
        oscillatorSine.type = 'sine';
        oscillatorSine.start();
        oscillatorSine.stop(ctx.currentTime + 1);
        oscillatorSine.onended = () => {
          gain.disconnect();
          oscillatorSine.disconnect();
    }
}

kinput.onkeydown = handle;
function handle(e) {
    if (e.key == 'a')
    {
        playNote(455);
    }else if (e.key == 's')
    {
        playNote(645);
    }else if (e.key == 'j')
    {
        playNote(845);
    }else if (e.key == 'k')
    {
        playNote(987);
    }
  if (form.elements[e.type + 'Stop'].checked) {
    e.preventDefault();
  }
}