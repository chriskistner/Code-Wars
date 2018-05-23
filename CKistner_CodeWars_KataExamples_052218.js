/* CHRIS KISTNER CODE WARS CKATA EXAMPLES
Since committing myself to becoming a softtware developer I have made it part of my daily ritual to complete 1 codewars challenge 6-days a week. To that end I have complete more than 30 katas and am now up to Level 6. For this part of Galvanize's Portfolio,
 I have decided to share 3 Code Wars Katas I completed and share my thought process for each.


//String Reversing, Changing case, etc., 7 Kyu
Given 2 string parameters, show a concatenation of:
- the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
- a separator in between both strings: @@@
 the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER
SOLUTION*/

function reverseAndMirror(s1,s2) {
  let newString2 = ''
  let newString1 = ''
  for (let i = 0; i < s2.length; i++) {
    if (s2[i] === s2[i].toUpperCase()) {
      newString2 += s2[i].toLowerCase(); 
    } else {newString2 += s2[i].toUpperCase()}
    };
  newString2 = newString2.split('').reverse().join('');
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s1[i].toUpperCase()) {
      newString1 += s1[i].toLowerCase(); 
    } else {newString1 += s1[i].toUpperCase()}
  };
  newString1 = newString1.split('').reverse().join('');
  newString1 += newString1.split('').reverse().join('');
  let finalString = newString2 + '@@@' + newString1;
  return finalString;
}

/* I had a lot of fun with this challenge. Especially since it's concept tied in nicely with the Message Decoder I was building for my son and I. It required me to carefully consider order of operations and what I was trying to do. 
I first had to generate two new strings that reversed the capital letters for lower case letters and vice versa. I then had to split each string into an array, reverse it and recombine it (plus mirror it in the case of the first string). 
Finally I had to add these modified strings to a new string in the correct order while seperate them with an '@@@'.*/

//Jumping Number (Special Numbers Series #4), 7 Kyu
//Jumping number is the number that All adjacent digits in it differ by 1.
//SOLUTION
function jumpingNumber(n){
  let nStr = n.toString()
  if (nStr.length === 1) {
    return 'Jumping!!'
  }
  for (let i = 1; i < nStr.length; i++) {
    if (parseInt(nStr[i]) - parseInt(nStr[i -1]) != 1 && parseInt(nStr[i]) -
        parseInt(nStr[i - 1]) != -1) {
      return 'Not!!'
    }
  }
  return 'Jumping!!'
}
/* I won't lie, this one almost broke me and took hours to complete. My greatest challenge was twofold. The first part was creating a For loop and an appropriate If statement that would successfully compare each successive integer in the variable
and see if it was only 1 larger or smaller than the previous integer. This was extremely challenging as it took me awhile to realize I needed to have the loop return True if any of the integers didn't meet the parameters, hence the function 
returns 'Jumping!!' if the loop essentially produces no results. The other major challenge I had was remembering just what I was comparing in terms of Integers and Strings. Since certain methods like .length don't work on integers while mathematical 
operators don't work on strings I constantly found myself switching back and forth to ensure everything worked appropriately.*/

//Row Weights, 7 Kyu
/*Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.*/
//SOLUTION
function rowWeights(array){
  let alternator = 0;
  let arr1 = [];
  let arr2 = []; 
  for (let i = 0; i < array.length; i++) {
    if (alternator == 0) {
      arr1.push(array[i]);
      alternator ++;
    } else if (alternator == 1) {
      arr2.push(array[i]);
      alternator--;
    }
  }
  let arr1Total = arr1.reduce((a, b) => a + b, 0);
  let arr2Total = arr2.reduce((a, b) => a + b, 0);
  let result = [arr1Total, arr2Total];
  return result;
}
/*I'm really proud of this one as when I first read the challenge I didn't have a clue how to accomplish it. I started thinking it was going to require some super-complicated for loop or an obscure method I'd never heard of.
On my way to work while I was thinking about it casually though it occurred to me that what I essentially needed was a switch that would flick on or off for every value of I as we looped through the array as what determined what 
value went where was simply the order of the Array. That's when I came up with the Alternator. A variable that would go up or down after each iteration of my for loop and push the values to the appropriate array based on whether the 
alternator's value was 1 or 0. After that it was simply a matter of reducing the values of the new arrays by adding them all together and then including them in the result array. This challenge is a textbook reminder for me of the old
saying, if you feel like their should be an easier way of doing something their probably is.*/