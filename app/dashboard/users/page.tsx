import PageHeader from "@/components/PageHeader";
import { columns } from "@/components/tables/columns";
import { DataTable } from "@/components/tables/data-table";
import { taskSchema } from "@/components/tables/data/schema";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "components/tables/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const Users = async () => {
  const tasks = await getTasks();

  return (
    <div>
      <PageHeader title="Users" />
      <DataTable data={tasks} columns={columns} />
    </div>
  );
};

export default Users;
