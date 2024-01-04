import { useEffect, useState } from 'react';
import { AddCircle, Search } from '@styled-icons/material-outlined';
import TextField from '../Textfield';
import CourseCard, { Course } from '../CourseCard';
import CourseForm from '../CourseForm'; // Import the CourseForm component
import * as S from './styles';

const CoursesSection = () => {
  const [showForm, setShowForm] = useState(false)
  const [courseData, setCourseData] = useState<Course[]>([]);

  const fetchCourses = async () => {
    try {
      const response = await fetch(`http://localhost:3000/courses?limit=10`);
      const data = await response.json();
      setCourseData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [showForm]);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleNewCourse = () => {
    fetchCourses();
  };

  const handleFormClose = () => {
    setShowForm(false);
  };

  return (
    <S.Wrapper>
      <S.Section>
        <S.Title>Courses</S.Title>
        <S.InputWrapper>
          <Search />
          <TextField placeholder="Search..." type="text" />
        </S.InputWrapper>
      </S.Section>

      <S.CoursesWrapper>
        <CourseCard handleNewCourse={handleNewCourse} courseData={courseData} />
      </S.CoursesWrapper>

      {!showForm && <AddCircle onClick={handleAddClick} />}
      
      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <CourseForm onClose={handleFormClose} handleNewCourse={handleNewCourse} />
          </div>
        </div>
      )}
    </S.Wrapper>
  );
};

export default CoursesSection;
