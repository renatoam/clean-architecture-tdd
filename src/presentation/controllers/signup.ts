import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController {
  handleRequest(request: HttpRequest): HttpResponse {
    if (!request.body.name) {
      return badRequest(new MissingParamError('name'))
    }

    if (!request.body.email) {
      return badRequest(new MissingParamError('email'))
    }

    return {
      body: null,
      statusCode: 200
    }
  }
}
