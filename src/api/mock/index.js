import { Server } from 'miragejs';
import contactUs from '../../public/ajax/call/success.json'

const requestTime = 1000;

export default class DevServer {
	constructor() {
		this.server = null;
		this.init();
	}

	start(environment = 'development') {
		this.server = this.server
			? this.server
			: new Server({
					environment,

					routes() {
						this.post('/ajax/call', () => contactUs, {
							timing: requestTime,
						});

						// For other requests dont use fake API routes
						this.passthrough();
					},
			  });
	}

	stop() {
		if (this.server) {
			this.server.shutdown();
			this.server = undefined;
			//console.log(this.server);
		}
	}

	init(){
		this.start();
	}
}