class Factory {
	create_employee(type) {
		let employee;

		if ('fulltime' == type) {
			employee = new Full_time();
		} else if ('parttime' == type) {
			employee = new Part_time();
		} else if ('temporary' == type) {
			employee = new Temporary();
		} else if ('contractor' == type) {
			employee = new Contractor();
		}

		employee.type = type;

		employee.say = function () {
			log.add(this.type + ': rate ' + this.hourly + '/hour');
		};

		return employee;
	}
}

class Full_time {
	constructor() {
		this.hourly = '$12';
	}
}

class Part_time {
	constructor() {
		this.hourly = '$11';
	}
}

class Temporary {
	constructor() {
		this.hourly = '$110';
	}
}

class Contractor {
	constructor() {
		this.hourly = '$15';
	}
}

const log = (function () {
	let log = '';
	return {
		add: function (msg) {
			log += msg + '\n';
		},
		show: function () {
			alert(log);
			log = '';
		},
	};
})();

function run() {
	const employees = [];
	const factory = new Factory();

	employees.push(factory.create_employee('fulltime'));
	employees.push(factory.create_employee('parttime'));
	employees.push(factory.create_employee('temporary'));
	employees.push(factory.create_employee('contractor'));

	for (const employee in employees) {
		employees[employee].say();
		console.log(employees[employee]);
	}

	log.show();
}

run();
