/**
 * const, letの変数宣言
 */

var val1 = "var変数";
console.log("var変数を宣言: " + val1);

/**
 * var変数は再宣言可能
 */
val1 = "val変数を上書き";
console.log("var変数は再宣言可能: " + val1);

/**
 * constを使った変数宣言
 */
const val2 = "const変数";
console.log("constを使った変数宣言: " + val2);

/**
 * const変数に上書き
 */
// val2 = "const変数を上書き";
// console.log(val2);
/**
 * 結果；エラーが出る
 * TypeError: "val2" is read-only
 */

/**
 * const変数は再宣言不可
 */
// const val2 = "const変数を再宣言";
// console.log(val2);
/**
 * 結果；エラーが出る
 * TypeError: Cannot assign to read only property 'message' of object 'SyntaxError: /src/index.js: Identifier 'val2' has already been declared. (34:6)
 */

/**
 * letを使った変数宣言
 */
let val3 = "let変数";
console.log("letを使った変数宣言: " + val3);

/**
 * let変数に上書きが可能
 */
val3 = "let変数を上書き";
console.log("let変数に上書きが可能: " + val3);

/**
 * let変数は再宣言不可
 */
// let val3 = "let変数を再宣言";
// console.log(val3);
/**
 * 結果；エラーが出る
 * TypeError: Cannot assign to read only property 'message' of object 'SyntaxError: /src/index.js: Identifier 'val3' has already been declared. (56:4)
 */

/**
 * 赤波線はJSのエラーなので処理を実行しない
 * let変数は誤った再宣言を未然に防いでくれる
 * let変数はループの中で回数ごとに数値が変わる時に用いる
 */

const val4 = {
  name: "佐藤",
  age: 28
};
/**
 * 連想配列はキー（プロパティ）に対して値のみを入れる
 * オブジェクトはキー（プロパティ）に対して関数も入れられる
 */

val4.name = "田中";
//  console.log(val4);
val4.addres = "広島";
console.log(val4);

const val5 = ["dog", "cat"];
// console.log(val5);

val5[0] = "bard";
// console.log(val5);

val5.push("monkey");
console.log(val5);
