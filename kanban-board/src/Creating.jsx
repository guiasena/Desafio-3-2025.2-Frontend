import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark, faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Creating.css";

export default function Creating({ cancela, salva }) {
  const [titulo, setTitulo] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [prazo, setPrazo] = useState("");
  const [descricao, setDescricao] = useState("");

  return (
    <div className="caixa">
      <input className="titulo-input" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)}/>
        
        <div className="tronco">
          
          <div className="tronco-esquerda">
            <div className="input-icon"> {/* RESPONSAVEL */}
              <FontAwesomeIcon icon={faUser}/>
              <input className="dado-input" placeholder="Responsável" value={responsavel} onChange={(e) => setResponsavel(e.target.value)}/>
            </div>
            <div className="input-icon"> {/* PRAZO */}
              <FontAwesomeIcon icon={faCalendar}/>
              <input className="dado-input date-input" type="date" value={prazo} onChange={(e) => setPrazo(e.target.value)}/>
            </div>
          </div>

          <div className="tronco-direita">
            <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)}/> {/* DESCRIÇÃO */}
          </div>
        </div>
      
        <div className="rodape">
          <button onClick={cancela}><FontAwesomeIcon icon={faXmark}/></button>
          <button onClick={() => salva({ titulo, responsavel, prazo, descricao })}><FontAwesomeIcon icon={faCheck}/></button>
        </div>
    </div>
  );
}