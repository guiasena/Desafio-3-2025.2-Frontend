import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./Saving.css";

export default function Saving({ data, status, deleta }) {
  return (
    <div className={`card card-${status}`}> 
      <div className="card-titulo">{data.titulo || "Titulo da tarefa"}</div> {/* TITULO */}

      <div className="card-tronco">
        <div className="card-tronco-esquerda">
          <div className="input-icon"> {/* RESPONSAVEL */}
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            <div className="card-valor">{data.responsavel || "Responsável:"}</div>
          </div>

          <div className="input-icon"> {/* PRAZO */}
            <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
            <div className="card-valor">{data.prazo || "dd/mm/aaaa"}</div>
          </div>
        </div>

        <div className="card-tronco-direita"> {/* DESCRIÇÃO */}
          <div className="card-descricao">{data.descricao || "Descrição:"}</div>
        </div>

        
      </div>
      <div className="card-rodape"> {/* BOTÃO DELETAR */}
          <button className="card-btn" onClick ={deleta}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
        </div>
    </div>
  );
}
