// const { B } = require("pdf-parse/lib/pdf.js/v1.10.100/build/pdf");
//const { B } = require("pdf-parse/lib/pdf.js/v1.10.100/build/pdf");

const calculateMBTIType = (answers) => {
    //starting counter for each dimension
    let sCount = 0, cCount = 0;
    let pCount = 0, uCount = 0;
    let aCount = 0, bCount = 0;
    let tCount = 0, eCount = 0;

    //processing each answer
    answers.forEach(({questionId, answerValue}) => {
        const isAgree = answerValue <= 2; //this is for strongly agree or agree
        const isDisagree = answerValue >= 4; //this is for strongly disagree or disagree

        //score based on question groups 
        if (questionId <= 3) {
            if (isAgree) sCount++;
            if (isDisagree) cCount++;
        } else if (questionId <= 6) {
            if (isAgree) pCount++;
            if (isDisagree) uCount++;
        } else if (questionId <= 9) {
            if (isAgree) aCount++;
            if (isDisagree) bCount++;
        } else {
            if (isAgree) tCount++;
            if (isDisagree) eCount++;
        }
    });

    //determining the final type
    const type = [
        sCount >= cCount ? 'S' : 'C',
        pCount >= uCount ? 'P' : 'U',
        aCount >= bCount ? 'A' : 'B',
        tCount >= eCount ? 'T' : 'E'
    ].join('');

    return {
        type, 
        scores: {
            S: sCount, C: cCount,
            P: pCount, U: uCount,
            A: aCount, B: bCount,
            T: tCount, E: eCount
        }
    };
};
module.exports = {calculateMBTIType};