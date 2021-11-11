import validateSignUpInfo from '../validations/validateSignUpInfo.js'
import connection from '../database/database.js'
import bcrypt from 'bcrypt'

const signUp = async (req, res) => {
    const { email, name, password } = req.body

    const signUpIsNotValid = validateSignUpInfo.validate(req.body).error

    if (signUpIsNotValid) return res.status(422).send('Dados inválidos.')

    const hashedPassword = bcrypt.hashSync(password, 10)

    try {
        const usersWithThatEmail = await connection.query(`
            SELECT * FROM users WHERE email=$1;
        `, [email])

        const isEmailAlreadyRegistered = usersWithThatEmail.rowCount > 0

        if (isEmailAlreadyRegistered) return res.status(400).send('Email já cadastrado!')

        await connection.query(`
            INSERT INTO users (email, name, password) VALUES ($1, $2, $3);
        `, [email, name, hashedPassword])

        return res.sendStatus(200)

    } catch (error) {
        return res.sendStatus(500)
    }
}

export default signUp