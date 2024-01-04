import { useState, useEffect } from 'react'
import TextField from '../Textfield'

import * as S from './styles'

type Category = {
  id: string
  name: string
}

export type Teacher = {
  id: string
  name: string
}

type CourseFormProps = {
  onClose: () => void
  handleNewCourse: () => void
}

const CourseForm = ({ onClose, handleNewCourse }: CourseFormProps) => {
  const [courseName, setCourseName] = useState('')
  const [category, setCategory] = useState('')
  const [teacherName, setTeacherName] = useState('')
  const [categories, setCategories] = useState<Category[]>([])
  const [teachers, setTeachers] = useState<Teacher[]>([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('http://localhost:3000/categories')
        const data = await response.json();
        setCategories(data)
      } catch (error) {
        console.error('Error fetching categories:', error)
      }
    }

    async function fetchTeachers() {
      try {
        const response = await fetch('http://localhost:3000/teachers')
        const data = await response.json()
        setTeachers(data)
      } catch (error) {
        console.error('Error fetching teachers:', error)
      }
    }

    fetchCategories()
    fetchTeachers()
  }, [])

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const selectedCategory = categories.find((cat) => cat.id === category)
      const selectedTeacher = teachers.find((teacher) => teacher.id === teacherName)

      const response = await fetch('http://localhost:3000/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: courseName,
          category_id: selectedCategory?.id || '',
          teacher_id: selectedTeacher?.id || '',
        }),
      })

      if (response.ok) {
        setCourseName('')
        setCategory('')
        setTeacherName('')
        onClose()
        handleNewCourse()
      } else {
        console.error('Failed to add new course')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <S.Wrapper>
      <form onSubmit={handleFormSubmit}>
        <TextField
          value={courseName}
          placeholder="Name of the course"
          onChange={(e) => setCourseName(e.target.value)}
        />
        <S.SelectWrapper>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select category</option>
          {categories.map((category: Category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        </S.SelectWrapper>

        <S.SelectWrapper>
        <select value={teacherName} onChange={(e) => setTeacherName(e.target.value)}>
          <option value="">Select teacher</option>
          {teachers.map((teacher: Teacher) => (
            <option key={teacher.id} value={teacher.id}>
              {teacher.name}
            </option>
          ))}
        </select>
        </S.SelectWrapper>
        <S.SuccessButton type="submit">Submit</S.SuccessButton>
        <S.CancelButton type="button" onClick={onClose}>
          Cancel
        </S.CancelButton>
      </form>
    </S.Wrapper>
  )
}

export default CourseForm;
