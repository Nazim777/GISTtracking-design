import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


interface datePickerProps{
    label:string,
    date:string
}
// resuasble datePicker component
export default function DatePickerValue({label,date}:datePickerProps) {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs(date));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label={label}
          value={value}
          onChange={(newValue) => setValue(newValue)}
          sx={{
            backgroundColor: '#F4F4F5',
            '& .MuiInputBase-root': {
              height: '36px',
            },
            
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

