
function GetNumbersObject(object) {
    if (!new.target) { // в случае, если вы вызвали меня без оператора new
        return new GetNumbersObject(object); // ...я добавлю new за вас
    };
    
    this.object = object;

    this.int_easy_answer = 0;
    this.list_hard_answer = [];


    this.getAllNumbersEasy = function() {
        for (key in this.object) {
            let num = this.object[key];
            
            if (!isNaN(num)) {
                this.int_easy_answer += num;
            };
        };

        return this.int_easy_answer;
    };

    // this.getKeysObjectAndSortHard = function() {
    //     while (true) {
    //         let countFail = 0

    //         for (key in this.object) {
    //             let num = this.object[key];

    //             if (!isNaN(num)) {
    //                 if (this.list_hard_answer.length != object.length) {
    //                     this.list_hard_answer.push(key);
    //                 }
    //             };
    //         };
    //     };
    //     return this.list_hard_answer.reverse();
    // };
};


let object = new GetNumbersObject(
    {
        "num_1": 2,
        num_2: 10,
        num_3: 4,
        num_4: "regheirogh"
    }
)

console.log(object.getAllNumbersEasy())



