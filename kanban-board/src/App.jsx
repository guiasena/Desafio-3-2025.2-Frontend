import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Creating from "./Creating";
import Saving from "./Saving";
import "./App.css";
import "./index.css";

export default function App() {
  
  const [tarefas, setTarefas] = useState({ // estado que guarda as tarefas em cada coluna
    afazer: [],
    fazendo: [],
    feito: []
  });

  const [criando, setCriando] = useState({ // controla se uma nova tarefa está sendo criada em alguma coluna
    afazer: false,
    fazendo: false,
    feito: false
  })

  function handleAdd(coluna) { // inicia a criação de uma nova tarefa
    setCriando({ afazer: false, fazendo: false, feito: false, [coluna]: true });
  }

  function handleCancel() { // cancela a criação de uma nova tarefa
    setCriando({ afazer: false, fazendo: false, feito: false });
  }

  function handleSave(coluna, tarefa) { // salva a nova tarefa na coluna correspondente
    setTarefas((prev) => ({
      ...prev,
      [coluna]: [...prev[coluna], { ...tarefa, status: coluna },]
    }));
    handleCancel(); // pra não continuar com uma caixa de tarefa aberta após salvar
  }

  function handleDelete(coluna, index) { // deleta a tarefa do índice "index" na coluna "coluna"
    setTarefas((prev) => ({
      ...prev,
      [coluna]: prev[coluna].filter((_, i) => i !== index) // filtra todas as tarefas, exceto a do índice "index"
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
            <Saving key={i} data={t} status={t.status} deleta={() => handleDelete("afazer", i)} /> // renderiza cada tarefa na coluna "A Fazer"
          ))}
          {criando.afazer && (
            <Creating cancela={handleCancel} salva={(tarefa) => handleSave("afazer", tarefa)} /> // renderiza a caixa de criação se estiver criando
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
