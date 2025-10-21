interface Prototype {
  clone(): Prototype;
}

class Persona implements Prototype {
 
  private nombre: string;
  private edad: number;
  private direccion: string;
  private telefono: string;
  private email: string;

  constructor(
    nombre: string,
    edad: number,
    direccion: string,
    telefono: string,
    email: string
  ) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.telefono = telefono;
    this.email = email;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public getEdad(): number {
    return this.edad;
  }

  public getDireccion(): string {
    return this.direccion;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public getEmail(): string {
    return this.email;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }

  public setDireccion(direccion: string): void {
    this.direccion = direccion;
  }

  public setTelefono(telefono: string): void {
    this.telefono = telefono;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public clone(): Persona {
    return new Persona(
      this.nombre,
      this.edad,
      this.direccion,
      this.telefono,
      this.email
    );
  }

  // Método adicional para mostrar información
  public mostrarInfo(): string {
    return `
    Nombre: ${this.nombre}
    Edad: ${this.edad} años
    Dirección: ${this.direccion}
    Teléfono: ${this.telefono}
    Email: ${this.email}`;
  }
}

console.log("═══════════════════════════════════════════════════");
console.log("  EJERCICIO 1: PATRÓN PROTOTYPE - PERSONA");
console.log("═══════════════════════════════════════════════════\n");

console.log(" CREANDO PERSONA 1 (Original):");
const persona1 = new Persona(
  "Juan Pérez",
  30,
  "Calle Principal 123, Miami",
  "+1 305-555-0101",
  "juan.perez@email.com"
);
console.log(persona1.mostrarInfo());

console.log("\ CLONANDO PERSONA 1 → PERSONA 2:");
const persona2 = persona1.clone();
persona2.setNombre("María García");
persona2.setEdad(28);
persona2.setTelefono("+1 305-555-0102");
persona2.setEmail("maria.garcia@email.com");
console.log(persona2.mostrarInfo());

console.log("\ CLONANDO PERSONA 1 → PERSONA 3:");
const persona3 = persona1.clone();
persona3.setNombre("Carlos Rodríguez");
persona3.setEdad(35);
persona3.setDireccion("Avenida Libertad 456, Miami Beach");
persona3.setTelefono("+1 305-555-0103");
persona3.setEmail("carlos.rodriguez@email.com");
console.log(persona3.mostrarInfo());

console.log("\n CLONANDO PERSONA 2 → PERSONA 4:");
const persona4 = persona2.clone();
persona4.setNombre("Ana Martínez");
persona4.setEdad(26);
persona4.setDireccion("Boulevard Central 789, Coral Gables");
persona4.setTelefono("+1 305-555-0104");
persona4.setEmail("ana.martinez@email.com");
console.log(persona4.mostrarInfo());

console.log("\n CLONANDO PERSONA 3 → PERSONA 5:");
const persona5 = persona3.clone();
persona5.setNombre("Luis Hernández");
persona5.setEdad(42);
persona5.setDireccion("Calle Secundaria 321, Hialeah");
persona5.setTelefono("+1 305-555-0105");
persona5.setEmail("luis.hernandez@email.com");
console.log(persona5.mostrarInfo());

console.log("\n═══════════════════════════════════════════════════");
console.log("  VERIFICACIÓN DE INDEPENDENCIA");
console.log("═══════════════════════════════════════════════════");
console.log("\n Persona 1 (Original) - Datos NO modificados:");
console.log(`   Nombre: ${persona1.getNombre()}`);
console.log(`   Edad: ${persona1.getEdad()}`);
console.log(`   Teléfono: ${persona1.getTelefono()}`);

console.log("\n Persona 2 (Clon modificado) - Datos SÍ modificados:");
console.log(`   Nombre: ${persona2.getNombre()}`);
console.log(`   Edad: ${persona2.getEdad()}`);
console.log(`   Teléfono: ${persona2.getTelefono()}`);

// Demostrar uso práctico
console.log("\n═══════════════════════════════════════════════════");
console.log("  USO PRÁCTICO");
console.log("═══════════════════════════════════════════════════");
console.log("\nCreando empleados de una empresa a partir de una plantilla:");

const plantillaEmpleado = new Persona(
  "Plantilla Empleado",
  25,
  "Oficina Central, Miami",
  "+1 305-555-0000",
  "empleado@empresa.com"
);

const empleados: Persona[] = [];
const nombres = ["Pedro López", "Laura Sánchez", "Miguel Torres"];

nombres.forEach((nombre, index) => {
  const empleado = plantillaEmpleado.clone();
  empleado.setNombre(nombre);
  empleado.setEdad(25 + index * 2);
  empleado.setTelefono(`+1 305-555-020${index + 1}`);
  empleado.setEmail(`${nombre.toLowerCase().replace(" ", ".")}@empresa.com`);
  empleados.push(empleado);
  console.log(`\n Empleado ${index + 1}:${empleado.mostrarInfo()}`);
});