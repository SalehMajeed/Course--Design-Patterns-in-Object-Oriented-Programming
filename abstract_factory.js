class Employee {
	constructor(name) {
		this.name = name;
	}

	say() {
		log.add('I am employee ' + this.name);
	}
}

class Employee_factory {
	create(name) {
		return new Employee(name);
	}
}

class Vendor {
	constructor(name) {
		this.name = name;
	}
	say() {
		log.add('I am vendor ' + this.name);
	}
}

class Vendor_factory {
	constructor(name) {
		this.name = name;
	}

	create(name) {
		return new Vendor(name);
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
	const persons = [];
	const employee_factory = new Employee_factory();
	const vendor_factory = new Vendor_factory();

	persons.push(employee_factory.create('Joan DiSilva'));
	persons.push(employee_factory.create("Tim O'Neill"));
	persons.push(vendor_factory.create('Gerald Watson'));
	persons.push(vendor_factory.create('Nicole McNight'));

	for (emp in persons) {
		persons[emp].say();
	}

	log.show();
}

run();
