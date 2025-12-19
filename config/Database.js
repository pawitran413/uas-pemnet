import { Sequelize } from "sequelize";

// Masukkan URL Vercel di sini sebagai cadangan jika env tidak ada
const url =
	process.env.POSTGRES_URL ||
	"postgres://user:kocakyee@localhost:5432/crud_uas";

const db = new Sequelize(url, {
	dialect: "postgres",
	dialectOptions:
		url.includes("vercel") || url.includes("aws")
			? {
					ssl: { require: true, rejectUnauthorized: false },
			  }
			: {},
});

export default db;
