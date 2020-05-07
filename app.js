// const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case 'listar':
    let listado = porHacer.getListado();
    for (const lista of listado) {
      console.log('=====LISTADO DE TAREAS====='.green);
      console.log(colors.blue(lista.descripcion));
      console.log(colors.yellow(`Estado: ${lista.completado}`));
      console.log('===========================\n'.green);
    }
    break;
  case 'actualizar':
    let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case 'borrar':
    let borrado = porHacer.borrar(argv.descripcion);
    console.log(borrado);
    break;
  default:
    console.log('Comando no reconocido.');
}
