/**
 * 三項演算子
 *
 * if elseのような分岐の省略方法
 */

/**
 * ある条件 ? 条件がtrueの時：　条件がfalseの時
 */
const val1 = 1 > 0 ? "trueです" : "falseです";
console.log(val1);

const num = 1300;

/**
 * toLocaleString()は数値型の時だけ機能する
 * typeofはデータ型を判別する機能
 */
console.log(num.toLocaleString());

const formattendNum =
  typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
console.log(formattendNum);

/**
 * 関数のreturn部分で三項演算子を使って値を判別する事も可能
 */

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "100以下です";
};
console.log(checkSum(50, 40));
