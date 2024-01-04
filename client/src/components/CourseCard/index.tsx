import { Delete, Edit } from '@styled-icons/material-outlined'
import * as S from './styles'
import { useEffect, useState } from 'react'
import TextField from '../Textfield'

export type Course = {
  id: string
  name: string
  category_id: string | null
  teacher_id: string | null
  category_name: string | null
  teacher_name: string | null
}

type CourseCardProps = {
  handleNewCourse: () => void
  courseData: Course[]
}

const CourseCard = ({ handleNewCourse }: CourseCardProps) => {
  const [courseData, setCourseData] = useState<Course[]>([])
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEditClick = (course: Course) => {
    setSelectedCourse(course)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setSelectedCourse(null)
    setIsModalOpen(false)
  }

  const [deleteConfirmation, setDeleteConfirmation] = useState<{
    show: boolean;
    courseId: string | null;
  }>({
    show: false,
    courseId: null,
  })

  const handleDeleteCourse = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/course/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        // Remove the deleted course from the list
        const updatedCourses = courseData.filter(course => course.id !== id)
        setCourseData(updatedCourses)
        hideDeleteConfirmation()
      } else {
        console.error('Failed to delete the course');
      }
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  }

  const handleUpdateCourse = async () => {
    try {
      if (!selectedCourse) return; 

      const response = await fetch(`http://localhost:3000/course/${selectedCourse.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: selectedCourse.name,
          category_id: selectedCourse.category_id,
          teacher_id: selectedCourse.teacher_id,
        })
      })

      if (response.ok) {
        // Update the courseData with the updated course
        const updatedCourses = courseData.map(course =>
          course.id === selectedCourse.id ? selectedCourse : course
        )
        setCourseData(updatedCourses);
        handleModalClose()
      } else {
        console.error('Failed to update the course')
      }
    } catch (error) {
      console.error('Error updating course:', error)
    }
  }

  const showDeleteConfirmation = (id: string | null) => {
    if (id !== null) {
      setDeleteConfirmation({
        show: true,
        courseId: id,
      })
    }
  }

  const hideDeleteConfirmation = () => {
    setDeleteConfirmation({
      show: false,
      courseId: null,
    })
  }

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`http://localhost:3000/courses?limit=10`)
        const data = await response.json()
        setCourseData(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    getData()
  }, [handleNewCourse])

  return (
    <>
      {courseData.map((course: Course, index: number) => (
        <S.CourseCard key={index}>
          <S.ImageBox>
            <img src='https://images.unsplash.com/photo-1687197180710-b2b9484a3c5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80' alt='Img default'/>
          </S.ImageBox>
          <S.CardDescription>
            <S.InfoWrapper>
              <S.CardCategory>{course.category_name}</S.CardCategory>
              <S.CardTitle>{course.name}</S.CardTitle>
              <div>
                Teacher: {course.teacher_name ? course.teacher_name : 'Sem professor'}
              </div>
              <S.IconsWrapper>
                <Edit size={22} onClick={() => handleEditClick(course)} />
                <Delete size={22} onClick={() => showDeleteConfirmation(course.id)}/>
              </S.IconsWrapper>
            </S.InfoWrapper>
          </S.CardDescription>
        </S.CourseCard>
      ))}

      {isModalOpen && selectedCourse && (
        <S.ModalOverlay>
          <S.ModalContent>
            <h2>Edit Course</h2>
            <p>Category Name: <TextField value={selectedCourse.category_name || ''} /></p>
            <p>Course Name: <TextField value={selectedCourse.name} /></p>
            <p>Teacher Name: <TextField value={selectedCourse.teacher_name || ''} /></p>

            <S.SaveButton onClick={handleUpdateCourse}>Save changes</S.SaveButton>
            <S.CancelButton onClick={handleModalClose}>Cancel</S.CancelButton>
          </S.ModalContent>
        </S.ModalOverlay>
      )}

    {deleteConfirmation.show && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.TitleDelete>Are you sure you want to delete this course?</S.TitleDelete>
            <S.DeleteButton onClick={() => handleDeleteCourse(deleteConfirmation.courseId!)}>
              Confirm Delete
            </S.DeleteButton>
            <S.CancelButton onClick={hideDeleteConfirmation}>Cancel</S.CancelButton>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default CourseCard;