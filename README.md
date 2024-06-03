```
deno task build-test-data # (creates a test data set in tmp)
deno test
deno bench
```

## Example Bench

```
benchmark               time (avg)        iter/s             (min … max)       p75       p99      p995
------------------------------------------------------------------------ -----------------------------
flatmapped version      34.04 µs/iter      29,374.6  (26.81 µs … 488.57 µs) 32.19 µs 161.08 µs 189.87 µs
mapFilter version        32.8 µs/iter      30,484.1  (20.28 µs … 801.89 µs) 42.17 µs 66.05 µs 193.45 µs
reducer version         20.73 µs/iter      48,246.2  (16.75 µs … 356.03 µs) 19.71 µs 34.91 µs 54.58 µs
```
