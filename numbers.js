export const calculateDistance = (x1, x2) => (x2 > x1) ? (x2 - x1) : (x1 - x2);
export const calculateSegmentProduct = (A, B, C) => {
    const resultB = B - C;
    const resultC = C - A;
    
    if (A <= C && B >= C) {
        return resultB * resultC;
    };
};
export const calculateKilobytes = (num) =>  Math.floor(num / 1024);
export const calculateSegments = (a, b) => Math.trunc(a / b);
export const calculateDigitSum = (num) =>  {
    const changedValculateDigitSum = String(num);
    return Number(changedValculateDigitSum[0]) + Number(changedValculateDigitSum[1]);
};
export const swapHundredsAndTens =(O_o) => {
    const firstPart = String(O_o);
    const changedFirstPart = firstPart[1]+firstPart[0]+firstPart[2];
    return Number(changedFirstPart);
};
export const getHundredsDigit = (num) => {
    if(num > 999) {
        return Math.trunc((num / 100) % 10);
    }
    return 0;
};
 export const getFullHours = (seconds) => {
    if ( seconds === 0){
        return 0;
    } else if ( seconds < 0 || seconds !== Math.floor(seconds)){
        return toThrow();
    }
    return Math.floor(seconds / 60 / 60);
 };
 export const getDayOfWeek = (dayOfYear) => {
    switch (dayOfYear % 7) {
        case 0:
            return 7;
        case 1:
            return 1;
        case 2:
            return 2;
        case 3:
            return 3;
        case 4:
            return 4;
        case 5:
            return 5;
        case 6:
            return 6;
        default:
            break;
    }
 };
 export const countSquares = (a, b, c) => Math.floor((a * b) / (c * c));
 console.log(countSquares(10, 15, 2));