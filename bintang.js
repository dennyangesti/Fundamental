// // Bintang 1
var bintang1 = "";
var i, j;
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= 5; j++) {
    bintang1 += " a ";
  }
  bintang1 += "\n";
}
console.log(bintang1);

// // Bintang 2
var bintang2 = "";
var i, j;
for (i = 1; i <= 5; i++) {
  for (j = i; j <= 5; j++) {
    bintang2 += " * ";
  }
  bintang2 += "\n";
}
console.log(bintang2);

// // Bintang 3
var bintang3 = "";
var i, j;
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    bintang3 += " * ";
  }
  bintang3 += "\n";
}
console.log(bintang3);

// Bintang 4

var bintang4 = "";
var i, j, k, m;

for (i = 1; i < 5; i++) {
  for (j = i; j <= 5; j++) {
    bintang4 += " * ";
  }
  bintang4 += "\n";
}
for (k = 1; k <= 5; k++) {
  for (m = 1; m <= k; m++) {
    bintang4 += " * ";
  }
  bintang4 += "\n";
}

console.log(bintang4);

// Bintang 5

var bintang5 = "";
var i, j, k, l;
for (i = 1; i <= 5; i++) {
  for (j = i; j <= 5; j++) {
    bintang5 += "   ";
  }
  for (k = 1; k <= i; k++) {
    bintang5 += " * ";
  }
  for (l = 1; l <= i - 1; l++) {
    bintang5 += " * ";
  }

  bintang5 += "\n";
}
console.log(bintang5);

// Bintang 6
var bintang6 = "";
var i, j, k, l;
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    bintang6 += "   ";
  }
  for (k = i; k <= 5; k++) {
    bintang6 += " * ";
  }
  for (l = i + 1; l <= 5; l++) {
    bintang6 += " * ";
  }

  bintang6 += "\n";
}
console.log(bintang6);

// Bintang 7

var bintang7 = "";
var i, j, k, l;
for (i = 1; i <= 5; i++) {
  for (j = i; j <= 5; j++) {
    bintang7 += " k ";
  }
  for (k = 1; k <= i; k++) {
    bintang7 += " o ";
  }
  for (l = 1; l <= i - 1; l++) {
    bintang7 += " D ";
  }

  bintang7 += "\n";
}
for (i = 2; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    bintang7 += "   ";
  }
  for (k = i; k <= 5; k++) {
    bintang7 += " * ";
  }
  for (l = i + 1; l <= 5; l++) {
    bintang7 += " * ";
  }

  bintang7 += "\n";
}
console.log(bintang7);
