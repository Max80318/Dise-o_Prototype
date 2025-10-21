interface Prototype {
  clone(): Prototype;
}

// 2. CLASE ANIMAL
class Animal implements Prototype {
  // Atributos/Propiedades privadas
  private nombre: string;
  private especie: string;
  private edad: number;
  private peso: number;
  private habitat: string;
  private sonido: string;

  // Constructor de Animal
  constructor(
    nombre: string,
    especie: string,
    edad: number,
    peso: number,
    habitat: string,
    sonido: string
  ) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;
    this.habitat = habitat;
    this.sonido = sonido;
  }

  // Métodos para acceder a propiedades (Getters)
  public getNombre(): string {
    return this.nombre;
  }

  public getEspecie(): string {
    return this.especie;
  }

  public getEdad(): number {
    return this.edad;
  }

  public getPeso(): number {
    return this.peso;
  }

  public getHabitat(): string {
    return this.habitat;
  }

  public getSonido(): string {
    return this.sonido;
  }

  // Métodos para modificar propiedades (Setters)
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public setEspecie(especie: string): void {
    this.especie = especie;
  }

  public setEdad(edad: number): void {
    this.edad = edad;
  }

  public setPeso(peso: number): void {
    this.peso = peso;
  }

  public setHabitat(habitat: string): void {
    this.habitat = habitat;
  }

  public setSonido(sonido: string): void {
    this.sonido = sonido;
  }

  // MÉTODO CLONE 
  public clone(): Animal {
    return new Animal(
      this.nombre,
      this.especie,
      this.edad,
      this.peso,
      this.habitat,
      this.sonido
    );
  }

  // Métodos para acciones que realiza un animal
  public emitirSonido(): string {
    return `${this.nombre} hace: ${this.sonido}`;
  }

  public comer(): string {
    return `${this.nombre} está comiendo..`;
  }

  public dormir(): string {
    return `${this.nombre} está durmiendo...`;
  }

  public moverse(): string {
    return `${this.nombre} se está moviendo por su ${this.habitat}`;
  }

  public jugar(): string {
    return `${this.nombre} está jugando alegremente `;
  }

  // Método para mostrar información completa del animal
  public mostrarInfo(): string {
    return `
    Nombre: ${this.nombre}
    Especie: ${this.especie}
    Edad: ${this.edad} años
    Peso: ${this.peso} kg
    Hábitat: ${this.habitat}
    Sonido: ${this.sonido}`;
  }
}

// ==================== CONSOLA PARA PROBAR ====================

console.log("═══════════════════════════════════════════════════");
console.log("  EJERCICIO 2: PATRÓN PROTOTYPE - ANIMAL");
console.log("═══════════════════════════════════════════════════\n");

// Animal 1 (Original - León)
console.log(" CREANDO ANIMAL 1 (Original - León):");
const animal1: Animal = new Animal(
  "Simba",
  "Panthera leo (León)",
  5,
  190,
  "Sabana africana",
  "ROAAAAR! "
);
console.log(animal1.mostrarInfo());

// Animal 2 (Clonado de Animal 1 - Modificado a Tigre)
console.log("\n CLONANDO ANIMAL 1 → ANIMAL 2 (Tigre):");
const animal2: Animal = animal1.clone();
animal2.setNombre("Shere Khan");
animal2.setEspecie("Panthera tigris (Tigre)");
animal2.setEdad(6);
animal2.setPeso(220);
animal2.setHabitat("Selva tropical de Asia");
animal2.setSonido("GRRRR! ");
console.log(animal2.mostrarInfo());

// Animal 3 (Clonado de Animal 1 - Modificado a Elefante)
console.log("\nCLONANDO ANIMAL 1 → ANIMAL 3 (Elefante):");
const animal3: Animal = animal1.clone();
animal3.setNombre("Dumbo");
animal3.setEspecie("Loxodonta africana (Elefante africano)");
animal3.setEdad(8);
animal3.setPeso(5000);
animal3.setHabitat("Sabana y bosques africanos");
animal3.setSonido("PRRRUUUU! ");
console.log(animal3.mostrarInfo());

// Animal 4 (Clonado de Animal 2 - Modificado a Delfín)
console.log("\n CLONANDO ANIMAL 2 → ANIMAL 4 (Delfín):");
const animal4: Animal = animal2.clone();
animal4.setNombre("Flipper");
animal4.setEspecie("Tursiops truncatus (Delfín mular)");
animal4.setEdad(4);
animal4.setPeso(200);
animal4.setHabitat("Océano Atlántico");
animal4.setSonido("Click-click-whistle! ");
console.log(animal4.mostrarInfo());

