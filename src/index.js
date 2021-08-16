module.exports = function toReadable (number) {
    let HRN = {
        0: '',
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
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    }
    
    let str = String(number);
    let s = '';
    
    if (number===0) {
      return 'zero';
    } else if (str.length === 3) {
      s = HRN[str[0]] + ' hundred ';
      number = Number(str.substring(1,3));
    }
    
    if (number<20) {
      s+= HRN[number];
    } else if (str[1] !== '0' && str[2] !== '0') {
      s+= HRN[Math.floor(number/10)*10] + ' ' + HRN[number%10];
    } else {
      s+= HRN[number];
    } 
    return s.trim();
}
