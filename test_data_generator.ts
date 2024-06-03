import { ensureDir } from "std/fs/mod.ts";

export type DataPoint = {
  id: string;
  lat: number;
  long: number;
};

const dataPoint = (id: string | number): DataPoint => ({
  id: `data-point-${id}`,
  lat: Math.random() * 90,
  long: Math.random() * 90,
});

const initDataSet = Array(1000).fill(1);
const TEST_DATA_FILE = "./tmp/data.js";

await ensureDir("./tmp");
await Deno.writeTextFile(TEST_DATA_FILE, "export default [\n");

for (const i in initDataSet) {
  const dataItem = Math.random() > 0.7 ? dataPoint(i) : undefined;

  await Deno.writeTextFile(
    TEST_DATA_FILE,
    `\t${JSON.stringify(dataItem)},\n`,
    {
      append: true,
    },
  );
}

await Deno.writeTextFile(TEST_DATA_FILE, "]", { append: true });
