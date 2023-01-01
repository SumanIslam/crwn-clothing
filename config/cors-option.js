const whiteList = [
	'http://localhost:3000',
	'http://127.0.0.1:3000',
	'http://127.0.0.1:5000',
	'http://localhost:5000',
];

const corsOptions = {
	origin: (origin, callback) => {
		if (whiteList.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	optionsSuccessStatus: 200,
};

module.exports = corsOptions
