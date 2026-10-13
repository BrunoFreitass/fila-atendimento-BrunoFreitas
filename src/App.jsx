import "./App.css";
import ChamadoList from "./components/ChamadoList";
import Panel from "./components/Panel";
import { initialTickets } from "./data/chamados";

export default function App() {
  function handleToggleTicket(ticketId) {
    console.log("Chamado clicado:", ticketId);
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">ITEAM · SUPORTE</p>
        <h1>Fila de Atendimento</h1>
        <p>Organize os chamados recebidos pelos setores.</p>
      </header>

      <Panel title="Resumo">
        <p className="summary">Painel de controle e acompanhamento de chamados.</p>
      </Panel>

      <Panel title="Chamados">
        <ChamadoList tickets={initialTickets} onToggle={handleToggleTicket} />
      </Panel>
    </main>
  );
}
