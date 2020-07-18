const fs = require('fs');

module.exports = {
	serverPort: {
		httpPortNumber: '80',
		httpsPortNumber: '443'
	},
	useHTTPS : true,
	certificates: {
		key: fs.readFileSync('./config/SSL_Certificates/localhost.key'),
		cert: fs.readFileSync('./config/SSL_Certificates/localhost.crt')
	}
}