// ZADANIE 10

// var num = 10,
//   obj1 = {
//     value: "first_value",
//   },
//   obj2 = {
//     value: "second_value",
//   };

// function change(num, obj1, obj2) {
//   num = num * 10;
//   obj1 = obj2;
//   obj2.value = "new_value";
// }
// change(num, obj1, obj2);

// console.log(num);
// console.log(obj1.value);
// console.log(obj2.value);

// ZADANIE 11

// function test() {
//   console.log(a);
//   console.log(foo());

//   var a = 1;
//   function foo() {
//     return 2;
//   }
// }
// test();

// ZADANIE 13

// function leadingZeros(str, len) {
//   str = str.toString();
//   while (str.length < len) str = "0" + str;
//   return str;
// }
// console.log(leadingZeros("7", 3));

// ZADANIE 6
// document.body.innerHTML = `
// <div class='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
//   <a class='simple-ajax-popup' data-target='#team-popup-9074' href='#team-popup-9074'>
//     <div class='info'>
//       <div class='name'>Robert</div>
//       <div class='designation'>Developer</div>
//       <div class='icons'><i class='fa fa-envelope-o'></i></div>
//     </div>
//   </a>
// </div>
// <div class='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
//   <a class='simple-ajax-popup' data-target='#team-popup-9000' href='#team-popup-9000'>
//     <div class='info'>
//       <div class='name'>Marta</div>
//       <div class='designation'>Tester</div>
//       <div class='icons'><i class='fa fa-envelope-o'></i></div>
//     </div>
//   </a>
// </div>
// <div class='col-lg-3 col-md-3 col-sm-3 col-xs-3'>
//   <a class='simple-ajax-popup' data-target='#team-popup-9066' href='#team-popup-9066'>
//     <div class='info'>
//       <div class='name'>Tomek</div>
//       <div class='designation'>Technical Consultant</div>
//       <div class='icons'><i class='fa fa-envelope-o'></i></div>
//     </div>
//   </a>
// </div>`;

// // jQuery is available as $
// function getDesignation() {
//   var [...elements] = document.getElementsByClassName("designation");
//   var elementy = elements.map((el) => el.textContent).sort();
//   console.log(elementy);

//   return elementy;
// }
// getDesignation();

// ZADANIE 4
// function reverseString(x) {
//   return x.split("").reverse().join("");
// }
// console.log(reverseString("Adrian jest chujowy"));

// var arr = [5, -2, -9, -1, 0, 3, 2, 1, 7];
// console.log(arr.sort());

// var b = 0;
// var sum = 0;
//

// SUMA DANYCH W TABELi
// for (i = 0; i < arr.length; i++) {
//   b = arr[i];
//   sum += b;
// }
// console.log(sum);

// FIZZ BUZZ dzielne przez 3 i 5
// for (var i = 1; i <= 20; i++) {
//   switch (true) {
//     case i % 5 === 0 && i % 3 === 0:
//       console.log("fizzbuzz");
//       break;
//     case i % 3 === 0:
//       console.log("fizz");
//       break;
//     case i % 5 === 0:
//       console.log("buzz");
//       break;
//     default:
//       console.log(i);
//       break;
//   }
// }
