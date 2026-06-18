// const greet = () => {
//     console.log("Hello CSE_ds");
// }
// console.log("Before setTimeout");
// const fun = setTimeout(() => {
//     console.log("Hello CSE_ds");
// }, 3000);
// console.log("After setTimeout");
// clearTimeout(fun);
//agar codesynronus hoga to call stack ke paas jaayega
//agarcode insynronus hoga to web api me jaayega uske baadtask queue me jaate hai
//reccuring timeout--- insteaadof using setInterval()use setTimeout() within afunctionto create arecurringtimeout thatlogs a messageto theconsole every2 secondsfunction repeatMessage() {

function repeatMessage() {
    console.log("Hello! Yeh message har 2 second me aayega");

    setTimeout(repeatMessage, 2000); // function ko dubara call kar rahe hain
}


repeatMessage();