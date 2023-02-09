/**
 * codeを簡潔にする
 */
// const myprofile = {
//   name: "佐藤",
//   age: 28
// }

/**
 * テンプレート文字列で表示
 * プログラムが冗長になる
 */
// const message = `私は${myprofile.name}です。年齢は${myprofile.age}です。`
// console.log(message);

// const {name, age} = myprofile;
// const message2 = `私は${name}です。年齢は${age}です。`
// console.log(message2);

/**
 * 分割代入は処理の最初でオブジェクト（配列）から指定のキーを抜き出して
 * 自由に利用できるようにするもの
 */

/**
 * 配列でも似たような処理が可能
 */

/**
 * 従来の処理
 */
const myprofile = ["佐藤", 28];
const message3 = `私は${myprofile[0]}です。年齢は${myprofile[1]}です。`;
console.log(message3);

/**
 * 配列で分割代入を使う場合
 */

const [name, age] = myprofile;
const message4 = `私は${name}です。年齢は${age}です。`;
console.log(message4);
