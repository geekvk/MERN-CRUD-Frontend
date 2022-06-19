import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button} from 'reactstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAgendas } from '../contexts/AgendaContext';

function AgendaList() {
  const{ agendas, deleteAgenda } = useAgendas();
  console.log(agendas)
  
  return (
    <ListGroup className='mt-3'>
        {agendas.map((agenda) => (
          <ListGroupItem  className='d-flex justify-content-between align-items-center p-3'>
          <p className='agenda-name'>{agenda.title}</p>
          <div className='control-icon ml-auto'>
        
              <Link to={`/edit/${agenda._id}`} className='btn btn-warning submit-btn'><EditIcon/></Link>
              <button class="btn btn-danger" onClick={() => deleteAgenda(agenda._id)}><DeleteIcon/></button>
          </div>
      </ListGroupItem>
        ))}
        
    </ListGroup>
  )
}

export default AgendaList