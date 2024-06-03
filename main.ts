import { DataPoint } from "./test_data_generator.ts";

export type PossibleDataPoint = DataPoint | undefined;
export type ValueList = PossibleDataPoint[];

const transform = (el?: DataPoint) =>
  el ? `DataPoint: ${el.id} (${el.lat} | ${el.long})` : undefined;

export function flatMapped(arr: ValueList): string[] {
  return arr.flatMap((el) =>
    el === undefined ? [] : transform(el as DataPoint) as string
  );
}

export function mapFilter(arr: ValueList): string[] {
  return arr.map((el) => transform(el)).filter((x) =>
    x !== undefined
  ) as string[];
}

export function reducer(arr: ValueList): string[] {
  return arr.reduce<string[]>((memo: string[], el: PossibleDataPoint) => {
    if (el !== undefined) memo.push(transform(el) as string);
    return memo;
  }, []);
}
