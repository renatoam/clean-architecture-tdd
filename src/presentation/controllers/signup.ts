import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'
import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignUpController implements Controller {
  handle(request: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!request.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      body: null,
      statusCode: 200
    }
  }
}
