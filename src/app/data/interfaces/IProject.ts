export interface IProject {
    id:number,
    nombre:string;
    fecha:string;
    imagen:string;
    programas:Array<{nombre:string}>;
}