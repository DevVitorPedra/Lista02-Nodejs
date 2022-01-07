import React, {useContext, useState} from 'react'
import { deleteById } from '../../utils/functions'
import { ModalContext } from '../Context/OpenModalContext'
import { TempDataContext } from '../Context/TempDataContext'

export default function Modal(props) {
   const {modal,setModal} = useContext(ModalContext)
   const {temp,setTemp} = useContext(TempDataContext)
   const [disabled,setDisabled] = useState(0)
    let modalStyle={
display:'block',
backgroundColor:"rgba(0, 0, 0, 0.8)"
    }
    const handleDelete = () => {
        setDisabled(1)
        deleteById(props.id,setTemp)
        setDisabled(temp[1])
    }
    return (
        <div className="modal show fade" style={modalStyle} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Deletar</h5>
              <button onClick={()=>setModal(0)} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {(temp!=="Evento excluído com sucesso")?<p>Gostaria de deletar esse evento?</p>: <p>Evento excluído com sucesso</p>}
              <p>{props.event}</p>
            </div>
          <button  className={disabled==0 ?"btn btn-danger" : "btn btn-danger disabled"}  onClick={handleDelete}>Deletar</button>
        
          </div>
        </div>
      </div>
    )
}
