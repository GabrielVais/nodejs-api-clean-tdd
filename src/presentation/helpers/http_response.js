const MissingParamError = require('./missing_param_error.js');


class HttpResponse {

	static badRequest(paramName){

		return{

			statusCode:400,
			body:new MissingParamError(paramName)

		}

	}

	static serverError(){


		return {

			statusCode:500,

		}
	}
}