// Animal 5 (Clonado de Animal 3 - Modificado a Águila)
console.log("\n CLONANDO ANIMAL 3 → ANIMAL 5 (Águila):");
const animal5: Animal = animal3.clone();
animal5.setNombre("Zeus");
animal5.setEspecie("Aquila chrysaetos (Águila real)");
animal5.setEdad(3);
animal5.setPeso(6);
animal5.setHabitat("Montañas y acantilados");
animal5.setSonido("SKREEEE! ");
console.log(animal5.mostrarInfo());

// ==================== DEMOSTRAR ACCIONES DE LOS ANIMALES ====================

console.log("\n═══════════════════════════════════════════════════");
console.log("   ACCIONES DE LOS ANIMALES");
console.log("═══════════════════════════════════════════════════");

console.log("\n Emitiendo sonidos:");
console.log(`   ${animal1.emitirSonido()}`);
console.log(`   ${animal2.emitirSonido()}`);
console.log(`   ${animal3.emitirSonido()}`);

console.log("\n Alimentación:");
console.log(`   ${animal1.comer()}`);
console.log(`   ${animal4.comer()}`);

console.log("\n Hora de dormir:");
console.log(`   ${animal2.dormir()}`);
console.log(`   ${animal5.dormir()}`);

console.log("\n Movimiento:");
console.log(`   ${animal1.moverse()}`);
console.log(`   ${animal4.moverse()}`);

console.log("\n Jugando:");
console.log(`   ${animal3.jugar()}`);
console.log(`   ${animal5.jugar()}`);

console.log("\n═══════════════════════════════════════════════════");
console.log("   VERIFICACIÓN DE INDEPENDENCIA");
console.log("═══════════════════════════════════════════════════");
console.log("\n Animal 1 (Original) - Datos NO modificados:");
console.log(`   Nombre: ${animal1.getNombre()}`);
console.log(`   Especie: ${animal1.getEspecie()}`);
console.log(`   Peso: ${animal1.getPeso()} kg`);

console.log("\n Animal 2 (Clon modificado) - Datos SÍ modificados:");
console.log(`   Nombre: ${animal2.getNombre()}`);
console.log(`   Especie: ${animal2.getEspecie()}`);
console.log(`   Peso: ${animal2.getPeso()} kg`);

console.log("\n═══════════════════════════════════════════════════");
console.log("   ZOOLÓGICO VIRTUAL");
console.log("═══════════════════════════════════════════════════");
console.log("\n Creando sección de mamíferos usando prototipos:");

// Plantilla base para todos los mamíferos
const plantillaMamifero: Animal = new Animal(
  "Mamífero Base",
  "Mammalia",
  2,
  100,
  "Terrestre",
  "Sonido genérico"
);

// Interface para datos de mamíferos
interface DatosMamifero {
  nombre: string;
  especie: string;
  sonido: string;
  peso: number;
  habitat: string;
}

// Array de mamíferos a crear
const mamiferos: DatosMamifero[] = [
  { 
    nombre: "Luna", 
    especie: "Canis lupus (Lobo)", 
    sonido: "AUUUU! ", 
    peso: 45,
    habitat: "Bosque templado de América del Norte"
  },
  { 
    nombre: "Cheetah", 
    especie: "Acinonyx jubatus (Guepardo)", 
    sonido: "Chirp-chirp! ", 
    peso: 72,
    habitat: "Sabana africana"
  },
  { 
    nombre: "Bruno", 
    especie: "Ursus arctos (Oso pardo)", 
    sonido: "GROAAAR! ", 
    peso: 400,
    habitat: "Bosque montañoso"
  }
];

console.log("\n Animales registrados en el zoológico:");
mamiferos.forEach((datos: DatosMamifero, index: number) => {
  // Clonar la plantilla para cada mamífero
  const mamifero: Animal = plantillaMamifero.clone();
  
  // Personalizar el clon con datos específicos
  mamifero.setNombre(datos.nombre);
  mamifero.setEspecie(datos.especie);
  mamifero.setSonido(datos.sonido);
  mamifero.setPeso(datos.peso);
  mamifero.setHabitat(datos.habitat);
  
  console.log(`\nAnimal ${index + 1} del Zoológico:${mamifero.mostrarInfo()}`);
  console.log(`   Acción: ${mamifero.emitirSonido()}`);
  console.log(`   Estado: ${mamifero.jugar()}`);
})