import React from 'react';
import Browser from './Browser';
import './CourseDetails.css';

const CourseDetails = ({ course }) => {
  if (!course) {
    return <div>Select a course from the list</div>;
  }

  const exportGradesUrl = `https://cybertech242-online.com/grade/export/xls/index.php?id=${course.id}`;
  const setupGradeBookUrl = `https://cybertech242-online.com/grade/edit/tree/index.php?id=${course.id}`;
  const enrollParticipantsUrl = `https://cybertech242-online.com/user/index.php?id=${course.id}`;

  return (
    <div>
      <h2>{course.name}</h2>
      <span><h4>Teacher: {course.teacher}</h4><h4>Term: {course.term}</h4><h4>Year: {course.year}</h4></span>
      <Browser url={`https://cybertech242-online.com/course/view.php?id=${course.id}`} />
      <div>
        <button onClick={() => window.open(exportGradesUrl, '_blank')}>Export Grades</button>
        <button onClick={() => window.open(setupGradeBookUrl, '_blank')}>Set up Grade Book</button>
        <button onClick={() => window.open(enrollParticipantsUrl, '_blank')}>Enroll Participants</button>
      </div>
    </div>
  );
};

export default CourseDetails;
