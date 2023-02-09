/**
 * デフォルト値、引数など
 *
 * react開発でよく使われる技法
 * arrow関数で作る
 */

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("田中");

const sayHello = (name) => console.log(`こんにちは${name}さん`);
sayHello();
/**
 * JSでは引数なしだとundefinedが表示される
 * バグが発生しやすい為よくない
 */
