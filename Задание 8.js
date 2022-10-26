let myMap = new Map();
myMap.set('Бублик', 'Тучя');
myMap.set(33, 'Богатыря');
myMap.set(true, 333);
for (let name of myMap.keys()) {
    console.log(`Ключ- ${name}`);
};
for (let value of myMap.values()) {
    console.log(`Значение- ${value}`);
};