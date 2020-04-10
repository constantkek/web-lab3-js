function createCounter() {
    let counter = 0;
    // Реализуйте функцию, чтобы программа вывела на консоль ожидаемый результат
    return () => counter += 1
}

const count = createCounter();

count(); // 1
count(); // 2
count(); // 3
count(); // 4

console.log(count()); // 5