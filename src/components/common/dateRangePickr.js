// import React, {useState} from 'react';
// import Typography from '@mui/material/Typography';
// import TextField from '@mui/material/TextField';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import Box from '@mui/material/Box';

// export default function CalendarsDateRangePicker() {
//     const [value, setValue] = useState([null, null]);
  
//     return (
//       <LocalizationProvider dateAdapter={AdapterDateFns}>
//         <div>
//           <DateRangePicker
//             calendars={2}
//             value={value}
//             onChange={(newValue) => {
//               setValue(newValue);
//             }}
//             renderInput={(startProps, endProps) => (
//               <React.Fragment>
//                 <TextField {...startProps} label="" />
//                 <Box sx={{ mx: 2 }}> to </Box>
//                 <TextField {...endProps} label="" />
//               </React.Fragment>
//             )}
//           />
//         </div>
//       </LocalizationProvider>
//     );
//   }