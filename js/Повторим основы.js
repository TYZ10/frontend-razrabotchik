
function getRandomInt() {
    // Получает рандомное целое число от 1 до 100
    min = 1
    max = 100
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function PCOne(numberAnswer, numberPC) {
    // Логика первого компьютера, если ответ совпал - возвращает false
    if (numberAnswer == numberPC) return false;
    else if (numberAnswer < numberPC) return -1;
    else return 1;
};

function PCTwo(numberPC, resultAnswer) {
    // Логика второго компьютера
    if (numberPC == 0) {
        return getRandomInt();
    };

    let resultNum

    if (resultAnswer == -1) {
        resultNum = Math.floor(numberPC / 2)
        console.log("Компьютер 1: Меньше.")
    }
    else {
        resultNum = Math.floor(numberPC + numberPC / 2)
        console.log("Компьютер 1: Больше.")
    };

    if (resultNum == resultAnswer) resultNum = resultNum - 1;

    return resultNum;
};

let main_num = getRandomInt();

console.log("Компьютер 1 загадал число: \n" + main_num);
var answerPCTwo = PCTwo(0)
let result

while (true) {
    console.log(`Компьютер 2: Пробую число ${answerPCTwo}.`)
    result = PCOne(main_num, answerPCTwo)
    if (result) {
        answerPCTwo = PCTwo(answerPCTwo, result)
    }
    else break;
};

console.log("Компьютер 1: Угадал!")