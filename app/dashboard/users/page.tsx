import { columns } from "@/app/dashboard/users/_components/columns";
import { taskSchema } from "@/app/dashboard/users/data/schema";
import PageHeader from "@/components/PageHeader";
import { DataTable } from "@/components/tables/data-table";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/dashboard/users/data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const Users = async () => {
  const tasks = await getTasks();

  return (
    <div>
      <PageHeader title="Users" />
      <DataTable
        data={tasks}
        columns={columns}
      />
    </div>
  );
};

export default Users;
