import React, { useState } from 'react';

const CourseList = ({ courses, onCourseSelect }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const onCourseClick = (course) => {
    setSelectedCourse(course);
    onCourseSelect(course);
  };

  const renderCourseList = courses.map((course) => {
    return (
      <button key={course.id} onClick={() => onCourseClick(course)}>
        {course.name}
      </button>
    );
  });

  return <div>{renderCourseList}</div>;
};

export default CourseList;