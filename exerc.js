const hora = document.querySelector('.hora');
const image = document.querySelector('.image');


function mostrarHorario () {
    const horario = new Date();
    let currentHora = horario.getHours().toString().padStart(2, '0');
    let minutes = horario.getMinutes().toString().padStart(2, '0');

     if (currentHora === 0 || currentHora > 18) { 
        document.body.style.background = '#303030';
        hora.innerHTML = `Agora é ${currentHora}:${minutes} da noite`;
        image.src = 'img/Noite.jpg'
    } else if (currentHora < 6) {
        document.body.style.background = '#103030';
        hora.innerHTML = `Agora é ${currentHora}:${minutes} da madrugada`;
        image.src = 'img/Madrugada.jpg'
    } else if (currentHora <= 12) {
        document.body.style.background = '#caaf01';
        image.src = 'img/Amanhecer01.jpg'
        hora.innerHTML = `Agora é ${currentHora}:${minutes} da manhã`;
    } else if (currentHora <= 18) {
        document.body.style.background = '#fb7500';
        hora.innerHTML = `Agora é ${currentHora}:${minutes} da tarde`;
        image.src = 'img/Tarde.jpg'
    } 
}

mostrarHorario();