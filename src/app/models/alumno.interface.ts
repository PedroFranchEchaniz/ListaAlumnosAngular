export interface Student {
    id: string;
    name: string;
    lastname: string;
    sexo: string;
    edad: number;
    modulos: Modulos[]
}

export interface Modulos {

    nombre: string,
    horas: number
}