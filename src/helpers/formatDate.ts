import { format } from 'date-fns';

export const formatDate = (date: string) => {
  return format(new Date(date), 'dd LLL yyyy HH:mm');
};
