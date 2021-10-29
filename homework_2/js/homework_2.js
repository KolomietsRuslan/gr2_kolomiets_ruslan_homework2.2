let N = prompt('Введите расстояние, км', 0);
let D = prompt('Введите диаметр колеса, дюйм', 0);
N = Number(N);
D = Number(D);

// путь колеса в км за один оборот
let km_for_one_turnover = (D * 3.14 * 2.54) / 100000;
km_for_one_turnover = Number(km_for_one_turnover);

// количество оборотов одного колеса
let number_of_turnovers_one_wheel = (N * 100000)/ (D * 3.14 * 2.54);
if (isNaN(N)) {
	console.error('Расстояние должно быть числом');
} else if (N < 0) {
	console.error('Расстояние должно быть больше 0');
} else {
	alert(`${number_of_turnovers_one_wheel} оборотов делает одно колесо`);
	number_of_turnovers_one_wheel = Number (number_of_turnovers_one_wheel);
	}

// количество оборотов всех колес

if (isNaN(D)) {
	console.error('Диаметр должен быть числом');
} else if (D <= 0) {
	console.error('Диаметр должен быть больше 0');
} else {
	let turnover_of_all_wheels = number_of_turnovers_one_wheel * 4;
	alert(`${turnover_of_all_wheels} оборотов сделали все колеса вместе`);
}