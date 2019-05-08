function descendingNumber(number) {
    let orderedNumbers = '';
    const array = number.toString().split('');
    array.sort().reverse();
    array.forEach(num => {
        orderedNumbers = orderedNumbers + num;
    });

    return Number(orderedNumbers);
}