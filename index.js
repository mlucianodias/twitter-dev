app.put('/posts/:id/favorite', async (req, res) => {
    const postId = req.params.id;
    const index = req.posts.findIndex((p) => p.id === postId);
  
    if (index !== -1) {
      const post = req.posts[index];
      post.starsCount++;
      req.posts[index] = { ...post };
  
      try {
        await fs.writeFile(DATA_FILE, JSON.stringify(req.posts, null, 2));
        res.json(post);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao salvar os dados.' });
      }
    } else {
      res.status(404).json({ error: 'Post não encontrado.' });
    }
  });
  