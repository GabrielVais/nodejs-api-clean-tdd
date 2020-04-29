//TESTANDO LOGIN

class LoginRouter{

	route(httpRequest){

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

});