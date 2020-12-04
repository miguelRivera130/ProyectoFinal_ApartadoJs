class PreguntaActual {

    constructor(list) {

        this.list = list;

    }

    render = () => {

        var casillaPregunta = document.createElement('div');
        casillaPregunta.className = 'casillaPregunta';

        var mov = document.createElement('button');
        mov.className = 'movTask';

        var Pa = document.createElement('div');
        Pa.innerHTML = this.list.pregunta;
        Pa.className = 'Pa';


        var promedioPa = document.createElement('div');
        promedioPa.innerHTML = 8.5;
        promedioPa.className = 'promedioPa';

        casillaPregunta.appendChild(Pa);
        casillaPregunta.appendChild(promedioPa);
        casillaPregunta.appendChild(mov);


        const cambioPa = () => {

            var accionMov = this.list

            accionMov.estado = 'Historial';
            database.ref('Preguntas/' + accionMov.id).set(accionMov);

        };
        mov.addEventListener('click', cambioPa);

        return casillaPregunta;
    };
}