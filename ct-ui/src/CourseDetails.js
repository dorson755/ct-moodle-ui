import React from 'react';
import Browser from './Browser';

const CourseDetails = ({ course }) => {
  if (!course) {
    return <div>Select a course from the list</div>;
  }

  const exportGradesUrl = `https://example.com/courses/${course.id}/export_grades`;
  const setupGradeBookUrl = `https://example.com/courses/${course.id}/setup_grade_book`;
  const enrollParticipantsUrl = `https://example.com/courses/${course.id}/enroll_participants`;

  return (
    <div>
      <h2>{course.name}</h2>
      <Browser url={`https://example.com/courses/${course.id}`} />
      <div>
        <button onClick={() => window.open(exportGradesUrl, '_blank')}>Export Grades</button>
        <button onClick={() => window.open(setupGradeBookUrl, '_blank')}>Set up Grade Book</button>
        <button onClick={() => window.open(enrollParticipantsUrl, '_blank')}>Enroll Participants</button>
      </div>
    </div>
  );
};

export default CourseDetails;
