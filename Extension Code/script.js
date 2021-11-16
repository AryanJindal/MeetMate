const recbt = document.getElementById('rec');
const paubt = document.getElementById('pau');
const resbt = document.getElementById('res');
const stopbt = document.getElementById('stop');
const speech_nt_clkbt = document.getElementById('speech_nt_clk');
const speech_clkbt = document.getElementById('speech_clk');


recbt.addEventListener('click', function() {
    recbt.style.display = 'none';
    paubt.style.display = 'inline-block';
    stopbt.style.cssText = `
    opacity : 1;
    cursor: pointer;
    `
    stopbt.disabled = false;
})

paubt.addEventListener('click', function() {
    paubt.style.display = 'none';
    resbt.style.display = 'inline-block';
})

resbt.addEventListener('click', function() {
    resbt.style.display = 'none';
    paubt.style.display = 'inline-block';
})

stopbt.addEventListener('click', function() {
    resbt.style.display = 'none';
    paubt.style.display = 'none';
    recbt.style.display = 'inline-block';
    stopbt.style.cssText = `
    opacity : 0.5;
    cursor: not-allowed;
    `
    stopbt.disabled = false;
})

speech_nt_clk.addEventListener('click', function() {
    speech_nt_clkbt.style.display = 'none';
    speech_clkbt.style.display = 'inline-block';
})


speech_clk.addEventListener('click', function() {
    speech_clkbt.style.display = 'none';
    speech_nt_clkbt.style.display = 'inline-block';
})
