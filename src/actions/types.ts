export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';

export interface Feedback {
  questionResponses: Array<string>, questions: Array<string>, submissionID: string,
  comments: string,
  name?: string,
  email?: string,
  title?: string,
  expertise?: string
}
// data from firebase
export interface FeedbackData extends Feedback {
  created: Date,
  documentID: string
}