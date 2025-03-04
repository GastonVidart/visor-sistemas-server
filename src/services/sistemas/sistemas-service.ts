const SISTEMAS_MOCK = [
  {
    id: "1",
    nombre: "Pehuen Client",
    descripcion: "Descripción del sistema 1",
    conectado: ["2"],
    tipo: "CLIENTE",
    tecnologias: ["REACT", "TYPESCRIPT"],
    entorno: ["DEVELOP"],
  },
  {
    id: "2",
    nombre: "Pehuen Server",
    descripcion: "Descripción del sistema 2",
    conectado: ["3", "4"],
    tipo: "SERVER",
    tecnologias: ["NODE", "TYPESCRIPT"],
    entorno: ["DEVELOP"],
  },
  {
    id: "5",
    nombre: "BDsPehuen",
    descripcion: "Descripción del sistema 5",
    tipo: "BaseDatos",
    tecnologias: ["MYSQL"],
    entorno: ["DEVELOP"],
  },
  {
    id: "3",
    nombre: "Servicio Pdf",
    descripcion: "Descripción del sistema 3",
    tipo: "SERVICIO",
    tecnologias: ["JAVA", "SPRINGBOOT"],
    entorno: ["DEVELOP"],
  },
  {
    id: "4",
    nombre: "Servicio Minio",
    descripcion: "Descripción del sistema 4",
    tipo: "SERVICIO",
    tecnologias: ["JAVA", "SPRINGBOOT"],
    entorno: ["DEVELOP"],
  },
];

function getSistemas() {
  //Aca al armar la recursiva
  return SISTEMAS_MOCK;
}

function getSistemaById(id: string) {
  console.log("🚀[TESTING] || getSistemaById || id:", id)
  return SISTEMAS_MOCK.find((sistema) => sistema.id === id);
}

export { getSistemaById, getSistemas };

