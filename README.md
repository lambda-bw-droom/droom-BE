# droom-BE
| Method | Endpoint               | Requires                        | Description                                                             |
| ------ | ---------------------- | ------------------------------- | ----------------------------------------------------------------------- |
| POST   | `/auth/register/`      | `username`, `password`,         | Registers a New User to our database. Creates a token.                  |
| POST   | `/auth/login/`         | `username`, `password`          | Logs a returning user in. Creates a token.                              |
                      |