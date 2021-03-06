const { Event } = require('klasa');

module.exports = class extends Event {

	constructor(...args) {
		/**
		 * Any default options can be omitted completely.
		 * if all options are default, you can omit the constructor completely
		 */
		super(...args, {
			enabled: $1,
			once: $2
		});
	}

	async run(...params) {
		// This is where you place the code you want to run for your event
		$0;
	}


};
