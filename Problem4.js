function palindrome(string) {
    // your code here
    //Menggunakan reverse()
    // let newString = string.split('').reverse().join('')
    // return newString === string

    //Menggunakan for loop
    let newString = [], start = string.length - 1
    for(let i = start; i >= 0; i--){
        newString.push(string[i])
    }

    return newString.join('') === string
  }
  console.log(palindrome("civic"))       // true
  console.log(palindrome("katak"))       // true
  console.log(palindrome("kasur rusak")) // true
  console.log(palindrome("kupu-kupu"))   // false
  console.log(palindrome("lion"))        // false
  
  