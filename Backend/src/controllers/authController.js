require("dotenv").config();
const knex = require("../knexmodel/knex");
const bcrypt = require("bcrypt");

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await knex("users").where({ email }).first();

    if (!user) {
      return res.status(401).json({ message: "Email tidak ditemukan." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password salah." });
    }

    res.json({ message: "Login berhasil", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { LoginUser };
