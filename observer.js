class Click {
	constructor() {
		this.handlers = [];
	}

	subscribe(fn) {
		this.handlers.push(fn);
	}

	unsubscribe(fn) {
		this.handlers = this.handlers.filter(function (item) {
			if (item != fn) {
				return item;
			}
		});
	}

	fire(o, this_obj) {
		const scope = this_obj || window;
		this.handlers.forEach(function (item) {
			item.call(scope, o);
		});
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
	const Click_handler = function (item) {
		log.add('fired:' + item);
	};

	const click = new Click();

	click.subscribe(Click_handler);
	click.fire('#event1');
	click.subscribe(Click_handler);
	click.fire('#event2');
	click.subscribe(Click_handler);
	click.fire('#event3');

	log.show();
}

run();
