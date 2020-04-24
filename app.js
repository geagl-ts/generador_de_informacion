const faker = require("faker");
const fs = require("fs");

function generate(cantidadDeElementos) {
  const data = [];

  for (let i = 0; i < cantidadDeElementos; i++) {
    data.push({
      id: faker.random.uuid(),
      //name: faker.name.firstName() + " " + faker.name.lastName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
    });
  }

  return {
    data,
  };
}

function crearArchivo(nombre, tipo_de_archivo, data) {
  fs.writeFileSync(
    `${nombre}.${tipo_de_archivo}`,
    JSON.stringify(data, null, "\t")
  );
}

//* datos
const data = generate(20);
//* generar el archivo
crearArchivo("usuarios", "json", data);
