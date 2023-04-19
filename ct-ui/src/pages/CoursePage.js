import React, { useState } from 'react';
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';

const CoursePage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const onCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const courses = [
    {
      id: 1480,
      name: 'Introduction to React',
      description: 'Learn the basics of React',
      teacher: 'John Smith',
      term: 'Spring',
      year: '1999'
    },
    {
      id: 1481,
      name: 'Advanced React',
      description: 'Learn advanced React concepts',
      teacher: 'Jane Doe',
      term: 'Summer',
      year: '2000'
    },
    {
      id: 1482,
      name: 'React Native',
      description: 'Learn how to build mobile apps with React Native',
      teacher: 'Bob Johnson',
      term: 'Fall',
      year: '2000'
    },
  ];
  

  return (
    <div>
      <h1 class="title is-2">Course Selection</h1>
      <CourseList courses={courses} onCourseSelect={onCourseSelect} />
      <hr></hr>
      <CourseDetails course={selectedCourse} />
    </div>
  );
};

export default CoursePage;