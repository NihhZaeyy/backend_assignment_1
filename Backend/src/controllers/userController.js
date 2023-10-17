const knex = require("../knexmodel/knex");
const bcrypt = require("bcrypt");

const CreateUser = async (req, res) => {
  try {
    const body = req.body;
    const hashedPassword = await bcrypt.hash(body.password, 10);

    const insertData = await knex("users").insert({
      firstName: body.firstName,
      lastName: body.lastName,
      username: body.username,
      email: body.email,
      contact: body.contact,
      password: hashedPassword,
    });

    return res.status(201).send("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

const GetUsers = async (req, res) => {
  try {
    const allUsers = await knex.select().from("users");

    return res.status(200).send({
      message: "Fetching data completed",
      allUsers,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

const UpdateUsers = async (req, res) => {
  try {
    const { id, newUsername } = req.body;
    const updatedUser = await knex("users")
      .where({ id })
      .update({ username: newUsername });

    if (updatedUser) {
      return res.status(200).send("Username updated successfully");
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};

const DeleteAccount = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await knex("users").where({ email }).first();

    if (user && (await bcrypt.compare(password, user.password))) {
      await knex("users").where({ email }).del();
      return res.status(200).send("Account deleted successfully");
    } else {
      return res.status(404).send("User not found or password is incorrect");
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal server error");
  }
};
module.exports = { CreateUser, GetUsers, UpdateUsers, DeleteAccount };
