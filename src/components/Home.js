import React from 'react'
import AgendaList from './AgendaList'
import Header from './Header'
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import axios from 'axios';
import FileDownload from 'js-file-download';
import { useState } from 'react';

function Home() {
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
    });
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
    <div>
      <Header/>
      <AgendaList/>
      <div>
        <form method='post' onSubmit={onSubmit}>
            <div className='cloud-operation'>
              <input type="file" class="btn btn-success submit-btn" onChange={onInputChange}/>
              <button type="file" class="btn btn-success submit-btn upload-btn">Upload <FileUploadIcon/></button>
              <button type="button" class="btn btn-info" onClick={(e) => download(e)}>Download <FileDownloadIcon/></button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Home