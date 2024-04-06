import { IProject } from "@data/interfaces/IProject";

export const PROJECTS_DATA:IProject[] = [
    { 
      id:1,
      nombre: "Proyecto 1", 
      fecha: "Noviembre 2018 Abril 2019",
      imagen: "assets/images/projects/project-coop.png",
      view: true,
      programas:[
        { nombre:".Net" },
        { nombre:"SqlServer" },
        { nombre:"Aspose Pdf .Microsoft Excel" }
      ],
    },
    { 
      id:2,
      nombre: "Proyecto 1", 
      fecha: "Octubre 2019 Abril 2020",
      imagen: "assets/images/projects/project-istlama.png",
      view: true,
      programas:[
        { nombre:"Laravel" },
        { nombre:"MySql" },
        { nombre:"JQuery" }
      ],
    },
    { 
      id:3,
      nombre: "Proyecto 3", 
      fecha: "Marzo 2021",
      imagen: "assets/images/projects/project-haku.png",
      view: true,
      programas:[
        { nombre:"Laravel" },
        { nombre:"Vue" },
        { nombre:"MySql" }
      ],
    },

    { 
      id:4,
      nombre: "Proyecto 4", 
      fecha: "Marzo 2022",
      view: true,
      imagen: "assets/images/projects/project-portafolio.png",
      programas:[
        { nombre:"CodeIgniter" },
        { nombre:"React" },
        { nombre:"MySql" }
      ],
    },

    { 
      id:5,
      nombre: "Proyecto 5", 
      fecha: "Junio 2022",
      view: true,
      imagen: "assets/images/projects/project-carlitos.png",
      programas:[
        { nombre:"React" },
        { nombre:"Tailwind CSS" }
      ],
    },
    
    { 
      id:6,
      nombre: "Proyecto 6", 
      fecha: "Noviembre 2022",
      imagen: "assets/images/projects/project-guaranda.png",
      view: true,
      programas:[
        { nombre:"Vue.js" },
        { nombre:"MySql" },
        { nombre:"Laravel" }
      ],
    },

    { 
      id:7,
      nombre: "Proyecto 7", 
      fecha: "Enero 2023",
      imagen: "assets/images/projects/controelectoral.png",
      view: true,
      programas:[
        { nombre:"Vue.js" },
        { nombre:"MySql" },
        { nombre:"Laravel" }
      ],
    },

    { 
      id:8,
      nombre: "Proyecto 8", 
      fecha: "Enero 2023",
      imagen: "assets/images/projects/project-salcedo.png",
      view: true,
      programas:[
        { nombre:"Vue.js" },
        { nombre:"MySql" },
        { nombre:"Laravel" }
      ],
    },

    { 
      id:9,
      nombre: "Proyecto 9", 
      fecha: "Enero 2023",
      imagen: "assets/images/projects/project-ambato.png",
      view: true,
      programas:[
        { nombre:"Vue.js" },
        { nombre:"MySql" },
        { nombre:"Laravel" }
      ],
    },

  ]