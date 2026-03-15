import database from "infra/database.js";
async function status(request, response) {
  const result = await database.query("SELECT 2 + 2 as sum;");
  console.log(result.rows);
  response.status(200).json({ chave: "alunos do curso dev são otimos" });
}
export default status;
