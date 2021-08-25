// Original code from spinner1 is pretty compact already, so
// I'll just copy and paste the whole thing. We'll consider
// refactoring it in the future!

const spinorama1 = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r|   ', '\r|   ', '\r|   ', '\r|   ', '\r\\   ', '\r-   ', '\r/   ', '\r|   ', '\r\\   ', '\r-   ', '\r/   ', '\r|   ', '\r\\   ', '\r-   ', '\r/   ', '\r|   '];
const spinorama2 = ['\r|   ', '\r /   ', '\r   -   ', '\r    \\   ', '\r     |   ', '\r      /   ', '\r       -   ', '\r        \\   ', '\r         |   ', '\r          /   ', '\r           -   ', '\r            \\   ', '\r             |   ', '\r             |   ', '\r             |   ', '\r             |   ', '\r             |   ', '\r            \\   ', '\r           -   ', '\r          /   ', '\r         |   ', '\r        \\   ', '\r       -   ', '\r      /   ', '\r     |   ', '\r    \\   ', '\r   -   ', '\r  /   ', '\r |   ', '\r|   '];
let counter = 0;

// Attempt 1
const hopeThisWorks1 = function(stringRay) {
  if (counter < stringRay.length) {
    process.stdout.write(stringRay[counter]);
    counter++;
    setTimeout(() => {
      hopeThisWorks1(stringRay);
    }, 50);
  } else {
    process.stdout.write('\n');
  }
};

hopeThisWorks1(spinorama1);

// Attempt 2
const hopeThisWorks2 = function(stringRay) {
  for (let i = 0; i < stringRay.length; i++) {
    setTimeout(() => {
      process.stdout.write(stringRay[i]);
    }, i * 50);
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, stringRay.length * 50);
};

setTimeout(() => hopeThisWorks2(spinorama2), 1800);