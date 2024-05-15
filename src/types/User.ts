import { ScheduleData } from './Schedule';

export type User = {
  id: string;
  name: string;
  profession: string;
  city: string;
  ratingAverage: number;
  totalOfReviews: number;
  price: number;
  timebox: string;
  description: string;
  profilePicture: string;
  schedule: ScheduleData;
};
