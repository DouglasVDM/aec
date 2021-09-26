import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
	res.json({ message: "Welcome to Stellenbosch University" });
});

router.post("/project", async (req, res) => {
	try {
		const { project_name, project_target_group, project_description } = req.body;
		const newProject = await pool.query('INSERT INTO projects (project_name, project_target_group, project_description) VALUES ($1,$2,$3) RETURNING *', [project_name, project_target_group, project_description]);
		res.json({ projects: newProject });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

export default router;
