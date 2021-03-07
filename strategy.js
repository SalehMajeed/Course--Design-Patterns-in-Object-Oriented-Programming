class Shipping {
	constructor() {
		this.company = '';
	}

	set_strategy(company) {
		this.company = company;
	}

	calculate(packages) {
		return this.company.calculate(packages);
	}
}

class UPS {
	calculate(packages) {
		return '$45.95';
	}
}

class USPS {
	calculate(packages) {
		return '$39.40';
	}
}

class FEDEX {
	calculate(packages) {
		return '$43.20';
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
	const packages = { from: '76712', to: '10012', weight: 'lkg' };

	const ups = new UPS();
	const usps = new USPS();
	const fedex = new FEDEX();

	const shipping = new Shipping();

	shipping.set_strategy(ups);
	log.add('UPS Strategy:' + shipping.calculate(packages));

	shipping.set_strategy(usps);
	log.add('USPS Strategy:' + shipping.calculate(packages));

	shipping.set_strategy(fedex);
	log.add('Fedex Strategy:' + shipping.calculate(packages));

	log.show();
}

run();
