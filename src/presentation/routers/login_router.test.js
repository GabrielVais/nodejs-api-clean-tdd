//TESTANDO LOGIN

class LoginRouter{

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


class MissingParamError extends Error {

	constructor(paramName){

		super(`Missing Param: ${paramName}`);

		this.name = 'MissingParamError';

	}

}

describe('Login router', () =>{

	//se nao enviar um email retorna um erro 400
	test('Should return 400 if no email is provided', () =>{

		const sut = new LoginRouter();

		const httpRequest = {

			body:{

				password: 'any_password'

			}

		}

		const httpResponse = sut.route(httpRequest);

		expect(httpResponse.statusCode).toBe(400);

		expect(httpResponse.body).toEqual(new MissingParamError('email'))

	});

	//se nao enviar uma senha retorna um erro 400
	test('Should return 400 if no password is provided', () =>{

		const sut = new LoginRouter();

		const httpRequest = {

			body:{

				email: 'any_email@email.com'

			}


		}

		const httpResponse = sut.route(httpRequest);

		expect(httpResponse.statusCode).toBe(400);

		expect(httpResponse.body).toEqual(new MissingParamError('password'))


	});

	//se nao receber uma request erro 500 de servidor
	test('Should return 500 if no httpRquest is provided', () =>{

		const sut = new LoginRouter();

		const httpResponse = sut.route();

		expect(httpResponse.statusCode).toBe(500);



	});


	//se nao estiver um body na requisiçao retornar erro 500
	test('Should return 500 if httpRequest no body', () =>{

		const sut = new LoginRouter();

		const httpResponse = sut.route({});

		expect(httpResponse.statusCode).toBe(500);


	});

});