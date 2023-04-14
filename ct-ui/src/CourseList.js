import React, { useState } from 'react';
import './CourseList.css';

const CourseList = ({ courses, onCourseSelect }) => {
  const handleChange = (event) => {
    const courseId = parseInt(event.target.value);
    const course = courses.find((c) => c.id === courseId);
    onCourseSelect(course);
  };

   return <div>
  <label htmlFor="course-select">Select a course:</label>
      <select id="course-select" onChange={handleChange}>
        <option value="">--Select a course--</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
  </div>;
};

export default CourseList;