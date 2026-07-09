const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Student Assignment Management System API",
      version: "1.0.0",
      description:
        "Backend API for a school assignment system. Students sign up, pick a class & section, view assignments, and submit them. The admin (school) views the student roster by class/section and sees who has submitted each assignment.",
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Local development server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  // Files containing the JSDoc @swagger annotations
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
