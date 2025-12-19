import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define(
	"users",
	{
		nama: DataTypes.STRING,
		nim: DataTypes.STRING,
		gender: DataTypes.STRING,
		desa: DataTypes.STRING,
		kecamatan: DataTypes.STRING,
		kabupaten: DataTypes.STRING,
	},
	{
		freezeTableName: true,
	}
);

export default User;

// Inisialisasi tabel otomatis
// (async () => {
// 	try {
// 		await db.sync();
// 		console.log("Database synchronized");
// 	} catch (error) {
// 		console.error("Error syncing database:", error);
// 	}
// })();
