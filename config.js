//To prevent circular dependencies

const JWT_SECRET_USER = `${process.env.JWT_USER}`;
const JWT_SECRET_ADMIN = `${process.env.JWT_ADMIN}`;

module.exports = {
    JWT_SECRET_USER,
    JWT_SECRET_ADMIN
}