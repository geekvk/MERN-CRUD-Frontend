import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Button} from 'reactstrap';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAgendas } from '../contexts/AgendaContext';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import axios from 'axios';
import FileDownload from 'js-file-download';

function AgendaList() {
  const{ agendas, deleteAgenda, uploadFile } = useAgendas();
  console.log(agendas)
  const [files, setFiles] = useState(null);

  const onInputChange = (e) => {
    setFiles(e.target.files[0]);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('file', files);
    axios.post('http://localhost:8001/agendas/upload', data).then((req, res) => {
      console.log(res);
     

    })
    // const download = () => {
    //   axios.get('http://localhost:8001/download').then((res, req) => {
    //     console.log(res);
    //   })
    // }
  }
  const download = (e) => {
    e.preventDefault();
    axios({
      url:'http://localhost:8001/download',
      method:'GET',
      responseType: "blob"
    }).then((res) =>{
      FileDownload(res.data, "AgendaList.csv");
    })
  }
  
  return (
    <ListGroup className='mt-3 agenda-list'>
        {agendas.map((agenda) => (
          <ListGroupItem  className='d-flex justify-content-between align-items-center p-3'>
          <p className='agenda-name'>{agenda.title}</p>
          <div className='control-icon ml-auto'>
        
              <Link to={`/edit/${agenda._id}`} className='btn btn-warning submit-btn'>Edit <EditIcon/></Link>
              <button class="btn btn-danger" onClick={() => deleteAgenda(agenda._id)}>Delete <DeleteIcon/></button>
          </div>
      </ListGroupItem>
        ))}
        {/* <form method='post' onSubmit={onSubmit}>
          <div className='cloud-operation'>
            <input type="file" class="btn btn-success submit-btn" onChange={onInputChange}/>
            <button type="file" class="btn btn-success submit-btn upload-btn">Upload <FileUploadIcon/></button>
            <button type="button" class="btn btn-info" onClick={(e) => download(e)}>Download <FileDownloadIcon/></button>

          </div>
        </form> */}
       
    </ListGroup>
  )
}

export default AgendaList