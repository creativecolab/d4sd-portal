export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';
export const UNAUTH_USER = 'UNAUTH_USER';

export interface Feedback {
  questionResponses: Array<string>, questions: Array<string>, submissionID: string,
  comments: string,
  name?: string,
  email?: string,
  institution?: string,
  expertise?: string,
  shareEmail: boolean
}
// data from firebase
export interface FeedbackData extends Feedback {
  created: Date,
  documentID: string
}