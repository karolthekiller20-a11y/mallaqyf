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
};  "5° Semestre": [
    { id: "QFAR311", nombre: "Farmacognosia", req: ["QFAR211", "QFAR221"] },
    { id: "QFAR312", nombre: "Biología Molecular", req: ["QFAR215"] },
    { id: "QFAR313", nombre: "Operaciones Unitarias", req: ["QFAR224"] },
    { id: "QFAR314", nombre: "Química Farmacéutica I", req: ["QFAR213", "QFAR226"] },
    { id: "QFAR315", nombre: "Asignatura Electiva Profesional", req: ["QFAR216"] },
    { id: "QFAR316", nombre: "Microbiología", req: ["QFAR215"] },
    { id: "QFAR317", nombre: "Legislación Farmacéutica", req: ["QFAR214"] }
  ],

  "6° Semestre": [
    { id: "QFAR321", nombre: "Biofarmacia", req: ["QFAR222", "QFAR213"] },
    { id: "QFAR322", nombre: "Farmacología I", req: ["QFAR223", "QFAR314"] },
    { id: "QFAR323", nombre: "Inmunología", req: ["QFAR312", "QFAR223"] },
    { id: "QFAR324", nombre: "Química Farmacéutica II", req: ["QFAR314", "QFAR316"] },
    { id: "QFAR325", nombre: "Práctica Profesional Farmacia I", req: ["QFAR225", "QFAR216", "QFAR317"] },
    { id: "QFAR326", nombre: "Bioestadística", req: ["QFAR112", "QFAR216"] }
  ],

  "7° Semestre": [
    { id: "QFAR411", nombre: "Tecnología Farmacéutica I", req: ["QFAR321", "QFAR313"] },
    { id: "QFAR412", nombre: "Farmacología II", req: ["QFAR322", "QFAR324"] },
    { id: "QFAR413", nombre: "Química Fisiológica y Patológica", req: ["QFAR222", "QFAR323"] },
    { id: "QFAR414", nombre: "Salud Pública y Epidemiología", req: ["QFAR216", "QFAR326"] },
    { id: "QFAR415", nombre: "Química de Alimentos", req: ["QFAR222"] },
    { id: "QFAR416", nombre: "Metodología de la Investigación", req: ["QFAR216", "QFAR326"] },
    { id: "TIP I", nombre: "Taller Integración Perfil de Egreso I", req: ["QFAR325"] }
  ],

  "8° Semestre": [
    { id: "QFAR421", nombre: "Tecnología Farmacéutica II", req: ["QFAR411"] },
    { id: "QFAR422", nombre: "Farmacia Asistencial", req: ["QFAR414", "QFAR225"] },
    { id: "QFAR423", nombre: "Nutrición", req: ["QFAR413", "QFAR415"] },
    { id: "QFAR424", nombre: "Gestión de Calidad", req: ["QFAR411", "QFAR317"] },
    { id: "QFAR425", nombre: "Bioquímica Clínica", req: ["QFAR413"] },
    { id: "QFAR426", nombre: "Seminario de Licenciatura", req: [
        "QFAR411","QFAR412","QFAR413","QFAR414","QFAR415","QFAR416","TIP I"
      ] },
    { id: "TIP II", nombre: "Taller Integración Perfil de Egreso II", req: ["TIP I"] }
  ],

  "9° Semestre": [
    { id: "QFAR511", nombre: "Farmacia Clínica I", req: [
        "QFAR421","QFAR422","QFAR423","QFAR424","QFAR425","QFAR426","TIP II"
      ] },
    { id: "QFAR512", nombre: "Cosmética", req: ["QFAR421"] },
    { id: "QFAR513", nombre: "Toxicología", req: ["QFAR412"] },
    { id: "QFAR514", nombre: "Gestión Comercial", req: ["QFAR424", "QFAR225"] },
    { id: "QFAR515", nombre: "Medicamentos Complementarios", req: ["QFAR412", "QFAR423"] },
    { id: "QFAR516", nombre: "Práctica Profesional II", req: ["QFAR412", "QFAR325"] },
    { id: "TIP III", nombre: "Taller Integración Perfil de Egreso III", req: ["TIP II"] }
  ],

  "10° Semestre": [
    { id: "QFAR521", nombre: "Asignatura Electiva Profesional", req: ["QFAR216"] },
    { id: "QFAR522", nombre: "Farmacia Clínica II", req: ["QFAR511"] },
    { id: "QFAR523", nombre: "Unidad de Investigación I o Internado I", req: ["QFAR416", "QFAR426"] },
    { id: "QFAR524", nombre: "Práctica Profesional III", req: [
        "QFAR421","QFAR222","QFAR422","QFAR513","QFAR415","QFAR425"
      ] }
  ],

  "11° Semestre": [
    { id: "QFAR611", nombre: "Unidad de Investigación II o Internado II", req: ["QFAR523"] }
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
