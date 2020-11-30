class Historial {

    constructor(list) {

        this.list = list;

    }

    render = () => {

        var registro = document.createElement('div');
        registro.className = 'registro';

        var borrar = document.createElement('button');
        borrar.className = 'borrarButton';


        var pregunta = document.createElement('div');
        pregunta.innerHTML = this.list.pregunta;
        pregunta.className = 'pregunta';


        var promedio = document.createElement('div');
        promedio.innerHTML = 8.5;
        promedio.className = 'promedio';

        registro.appendChild(pregunta);
        registro.appendChild(promedio);
        registro.appendChild(borrar);

        const borrarElemento = () => {

            var accionDel = this.list;
            database.ref('Preguntas/' + accionDel.id).set(null);

        }
        borrar.addEventListener('click', borrarElemento);

        return registro;
    }
}