function bestStudent(student1, student2, scoreOfStudent1, scoreOfStudent2){
  let studentWinner;
  let totalScoreStudentWinner;

  let totalScoreStudent1 = scoreOfStudent1['score1'] + scoreOfStudent1['score2'];
  let totalScoreStudent2 = scoreOfStudent2['score1'] + scoreOfStudent2['score2'];

  if (totalScoreStudent1 > totalScoreStudent2){
    totalScoreStudentWinner = totalScoreStudent1;
    studentWinner = student1['firstName'] + ' ' + student1['lastName'];
  };
  if (totalScoreStudent2 > totalScoreStudent1){
    totalScoreStudentWinner = totalScoreStudent2;
    studentWinner = student2['firstName'] + ' ' + student2['lastName'];
  };
  if (totalScoreStudent2 === totalScoreStudent1){
    totalScoreStudentWinner = totalScoreStudent1;
    return `Both students have the same score of ${totalScoreStudentWinner}`
  };
  return `Student ${studentWinner} has the score of ${totalScoreStudentWinner}`;
};