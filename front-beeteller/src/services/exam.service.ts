import {
  CandidateExamResultType,
  CandidateExamAnswersType,
  ExamInfoType,
  ExamType
} from 'types/exam';
import api from './api';

export class ExamService {
  static getExamInfo = (examId: string) => {
    return api.get<ExamInfoType>(`/exams/${examId}/?startExam=false`);
  };

  static getExam = (examId: string) => {
    return api.get<ExamType>(`/exams/${examId}/?startExam=true`);
  };

  static sendExamAnswers = (exam: CandidateExamAnswersType) => {
    return api.post<CandidateExamResultType>('/exams', exam);
  };
}
