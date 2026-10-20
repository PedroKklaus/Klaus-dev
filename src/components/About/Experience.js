import React from "react";

// Dados do currículo (Pedro_Henrique_Klaus_Curriculo.pdf)
const jobs = [
  {
    role: "Desenvolvedor Full-Stack Pleno",
    company: "Linked Data",
    place: "Curitiba",
    period: "mai/2025 – atual",
    items: [
      "Desenvolvo de ponta a ponta uma plataforma web de gestão com Next.js, React, TypeScript, C#, ASP.NET Core e SQL Server, em arquitetura de camadas (APIs REST, services e repositories).",
      "Construí os módulos de tarefas/Kanban, eventos, documentos, grupos de trabalho e notificações, com controle de acesso por perfis.",
      "Integrei a plataforma ao Google Calendar, Google Meet e Gmail via OAuth 2.0.",
      "Implementei notificações em tempo real com SignalR, jobs em segundo plano com Hangfire e armazenamento de arquivos no Azure Blob Storage.",
      "Desenvolvi recursos com IA generativa e atuo na correção de bugs e na melhoria contínua de UX/UI.",
    ],
  },
  {
    role: "Desenvolvedor Full-Stack Júnior",
    company: "Code21",
    place: "Curitiba",
    period: "jun/2024 – mai/2025",
    items: [
      "Desenvolvi interfaces em Angular e TypeScript e back-ends em C#/.NET e Node.js para sistemas de clientes.",
      "Integrei os sistemas a APIs externas e a ferramentas que os clientes já utilizavam.",
      "Conduzi reuniões semanais com o cliente para levantar requisitos e validar entregas.",
      "Escrevi testes e documentação técnica, garantindo aderência aos requisitos funcionais.",
    ],
  },
  {
    role: "Analista de Sistemas",
    company: "AutoFoz (FIAT)",
    place: "Foz do Iguaçu",
    period: "mai/2024 – jun/2024",
    items: [
      "Desenvolvi o portal interno que centraliza o acesso aos diversos sistemas usados pelos funcionários.",
    ],
  },
  {
    role: "Analista de Suporte de Sistemas",
    company: "MGsis",
    place: "Ciudad del Este (PY)",
    period: "dez/2023 – mai/2024",
    items: [
      "Desenvolvi o novo site institucional da empresa em React.",
      "Prestei suporte técnico aos usuários dos softwares da empresa, diagnosticando e resolvendo problemas.",
    ],
  },
  {
    role: "Estagiário de Back-end e Suporte",
    company: "Crowtech",
    place: "Foz do Iguaçu",
    period: "mar/2023 – nov/2023",
    items: [
      "Desenvolvi e refatorei sites em PHP e administrei bancos de dados; analisei e corrigi bugs reportados por clientes.",
    ],
  },
];

function Experience() {
  return (
    <div className="experience" style={{ paddingBottom: "50px" }}>
      {jobs.map((job) => (
        <div className="experience-item" key={job.company}>
          <div className="experience-header">
            <h3 className="experience-role">
              {job.role} <span className="purple">· {job.company}</span>
            </h3>
            <span className="experience-period">
              {job.period} · {job.place}
            </span>
          </div>
          <ul>
            {job.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Experience;
