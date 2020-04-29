//TESTANDO LOGIN

class LoginRouter{

	route(httpRequest){

		if(!httpRequest || !httpRequest.body){

			return{

				statusCode:500

			}

		}

		if(!httpRequest.body.email || !httpRequest.body.password){

			return {

				statusCode:400

			}

		}

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