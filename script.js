let app =  document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true, //bucle de eventos
    Delay: 75, //tiempo que toma el caracter para aparecer en el DOM
});

typewriter
.pauseFor(2500)//agrega evento de pausa a la cola milisegundos
.typeString('Estoy tomando cursos de tecnologia en donde desarrollo sitios web con la estructura de HTML y CSS,sobre programacion.') 
.pauseFor(200)
.deletechars(10) //borra  los caracteres de la cola de la cadena
.start();//inicia el blucle de eventos 


/*typewriter es un plugin(funcionalidad mas) de JS que permite escribir y borrar caract*/