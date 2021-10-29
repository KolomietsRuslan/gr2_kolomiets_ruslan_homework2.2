let days = prompt('Введите число', 0);
days = Number(days);
let one_day = days % 100;
one_day = Number(one_day);

if (isNaN(days)) {
	alert('Введенное значение не является числом');
} else if (one_day >= 0 && one_day <= 20) {
	 if (one_day == 1) {
		alert(`${days} день`);
	} else if (one_day == 0 || one_day >= 5 && one_day <= 20) {
		alert(`${days} дней`);
	} else if (one_day >= 2 && one_day <= 4) {
		alert(`${days} дня`);
	}
}
else { let one_day = days % 10;
	if (one_day >= 2 && one_day <= 4) {
    alert(`${days} дня`);
} else if (one_day == 1) {
    alert(`${days} день`);
} else if (one_day == 0 || one_day >= 5 && one_day <= 9) {
    alert(`${days} дней`);
 }
}