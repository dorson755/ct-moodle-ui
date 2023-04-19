import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import CourseList from './pages/CourseList';
import CourseDetails from './pages/CourseDetails';
import NavBar from './Layout';

const App = () => {
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
      <NavBar/>
      <h1 class="title is-2">Course Selection</h1>
      <CourseList courses={courses} onCourseSelect={onCourseSelect} />
      <CourseDetails course={selectedCourse} />
    </div>
  );
};

export default App;