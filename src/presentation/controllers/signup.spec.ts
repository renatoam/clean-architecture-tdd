import { MissingParamError } from '../errors/missing-param-error'
import { SignUpController } from './signup'

describe('Sign Up Controller', () => {
  test('Should be 400 if no user name is provided', () => {
    // SUT: system under test
    const sut = new SignUpController()
    const request = {
      body: {
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const response = sut.handle(request)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('name'))
  })

  test('Should be 400 if no user email is provided', () => {
    const sut = new SignUpController()
    const request = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    const response = sut.handle(request)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('email'))
  })

  test('Should be 400 if no user password is provided', () => {
    const sut = new SignUpController()
    const request = {
      body: {
        name: 'any_name',
        email: 'any_email',
        passwordConfirmation: 'any_password'
      }
    }

    const response = sut.handle(request)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('password'))
  })

  test('Should be 400 if no user password confirmation is provided', () => {
    const sut = new SignUpController()
    const request = {
      body: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password'
      }
    }

    const response = sut.handle(request)

    expect(response.statusCode).toBe(400)
    expect(response.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
