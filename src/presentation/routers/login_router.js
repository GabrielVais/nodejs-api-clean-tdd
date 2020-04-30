const LoginRouter = require('.LoginRouter');
const MissingParamError = require('./missing_param_error');


module.exports = class {

	route(httpRequest){

		if(!httpRequest || !httpRequest.body){

			return HttpResponse.serverError('servidor');

		}

		const {email, password} = httpRequest.body;

		if(!email){

			return HttpResponse.badRequest('email');

		}

		if(!password){

			return HttpResponse.badRequest('password');

		}

	}

}