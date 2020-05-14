
import React, { Component } from 'react'
import BinarySearchTree from './BinarySearchTree';
import { binarySearchNum1, binarySearchNum2, binarySearchString, indexOf, starFleet, best_profit } from './Functions'
import './App.css';

const searchTree = new BinarySearchTree();


export default class App extends Component {

  render() {


    let dataArr1 = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]
    for (let i = 0; i < dataArr1.length; i++) {
      dataArr1[i] = dataArr1[i]
    }

    let dataArr2 = "89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5".split(' ')
    for (let i = 0; i < dataArr2.length; i++) {
      dataArr2[i] = parseInt(dataArr2[i]);
    }
    dataArr2.sort((a, b) => a - b)

    let bookArray = ['Harry Potter', 'Lord of War', 'Underworld', 'Thinkful']

    let dataArr3 = "25 15 50 10 24 35 70 4 12 18 31 44 66 90 22".split(' ')
    for (let i = 0; i < dataArr3.length; i++) {
      dataArr3[i] = parseInt(dataArr3[i])
    }
    dataArr3.forEach(value => searchTree.insert(value, value))

    let profitArr = [128, 97, 121, 123, 98, 97, 105];

    let { index1, count1 } = binarySearchNum1(dataArr1, 8)
    let { index2, count2 } = binarySearchNum2(dataArr2, 98)
    let { numValue, linearCount } = indexOf(dataArr2, 25)
    let { index, count } = binarySearchString(bookArray, 'Underworld')


    return (
      <div>
        <ul>
          <li key={searchTree.key}>
            {searchTree.postOrder()}
          </li>
        </ul>


        <p>It took {count1} iterations in a binary search to reach {dataArr1[index1]}</p>

        <p>It took {count2} iterations in a binary search to reach {dataArr2[index2]}</p>

        <p>It took {linearCount} iterations in a linear search to find {numValue}</p>

        <p>It took {count} iterations to reach {bookArray[index]}</p>

        <p>{starFleet()}</p>

        <p>After selling your stocks, your best profit is ${best_profit(profitArr)} ..that really sucks</p>



        {/* <p> 35 25 15 14 19 27 89 79 Prerder
            14 27 19 15 25 79 89 35 PostOrder
            Post order 5 7 6 9 11 10 8 find its preorder 8 6 5 7 10 9 11
            
                                  35
                                /   \
                              25      89
                              /       /
                            15      79
                          /   \
                        14     19
                                  \
                                    27
            8
          /  \
        6      10
        / \    / \
        5  7   9   11

        </p> */}


      </div>
    )

  }

}






