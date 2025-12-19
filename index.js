import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import UserRoot from "./route/UserRoute.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PATCH", "DELETE"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);
app.use(express.json());

// Dahulukan Route API
app.use(UserRoot);

// Layani file statis
app.use(express.static(path.resolve(__dirname, "public")));

app.get("/favicon.ico", (req, res) => res.status(204).end());

// Handler untuk client-side routing React
app.get("/{*any}", (req, res) => {
	res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

if (process.env.NODE_ENV !== "production") {
	app.listen(5000, () => console.log("Server up"));
}

export default app;
