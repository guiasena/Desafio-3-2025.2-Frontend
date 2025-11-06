import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Creating from "./Creating";
import Saving from "./Saving";
import "./App.css";
import "./index.css";

export default function App() {
  
  const [tarefas, setTarefas] = useState({ 
    afazer: [],
    fazendo: [],
    feito: []
  });

  const [criando, setCriando] = useState({
    afazer: false,
    fazendo: false,
    feito: false
  })

  function handleAdd(coluna) {
    setCriando({ afazer: false, fazendo: false, feito: false, [coluna]: true });
  }

  function handleCancel() {
    setCriando({ afazer: false, fazendo: false, feito: false });
  }

  function handleSave(coluna, tarefa) {
    setTarefas((prev) => ({
      ...prev,
      [coluna]: [...prev[coluna], { ...tarefa, status: coluna },]
    }));
    handleCancel(); // pra não continuar com uma caixa de tarefa
  }

  function handleDelete(coluna, index) {
    setTarefas((prev) => ({
      ...prev,
      [coluna]: prev[coluna].filter((_, i) => i !== index) // pega todos os elementos onde o índice i não é igual ao índice do item que quero apagar
    }));
  }
  // AQUI JÁ COMEÇA O QUE VAI NO INDEX.HTML
  return (
    <div className="quadro">

      {/* TITULOS */}
      
      <div className="titulos">
        <div className="titulo">A Fazer</div>
        <div className="titulo">Fazendo</div>
        <div className="titulo">Feito</div>
      </div>

      {/* COLUNAS */}
      <div className="colunas">

        {/* A FAZER */}
        <div className="coluna">
          {tarefas.afazer.map((t, i) => (
            <Saving key={i} data={t} status={t.status} deleta={() => handleDelete("afazer", i)} />
          ))}
          {criando.afazer && (
            <Creating cancela={handleCancel} salva={(tarefa) => handleSave("afazer", tarefa)} />
          )}
          {!criando.afazer && (
            <button className="addBtn" onClick={() => handleAdd("afazer")}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          )}
        </div>

        {/* FAZENDO */}
        <div className="coluna">
          {tarefas.fazendo.map((t, i) => (
            <Saving key={i} data={t} status={t.status} deleta={() => handleDelete("fazendo", i)} />
          ))}

          {criando.fazendo && (
            <Creating cancela={handleCancel} salva={(tarefa) => handleSave("fazendo", tarefa)} />
          )}

          {!criando.fazendo && (
            <button className="addBtn" onClick={() => handleAdd("fazendo")}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          )}
        </div>

        {/* FEITO */}
        <div className="coluna">
          {tarefas.feito.map((t, i) => (
            <Saving key={i} data={t} status={t.status} deleta={() => handleDelete("feito", i)} />

          ))}

          {criando.feito && (
            <Creating cancela={handleCancel} salva={(tarefa) => handleSave("feito", tarefa)} />
          )}

          {!criando.feito && (
            <button className="addBtn" onClick={() => handleAdd("feito")}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
