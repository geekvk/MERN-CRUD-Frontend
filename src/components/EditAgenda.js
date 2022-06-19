import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SaveIcon from '@mui/icons-material/Save';
import { useAgendas } from '../contexts/AgendaContext';

function EditAgenda() {
  
  const navigate = useNavigate();
  const { editAgenda, createAgenda, getAgendaByID } = useAgendas();
  const[newAgenda, setNewAgenda] = useState({
    title:'',
  })

  const params = useParams();
  console.log(params);
  useEffect(() => {
    (async() => {
      if(params.id){
        const res = await getAgendaByID(params.id);
        setNewAgenda(res);
      }

    })();
      
 
  },[params.id]);
  return (
    <div>
       <Formik 
            initialValues={newAgenda}
            validationSchema={ Yup.object({
              title: Yup.string().required("Title is required")
            })}
            onSubmit={async (values, actions) => {
              if(params.id){
                await editAgenda(params.id, values)

              }else{
                await createAgenda(values);
              }
              navigate('/');
            }}
            enableReinitialize
       >
        {({ handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <Field name='title' placeholder='Title' className="text-feild"/>
            <ErrorMessage name='title' component="p" className='text-danger'/>
            <button type="submit" class="btn btn-primary submit-btn"><SaveIcon/></button>
            <Link to='/' className='btn btn-danger'><CancelPresentationIcon/></Link>

          </Form>
        )}

      
      </Formik>
  
    </div>
  )
}

export default EditAgenda