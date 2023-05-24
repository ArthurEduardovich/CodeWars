// example mispelled('versed', 'v5rsed'); // returns true
// example mispelled('versed', 'versed'); // returns true
// example mispelled('versed', 'applb'); // returns false
/* It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.
In the tests that expect true, the mispelled word will always differ mostly by one character. 
If the two words are the same, return True.*/

function mispelled(word1, word2) {
  if (word1.length === word2.length) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i]) {
        count++;
      }
    }
    return count <= 1;
  } else if (word1.length === word2.length + 1) {
    let count = 0;
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] !== word2[i - count]) {
        count++;
      }
    }
    return count <= 1;
  } else if (word1.length + 1 === word2.length) {
    let count = 0;
    for (let i = 0; i < word2.length; i++) {
      if (word2[i] !== word1[i - count]) {
        count++;
      }
    }
    return count <= 1;
  } else {
    return false;
  }
}
