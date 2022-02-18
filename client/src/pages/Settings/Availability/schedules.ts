export const schedules = [...Array(9).keys()].map((number) => {
  if (number === 9) {
    return {
      time: '9:00',
      value: number,
    };
  }
  // else if (number < 12) {
  //   return {
  //     time: number.toString() + ':00 AM',
  //     value: number,
  //   };
  // } else if (number === 12) {
  //   return {
  //     time: number.toString() + ':00 PM',
  //     value: number,
  //   };
  else {
    return {
      time: (number + 9).toString() + ':00 ',
      value: number,
    };
  }
});
