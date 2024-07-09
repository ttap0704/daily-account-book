import {create} from 'zustand';
import dayjs from 'dayjs';

interface CalendarStoreState {
  selectedDate: string;
  selectedDateHistory: string[];
}

interface CalendarStoreActions {
  setSelectedDate: (date: string) => void;
  setSelectedDateHistory: (date: string) => void;
}

const today = dayjs().format('YYYY-MM-DD');
const initialData: CalendarStoreState = {
  selectedDate: today,
  selectedDateHistory: [today],
};

const useCalendarStore = create<CalendarStoreState & CalendarStoreActions>(set => ({
  ...initialData,
  setSelectedDate: (selectedDate: string) => set(state => ({...state, selectedDate})),
  setSelectedDateHistory: (selectedDate: string) =>
    set(state => {
      const selectedDateHistory = [...state.selectedDateHistory];
      selectedDateHistory.push(selectedDate);
      if (selectedDateHistory.length > 2) selectedDateHistory.shift();
      return {...state, selectedDateHistory};
    }),
}));

export default useCalendarStore;
