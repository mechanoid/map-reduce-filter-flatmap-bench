import { flatMapped, mapFilter, reducer, type ValueList } from "./main.ts";
import data from "./tmp/data.js";

Deno.bench("flatmapped version", () => {
  flatMapped(data as ValueList);
});

Deno.bench("mapFilter version", () => {
  mapFilter(data as ValueList);
});

Deno.bench("reducer version", () => {
  reducer(data as ValueList);
});
