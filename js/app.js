console.log("is working");


// alert('yello');
// alert('123');

// var name = prompt('name');
//
// switch( name ){
//   case 'Bob':
//   console.log('Name is Bob');
//   break;
//   case 'Martin':
//   console.log('Name is Martin');
//   break;
//   case 'Lucy':
//   console.log('Name is Lucy');
//   break;
//   case 'Jack':
//   console.log('Name is Jack');
//   break;
//   case 'Michael':
//   console.log('Name is Michael');
//   break;
//   default:
//   console.log('Name doesnt exist');
// }

// ===== Game text =====
var introText = "\=====\ A MATRIX-INSPIRED GAME \=====\
\n This story takes place after just another dull day of work. Every day feels like an old sript of the same tasks and occurrences, neither rewarding or meaningful. \n\nYou awaken from a nap, as the sun rises -- odd, because the clock shows it is 9:00pm...";

var messageMorpheus = "Food can wait. You send an encrypted private message to your hacker-buddy, detailing the weird sunrise at 9pm you just witnessed. As soon as you press \'send\' you hear someone knocking on the front door of your apartment."

// ==========

// ===== PLAYER RESOURCES =====
var tesco = false;
var takeAway = false;
var mobilePhone = 0;
var money = 5;
// ==========

//===== GAME SCRIPT =====
// Part - A
alert(introText);

var msOrFood = prompt ("This is the kind of weird event you love to discuss with your buddy Morpheus. You've never met in real life, but you have spent the last months trading countlss messages, questioning the reality of everything...  \n \n But you're also hungry and have £5, enough for a takeaway or Tesco's \n(a)-Message Morpheus (b)-Tescos (c)-Local take-away");

 switch(msOrFood){
    case ("a"):
      alert(messageMorpheus);
      break;

    case ("b"):
      alert(" ");
      break;
    case ("c"):
      alert("You message Morpheus");
      break;

    default:
      alert("Player input failed - Please restart the game");
      break;
  }
