const descripcion = {
  alias: 'd',
  type: String,
  demand: true,
  desc: 'Descripcion de la tarea por hacer.',
};
const completado = {
  alias: 'c',
  type: Boolean,
  default: true,
  demand: true,
  desc: 'Marca la tarea con un estado de completado o pendiente.',
};

const argv = require('yargs')
  .command('crear', 'Crea una nueva tarea por hacer.', {
    descripcion: descripcion,
  })
  .command('actualizar', 'Actualiza una tarea por hacer existente.', {
    descripcion: descripcion,
    completado: completado,
  })
  .command('borrar', 'Borra una tarea por hacer existente.', {
    descripcion: descripcion,
  })
  .help().argv;

module.exports = {
  argv,
};
