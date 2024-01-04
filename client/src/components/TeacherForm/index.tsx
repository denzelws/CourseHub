import { useState } from 'react';
import * as S from './styles'
import TeacherList from '../TeacherList';

const TeacherForm = () => {
  const [formData, setFormData] = useState({ name: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    try {
      const response = await fetch('http://localhost:3000/teacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: formData.name }), 
      })

      if (!response.ok) {
        throw new Error('Failed to create teacher')
      }

      console.log('Teacher created successfully')
    } catch (error) {
      console.error('Error creating teacher:', error)
    }


    console.log('Form Data:', formData);
  };

  return (
    <S.FormContainer>
      <S.Title>Create Teacher</S.Title>
      <form onSubmit={handleSubmit}>
        <S.FormGroup>
          <S.Label htmlFor="name">Name</S.Label>
          <S.Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </S.FormGroup>
        <S.Button type="submit">Create</S.Button>
      </form>
      <TeacherList/>
    </S.FormContainer>
  )
}

export default TeacherForm