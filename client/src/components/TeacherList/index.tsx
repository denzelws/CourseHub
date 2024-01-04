import { useEffect, useState } from 'react'
import { Delete, Edit } from '@styled-icons/material-outlined'

import { Teacher } from '../CourseForm'
import * as S from './styles'

const TeacherList = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [editTeacher, setEditTeacher] = useState<Teacher | null>(null)

  useEffect(() => {
    fetchTeachers()
  }, [])

  const fetchTeachers = async () => {
    try {
      const response = await fetch('http://localhost:3000/teachers')
      if (!response.ok) {
        throw new Error('Failed to fetch teachers')
      }
      const data = await response.json()
      setTeachers(data)
    } catch (error) {
      console.error('Error fetching teachers:', error)
    }
  };

  const handleEdit = (teacher: Teacher | null) => {
    setEditTeacher(teacher ? { ...teacher } : null)
  }
  
  const handleDelete = async (teacherId: string) => {
    try {
      const response = await fetch(`http://localhost:3000/teacher/${teacherId}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete teacher');
      }
  
      setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.id !== teacherId));
      console.log(`Teacher with ID ${teacherId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  }

  const handleUpdateTeacher = async (updatedTeacher: Teacher) => {
    try {
      const response = await fetch(`http://localhost:3000/teacher/${updatedTeacher.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTeacher),
      })

      if (!response.ok) {
        throw new Error('Failed to update teacher')
      }

      setTeachers((prevTeachers) =>
        prevTeachers.map((teacher) =>
          teacher.id === updatedTeacher.id ? { ...teacher, ...updatedTeacher } : teacher
        )
      )

      setEditTeacher(null)
      console.log(`Teacher with ID ${updatedTeacher.id} updated successfully`)
    } catch (error) {
      console.error('Error updating teacher:', error)
    }
  };

  return (
    <S.TeacherListContainer>
      <S.Title>Teacher List</S.Title>
      {teachers.map((teacher) => (
        <S.TeacherBox key={teacher.id}>
          <S.IconsWrapper>
            <span>{teacher.name}</span>
              <Edit size={22} onClick={() => handleEdit(teacher)}/>
              <Delete size={22} onClick={() => handleDelete(teacher.id)}/>
          </S.IconsWrapper>
        </S.TeacherBox>
      ))}

      {editTeacher && (
      <S.ModalContainer>
        <S.ModalContent>
        <div>
          <div>
            <S.FormInput
              type="text"
              value={editTeacher.name}
              onChange={(e) =>
                setEditTeacher((prevTeacher) =>
                  prevTeacher
                    ? { ...prevTeacher, name: e.target.value }
                    : null
                )
              }
            />
            <S.FormButton onClick={() => handleUpdateTeacher(editTeacher)}>Save Changes</S.FormButton>
            <S.FormButton onClick={() => setEditTeacher(null)}>Cancel</S.FormButton>
          </div>
        </div>
        </S.ModalContent>
      </S.ModalContainer>
      )}
    </S.TeacherListContainer>
  );
};

export default TeacherList;
