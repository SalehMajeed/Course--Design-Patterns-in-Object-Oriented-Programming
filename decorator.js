class User {
	constructor(name) {
		this.name = name;
	}

	say() {
		log.add('User: ' + this.name);
	}
}

class Decorator_user {
	constructor(user, street, city) {
		this.user = user;
		this.street = street;
		this.city = city;
		this.name = user.name;
	}

	say() {
		log.add('Decorated User: ' + this.name + ',' + this.street + ',' + this.city);
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
	const user = new User('Kelly');
	user.say();

	const decorated = new Decorator_user(user, 'Broadway', 'New York');
	decorated.say();

	log.show();
}

run();
