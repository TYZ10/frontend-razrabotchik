`Ну а пока в качестве заданий будет написать несколько методов, которые выполняют то же, что и существующие.
mySlice(arr, [start], [end]) - делает то же самое, что и arr.slice([start], [end]) только без использования само собой внутри себя arr.slice
И аналогично еще парочка:
myIndexOf(arr, item, from)
myIncludes(arr, item, from)`


function mySlice(arr, start, end) {
    // Возвращает новый массив, в который копирует все элементы с индекса start до end

    let resultList = [];

    if (arr) {
        if (!start) {
            start = 0;
        };
        if (!end) {
            end = arr.length;
        };

        for (let i = start; i < end; i++) {
            resultList.push(arr[i]);
        };

    };

    return resultList;
};


function myIndexOf(arr, item, from) {
    // Ищет item начиная с индекса from и возвращает номер индекса, на 
    // котором был найден искомый элемент, в противном случае -1.

    if (typeof arr !== 'undefined' && typeof item !== 'undefined') {
        if (!from) {
            from = 0
        };

        for (let i = from; i < arr.length; i++) {
            if (arr[i] === item) {
                return i
            };
        };
    };

    return -1;
};


function myIncludes(arr, item, from) {
    // Ищет item начиная с индекса from и возвращает true, если поиск успешен.

    // Читы на реализацию :) Ну и конечно сокращение кода. Но думаю нужно полный код написать.
    
    // let resultMyIndexOf = myIndexOf(arr, item, from)
    // if (resultMyIndexOf !== -1) return true
    // else return false
    
    if (typeof arr !== 'undefined' && typeof item !== 'undefined') {
        if (!from) {
            from = 0
        };

        for (let i = from; i < arr.length; i++) {
            if (arr[i] === item) {
                return true
            };
        };
    };

    return false;
};



let arr = [1, 0, false];

console.log(mySlice(arr, 0, 2))
console.log(myIndexOf(arr, false))
console.log(myIncludes(arr, false))
