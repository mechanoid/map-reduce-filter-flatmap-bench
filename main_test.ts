import { assertEquals } from "std/assert/mod.ts";

import { flatMapped, mapFilter, reducer, type ValueList } from "./main.ts";
import { DataPoint } from "./test_data_generator.ts";

const testData = [
  undefined,
  undefined,
  { "id": "data-point-2", "lat": 43.244492023987696, "long": 24.9000356519113 },
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  {
    "id": "data-point-8",
    "lat": 77.66354566449135,
    "long": 61.864793175266776,
  },
];

const expectedResult = [
  "DataPoint: data-point-2 (43.244492023987696 | 24.9000356519113)",
  "DataPoint: data-point-8 (77.66354566449135 | 61.864793175266776)",
];

Deno.test("flatmapped version", () => {
  assertEquals(flatMapped(testData as ValueList), expectedResult);
});

Deno.test("mapFilter version", () => {
  assertEquals(mapFilter(testData as ValueList), expectedResult);
});

Deno.test("reducer version", () => {
  assertEquals(reducer(testData as ValueList), expectedResult);
});
