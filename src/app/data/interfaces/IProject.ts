export interface IProject {
    id:number,
    nombre:string;
    fecha:string;
    imagen:string;
    view:boolean;
    programas:Array<{nombre:string}>;
}