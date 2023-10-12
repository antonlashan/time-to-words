// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  const digitMapping = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty-one',
    22: 'twenty-two',
    23: 'twenty-three',
    24: 'twenty-four',
    25: 'twenty-five',
    26: 'twenty-six',
    27: 'twenty-seven',
    28: 'twenty-eight',
    29: 'twenty-nine',
  };

  const [hours, minutes] = time.split(':');
  const hoursInNumber = Number(hours);
  const minutesInNumber = Number(minutes);

  const hourInWord = digitMapping[hoursInNumber];
  const minuteInWord = digitMapping[minutesInNumber];

  if (minutesInNumber === 0) {
    return hourInWord + " o'clock";
  }

  if (minutesInNumber === 15) {
    return "quarter past " + hourInWord;
  }

  if (minutesInNumber === 30) {
    return "half past " + hourInWord;
  }

  if (minutesInNumber === 45) {
    return "quarter to " + (digitMapping[hoursInNumber + 1]);
  }

  if (minutesInNumber < 30) {
    return minuteInWord + " past " + hourInWord;
  }

  if (minutesInNumber > 30) {
    return digitMapping[60 - minutesInNumber] + " to " + digitMapping[hoursInNumber + 1];
  }
}

module.exports = { convertTimeToWords };
