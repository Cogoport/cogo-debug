/* eslint-disable no-console */
const debugConfig = require('../debug.config.json');

const { levels, debugLocalStorageValue, showServerLogs } = debugConfig;

const getDebuggerConsoles = () => {
	const consoleObj = {};
	levels.forEach((type) => {
		consoleObj[type] = function(...args) {
			const err = new Error();
			if (typeof window !== 'undefined') {
				const debug = window.localStorage.getItem(debugLocalStorageValue);
				if (
					debug &&
					(debug === '*' ||
						debug
							.split(',')
							.map((item) => item.trim())
							.indexOf(type) !== -1)
				) {
					Error.captureStackTrace(err, arguments.callee);
					console[type](...args, '|', err.stack.match(/at (.*) /)[1], '|', new Date());
				}
			} else if (showServerLogs) {
				Error.captureStackTrace(err);
				console[type](
					...args,
					'|',
					err.stack.match(/at (.*) /s)[1].match(/at (.*) /)[1],
					'|',
					new Date(),
				);
			}
		};
	});
	return consoleObj;
};

const debug = {
	...console,
	...getDebuggerConsoles(),
};

module.exports = debug;
