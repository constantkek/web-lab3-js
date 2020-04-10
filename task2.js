// Реализуйте функцию sum

function sum() {
  let sum_ = 0;
  for (let elem of this) {
    sum_ += elem;
  }
  return sum_;
}

console.log(sum.call([5, 5, 5, 5, 5, 5, 5, 5, 5]));
