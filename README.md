## secure-api

Express + TypeScript API with JWT auth, cookie sessions, and role-based management (`admin`, `creator`, `visitor`).

![Tested with Postman](https://img.shields.io/badge/Tested%20with-Postman-FF6C37?logo=postman&logoColor=white)

- `POST /api/user/signup` - cookie `token` is set automatically (login also sets it)
- Postman stores the cookie for later requests
- Call protected book routes (`add-book`, `update-book`, `delete-book`)
- `GET /api/user/logout` clears the cookie
