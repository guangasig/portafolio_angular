import { IProject } from "@data/interfaces/IProject";

export const PROJECTS_DATA:IProject[] = [
    { 
      id:1,
      nombre: "Proyecto 1", 
      fecha: "Noviwembre 2018 Abril 2019",
      imagen: "assets/images/projects/project-coop.png",
      programas:[
        { nombre:".Net" },
        { nombre:"SqlServer" },
        { nombre:"Aspose Pdf .Microsoft Excel" }
      ]
    },
    { 
      id:2,
      nombre: "Proyecto 1", 
      fecha: "Ocubre 2019 Abril 2020",
      imagen: "assets/images/projects/project-istlama.png",
      programas:[
        { nombre:"Laravel" },
        { nombre:"MySql" },
        { nombre:"JQuery" }
      ]
    },
    { 
      id:3,
      nombre: "Proyecto 3", 
      fecha: "Mayo 2022",
      imagen: "assets/images/projects/project-portafolio.png",
      programas:[
        { nombre:"CodeIgniter" },
        { nombre:"React" },
        { nombre:"MySql" }
      ]
    },

    { 
      id:4,
      nombre: "Proyecto 4", 
      fecha: "Junio 2022",
      imagen: "assets/images/projects/project-carlitos.png",
      programas:[
        { nombre:"React" },
        { nombre:"Tailwind CSS" }
      ]
    },

    { 
      id:4,
      nombre: "Proyecto 5", 
      fecha: "Enero 2023",
      imagen: "assets/images/projects/controelectoral.png",
      programas:[
        { nombre:"Vue.js" },
        { nombre:"MySql" },
        { nombre:"Laravel" }
      ]
    },

  ]