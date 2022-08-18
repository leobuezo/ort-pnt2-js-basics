/**
 * Hacer una funcion que dado un array de participantes del curso me devuelva el alumno con mayor edad.
 *
 * [
 *  {
 *    firstName,
 *    lastName,
 *    age
 *  },
 *  ...,
 *  n
 * ]
 */

function mayorEdad(listaAlumnos) {
  let maxEdad = -1;
  let maxAlumno = {};
  for (let i = 0; i < listaAlumnos.length; i++) {
    if (listaAlumnos[i].age > maxEdad) {
      maxEdad = listaAlumnos[i].age;
      maxAlumno = Object.assign({}, listaAlumnos[i]);
    }
  }
  return maxAlumno;
}

function obtenerParticipanteMayorEdad(participantes) {
  return participantes.reduce(function (a, b) {
    return a.age > b.age ? a : b;
  });
}

const listaAlumnosOrt = [
  { firstName: 'Leo', lastName: 'Buezo', age: 39 },
  { firstName: 'Mauro', lastName: 'Casciati', age: 29 },
  { firstName: 'Matias', lastName: 'Rivas', age: 30 },
  { firstName: 'Marce', lastName: 'Raggio', age: 54 },
  { firstName: 'Luis', lastName: 'Buezo', age: 27 },
];

console.log('***********************');
console.log('Ejercicio hecho por Leo');
const alumno = mayorEdad(listaAlumnosOrt);
console.log(
  `El alumno ${alumno.firstName} ${alumno.lastName} es el de mayor edad con ${alumno.age} años.`
);
const otroAlumno = obtenerParticipanteMayorEdad(listaAlumnosOrt);
console.log(
  `Usando reduce... El alumno ${otroAlumno.firstName} ${otroAlumno.lastName} es el de mayor edad con ${otroAlumno.age} años.`
);
