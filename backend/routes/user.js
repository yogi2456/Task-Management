import Router from "express"

const router = Router();

router.post("/sign-in", async (req, res) => {
    const { username } = req.body;
})

export default router;