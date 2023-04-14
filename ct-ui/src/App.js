import React, { useState } from 'react';
import CourseList from './CourseList';
import CourseDetails from './CourseDetails';

const App = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const onCourseSelect = (course) => {
    setSelectedCourse(course);
  };

  const courses = [
    {
      id: 1,
      name: 'Introduction to React',
      description: 'Learn the basics of React',
      teacher: 'John Smith',
    },
    {
      id: 2,
      name: 'Advanced React',
      description: 'Learn advanced React concepts',
      teacher: 'Jane Doe',
    },
    {
      id: 3,
      name: 'React Native',
      description: 'Learn how to build mobile apps with React Native',
      teacher: 'Bob Johnson',
    },
  ];
  

  return (
    <div className="App">
      <h1>Course Selection</h1>
      <CourseList courses={courses} onCourseSelect={onCourseSelect} />
      <CourseDetails course={selectedCourse} />
    </div>
  );
};

export default App;