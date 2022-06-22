import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useAgendas } from '../contexts/AgendaContext';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import SaveIcon from '@mui/icons-material/Save';
import * as Yup from 'yup';

function AddAgenda() {

  const { createAgenda } = useAgendas();

  const navigate = useNavigate();
  
  return (
    <div>
       <Formik 
            initialValues={{
              title:'',
            }}
            validationSchema={ Yup.object({
              title: Yup.string().required("Title is required")
            })}
            onSubmit={async (values, actions) => {
              await createAgenda(values);
              navigate('/');
            }}
       >
        {({ handleSubmit}) => (
          <Form onSubmit={handleSubmit}>
            <label>Add New Agenda</label>
            <Field name='title' placeholder='Title' className="text-feild"/>
            <ErrorMessage name='title' component="p" className='text-danger'/>
            <button type="submit" class="btn btn-primary submit-btn">Save <SaveIcon/></button>
            <Link to='/' className='btn btn-danger'>Cancel <CancelPresentationIcon/></Link>

          </Form>
        )}

      
      </Formik>
  
    </div>
  )
}

export default AddAgenda