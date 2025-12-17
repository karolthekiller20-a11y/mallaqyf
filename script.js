const mallaData = {
  "1° Semestre": [
    { id: "QFAR111", nombre: "Química General I", req: [] },
    { id: "QFAR112", nombre: "Matemáticas", req: [] },
    { id: "QFAR113", nombre: "Biología Celular", req: [] },
    { id: "QFAR114", nombre: "Introducción al Laboratorio", req: [] },
    { id: "QFAR115", nombre: "Introducción a la Química", req: [] },
    { id: "QFAR116", nombre: "Anatomía", req: [] },
    { id: "TNL", nombre: "Taller Nivelación Lengua Materna", req: [] }
  ],

  "2° Semestre": [
    { id: "QFAR121", nombre: "Química General II", req: ["QFAR111", "QFAR114"] },
    { id: "QFAR122", nombre: "Cálculo", req: ["QFAR112"] },
    { id: "QFAR123", nombre: "Fisiología I", req: ["QFAR113", "QFAR116"] },
    { id: "QFAR124", nombre: "Química Orgánica I", req: ["QFAR111", "QFAR114"] },
    { id: "QFAR125", nombre: "Introducción a la Estadística", req: ["QFAR112"] },
    { id: "TNI", nombre: "Taller Nivelación Inglés", req: [] }
  ],

  "3° Semestre": [
    { id: "QFAR211", nombre: "Química Orgánica II", req: ["QFAR121", "QFAR124"] },
    { id: "QFAR212", nombre: "Química Analítica", req: ["QFAR121", "QFAR122"] },
    { id: "QFAR213", nombre: "Fisiología II", req: ["QFAR123"] },
    { id: "QFAR214", nombre: "Administración de Organizaciones", req: ["QFAR112", "TNL"] },
    { id: "QFAR215", nombre: "Bioquímica", req: ["QFAR113", "QFAR124"] },
    { id: "QFAR216", nombre: "Ética", req: ["TNL"] }
  ],

  "4° Semestre": [
    { id: "QFAR221", nombre: "Botánica", req: ["QFAR113", "QFAR124"] },
    { id: "QFAR222", nombre: "Análisis Instrumental", req: ["QFAR212"] },
    { id: "QFAR223", nombre: "Fisiopatología", req: ["QFAR213"] },
    { id: "QFAR224", nombre: "Fisicoquímica", req: ["QFAR121", "QFAR122"] },
    { id: "QFAR225", nombre: "Administración de RRHH", req: ["QFAR214", "QFAR216"] },
    { id: "QFAR226", nombre: "Introducción a la Química Farmacéutica", req: ["QFAR211"] }
  ]
};
const contenedor = document.getElementById("malla");
let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

function guardar() {
  localStorage.setItem("aprobados", JSON.stringify(aprobados));
}

function cumpleReq(reqs) {
  return reqs.every(r => aprobados.includes(r));
}

function render() {
  contenedor.innerHTML = "";

  for (const semestre in mallaData) {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h2>${semestre}</h2>`;

    mallaData[semestre].forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.innerText = `${ramo.id} · ${ramo.nombre}`;

      const habilitado = cumpleReq(ramo.req);

      if (!habilitado) div.classList.add("bloqueado");
      if (aprobados.includes(ramo.id)) div.classList.add("aprobado");

      div.onclick = () => {
        if (!habilitado) return;

        if (aprobados.includes(ramo.id)) {
          aprobados = aprobados.filter(r => r !== ramo.id);
        } else {
          aprobados.push(ramo.id);
        }
        guardar();
        render();
      };

      col.appendChild(div);
    });

    contenedor.appendChild(col);
  }
}

render();
