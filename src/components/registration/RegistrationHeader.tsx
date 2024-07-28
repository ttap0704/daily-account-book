import {TouchableOpacity, View} from 'react-native';
import useCalendarStore from 'store/calendar.ts';
import Typography from 'components/common/Typography.tsx';
import {registrationStyles} from 'styles/components/registration.ts';
import dayjs from 'dayjs';
import {useTranslation} from 'react-i18next';
import DatePicker from 'react-native-date-picker';
import {useState} from 'react';
import SmallTabs from 'components/common/SmallTabs.tsx';
import {ACCOUNT_TAB_OPTIONS} from 'core/common.ts';
import {COLORS} from 'styles/_colors.ts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import useRegistrationStore from 'store/registration.ts';
import {AccountType} from 'types/common.ts';

function RegistrationHeader() {
  const {accountType, setAccountType, setCategory} = useRegistrationStore();
  const {selectedDate} = useCalendarStore();
  const {i18n} = useTranslation();
  const day = dayjs(selectedDate).day();
  const weekDayArr = i18n.t('fullWeek').split(',');

  const [date, setDate] = useState(selectedDate);
  const [weekDay, setWeekDay] = useState(weekDayArr[day]);
  const [open, setOpen] = useState(false);

  function openDatePicker() {
    setOpen(true);
  }

  function closeDatePicker() {
    setOpen(false);
  }

  function handleSelectedDate(date: Date) {
    const currentDate = dayjs(date);
    setWeekDay(weekDayArr[currentDate.day()]);
    setDate(currentDate.format('YYYY-MM-DD'));
    closeDatePicker();
  }

  function handleAccountType(id: string) {
    setAccountType(id as AccountType);
    setCategory('');
  }

  return (
    <View style={registrationStyles.registrationFormHeader}>
      <SmallTabs options={ACCOUNT_TAB_OPTIONS} defaultId={accountType} onChange={handleAccountType} />
      <TouchableOpacity onPress={openDatePicker} style={registrationStyles.registrationFormHeaderDateButton}>
        <Typography style={registrationStyles.registrationFormHeaderDate}>
          {date} {weekDay}
        </Typography>
        <Icon name="chevron-right" size={22} color={COLORS.BLACK400} />
      </TouchableOpacity>

      <DatePicker
        modal
        mode="date"
        open={open}
        date={new Date(date)}
        onConfirm={handleSelectedDate}
        onCancel={closeDatePicker}
        locale={i18n.language}
      />
    </View>
  );
}

export default RegistrationHeader;
