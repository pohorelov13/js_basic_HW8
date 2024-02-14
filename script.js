const arr = [1, 2, 4, 5, 1, 3, 6, 142, 42];
console.log(arr);

/* на занятті прозвучала думка використати arr.includes щоб перевірити, чи є в даному масиві елемент,
але мені здається, це дасть нам лише зайві ітерації по масиву і ніякого сенсу


якщо includes реалізовано якось так
function includes(elem) {
     for (const e of this.arr) {
         if (e === elem) return true;
     }
     return false;
 }
то що ми отримаємо від його використання?
у випадку, коли елемента немає в масиві, ми всеодно проітеруємось до кінця
у випадку, коли елемент є в масиві, ми проітеруємось до цього елементу, повернемо true, а потім почнемо нову
ітерацію спочатку, щоб замінити цей елемент?
*/

// replaceElem?
function removeElement(arr, elem, newElem) {
    if (Array.isArray(arr)) {
        arr.includes()
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === elem) arr[i] = newElem;
        }
    }
}

removeElement(arr, 1, 66);

console.log(arr);