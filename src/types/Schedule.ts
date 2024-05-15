export type ScheduleSlot = {
  id: string;
  time: string;
  isReserved: boolean;
};

export type ScheduleData = {
  [date: string]: ScheduleSlot[];
};
