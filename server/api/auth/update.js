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
