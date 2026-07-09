# Student Assignment Management System — Backend

Node.js + Express + MongoDB + JWT + Swagger. Single school, one fixed admin
account, students self-register into a class + section.

## What's included

- Auth: student signup, login for both student & admin (JWT)
- Assignments: admin creates/edits/deletes, students see only their own
  class/section
- Submissions: students submit once per assignment; admin sees a full class
  roster with submitted/not-submitted per assignment
- Admin roster views: list students by class/section, class summary counts
- Swagger UI docs at `/api-docs`

## 1. Install dependencies

```
cd server
npm install
```

## 2. Configure environment variables

Copy `.env.example` to `.env` and fill in your real values:

```
cp .env.example .env
```

- `MONGO_URI` — from your MongoDB Atlas cluster (Database → Connect →
  "Connect your application")
- `JWT_SECRET` — any long random string
- `ADMIN_NAME` / `ADMIN_EMAIL` / `ADMIN_PASSWORD` — the one fixed school
  admin account you'll log in with

## 3. Create the admin account (run once)

```
npm run seed:admin
```

This creates a single admin user directly in the database using the
`ADMIN_*` values from your `.env`. Admin accounts are never created through
public signup — only students self-register.

## 4. Start the server

```
npm run dev
```

You should see:
```
Server running on http://localhost:5000
Swagger docs available at http://localhost:5000/api-docs
```

## 5. Open Swagger UI

Visit `http://localhost:5000/api-docs` in your browser. You can test every
endpoint directly from there:

1. Call `POST /api/auth/signup` to create a student, or `POST /api/auth/login`
   with your admin credentials.
2. Copy the `token` from the response.
3. Click the **Authorize** button (top right of Swagger UI) and paste the
   token in as `Bearer <your-token>`.
4. All protected endpoints will now work directly from the Swagger page.

## Suggested demo flow for submission

1. Run `npm run seed:admin`, then login as admin via Swagger.
2. Signup 2-3 students into the same class/section (e.g. class `10`,
   section `A`).
3. Login as admin, `POST /api/assignments` to create an assignment for
   class `10` / section `A`.
4. `GET /api/admin/students?class=10&section=A` — shows your students.
5. Login as one student, `GET /api/assignments` — shows only that
   assignment.
6. `POST /api/assignments/:id/submit` as that student.
7. Login back as admin, `GET /api/assignments/:id/submissions` — shows the
   full class roster with that student marked as submitted, and the others
   as not-submitted.

## Notes

- Classes are `6`–`12`, sections are `A`–`D` (hardcoded in
  `config/constants.js` — edit that file if your school needs different
  values).
- Submission `content` is a plain text/link field (no file upload) to keep
  scope tight for a fast turnaround — this can be upgraded later.
- `node_modules/` is not included — run `npm install` after downloading.
