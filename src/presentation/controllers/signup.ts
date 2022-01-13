import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handleRequest(request: HttpRequest): HttpResponse {
    if (!request.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name')
      }
    }

    if (!request.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email')
      }
    }

    return {
      body: null,
      statusCode: 200
    }
  }
}
