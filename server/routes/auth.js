import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const router = express.Router();

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  username: String,
  avatar: String,
  birthdate: String,
  discord: String,
  country: String,
  bio: String,
  gameStyle: String,
  notifications: Boolean,
  terms: Boolean,
  tags: String,
});

const User = mongoose.model("User", UserSchema);

// Registrar
router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Usuário já existe!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      ...req.body,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    res.status(500).json({ message: "Erro ao cadastrar usuário." });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Usuário não encontrado!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Senha inválida!" });
    }

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      username: user.username,
      avatar: user.avatar,
      birthdate: user.birthdate,
      discord: user.discord,
      country: user.country,
      bio: user.bio,
      gameStyle: user.gameStyle,
      notifications: user.notifications,
      terms: user.terms,
      tags: user.tags,
    };

    res.status(200).json({ message: "Login bem-sucedido!", user: userData });
  } catch (error) {
    console.error("Erro ao logar:", error);
    res.status(500).json({ message: "Erro ao logar usuário." });
  }
});

// Atualizar (update)
router.put("/update/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error("Erro ao atualizar:", error);
    res.status(500).json({ message: "Erro ao atualizar usuário." });
  }
});

export default router;
