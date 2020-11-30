const descripcionPregunta = document.getElementById('descripcionPregunta');
const guardar = document.getElementById('agg');

const database = firebase.database();

const apartadoHistorial = document.getElementById('historial');
const apartadoPreguntaActual = document.getElementById('preguntaActual');

guardarPregunta = () => {

    let dP = descripcionPregunta.value;
    let envio = database.ref('Preguntas').push();

    if (dP == '' || dP == ' '){

        alert('Diligencia tu pregunta para enviarla');
        return;

    }

    let objetoPregunta = {

        id : envio.key,
        pregunta : dP,
        estado : 'PreguntaActual'

    }
    envio.set(objetoPregunta);
    descripcionPregunta.value = '';

}
guardar.addEventListener('click', guardarPregunta);

database.ref('Preguntas').on('value',function(data){

    data.forEach(
        
        list => {

            switch(list.val().estado) {

                case 'PreguntaActual':

                    apartadoPreguntaActual.innerHTML = '';

                    let val = list.val();
                    let act = new PreguntaActual(val);
                    apartadoPreguntaActual.appendChild(act.render());

                break;

                case 'Historial':

                    apartadoHistorial.innerHTML = '';

                    let valor = list.val();
                    let actividad = new Historial(valor);
                    apartadoHistorial.appendChild(actividad.render());

                break;

            }
        
    });

});