import BinarySearchTree from './BinarySearchTree'



function starFleet() {
    const bst = new BinarySearchTree();

    bst.insert(20, 'Captain Picard');

    bst.insert(15, 'Commnader Riker');
    bst.insert(100, 'Commander Data');
    bst.insert(14, 'Lt. Cmdr. Worf');

    bst.insert(16, 'Lt. Cmdr LaForge');
    bst.insert(101, 'Lt. Cmdr. Crusher');
    bst.insert(13, 'Lieutenant Security-Officer');
    bst.insert(99, 'Lieutenant Selar');

    bst.postOrder();

}

function indexOf(array, numValue) {
    let linearCount = 0;
    for (let i = 0; i < array.length; i++) {
        linearCount = i + 1
        if (array[i] == numValue) {
            return {
                numValue: numValue,
                linearCount: linearCount
            }
        }
    }
    return -1;
};

function best_profit(prices) {
    if (!prices.length) return 0;
    var buy = prices[0], sell = prices[0], profit = 0;
    for (var i = 1; i < prices.length; ++i) {
        sell = prices[i];
        if (sell < buy) buy = sell;
        if (sell - buy > profit) profit = sell - buy;
    }
    return profit
}





function binarySearchNum1(array, value, start, end, count1 = 0) {

    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;


    if (start > end) {
        return -1;
    }

    const index1 = Math.floor((start + end) / 2);
    const item = array[index1];


    count1 += 1


    if (item == value) {
        return {
            index1: index1,
            count1: count1
        }
    }

    else if (item < value) {
        return binarySearchNum1(array, value, index1 + 1, end, count1);
    }
    else if (item > value) {
        return binarySearchNum1(array, value, start, index1 - 1, count1);
    }
};

function binarySearchNum2(array, value, start, end, count2 = 0) {

    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;


    if (start > end) {
        return -1;
    }

    const index2 = Math.floor((start + end) / 2);
    const item = array[index2];


    count2 += 1


    if (item == value) {
        return {
            index2: index2,
            count2: count2
        }
    }

    else if (item < value) {
        return binarySearchNum2(array, value, index2 + 1, end, count2);
    }
    else if (item > value) {
        return binarySearchNum2(array, value, start, index2 - 1, count2);
    }
};

function binarySearchString(array, value, start, end, count = 0) {

    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;


    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];


    count += 1


    if (item == value) {
        return {
            index: index,
            count: count
        }
    }
    else if (item < value) {
        return binarySearchString(array, value, index + 1, end, count);
    }
    else if (item > value) {
        return binarySearchString(array, value, start, index - 1, count);
    }
};

export {
    binarySearchNum1,
    binarySearchNum2,
    binarySearchString,
    indexOf,
    starFleet,
    best_profit
}

