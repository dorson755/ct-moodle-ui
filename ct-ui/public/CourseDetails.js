import React from 'react';

const CourseDetails = ({ course }) => {
  if (!course) {
    return <div>Select a course from the list</div>;
  }

  return (
    <table>
      <tbody>
        <tr>
          <td>Name:</td>
          <td>{course.name}</td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>{course.description}</td>
        </tr>
        <tr>
          <td>Teacher:</td>
          <td>{course.teacher}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default CourseDetails;