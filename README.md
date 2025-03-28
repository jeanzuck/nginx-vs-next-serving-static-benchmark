# nginx-vs-next-static-benchmark

Reproduce

```
bun install
bun run build
docker-compose up -d
k6 run k6-nextjs.ts
k6 run k6-nginx.ts
k6 run k6-nginx-proxy-to-nextjs.ts
```

### nextjs

```
     execution: local
        script: k6-nextjs.ts
 web dashboard: http://127.0.0.1:5665
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
              * default: 10 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 44 MB  4.4 MB/s
     data_sent......................: 2.3 MB 228 kB/s
     http_req_blocked...............: avg=4.77µs  min=0s    med=0s     max=7.52ms  p(90)=0s     p(95)=0s
     http_req_connecting............: avg=363ns   min=0s    med=0s     max=1.1ms   p(90)=0s     p(95)=0s
     http_req_duration..............: avg=3.77ms  min=1.3ms med=3.59ms max=53.12ms p(90)=4.41ms p(95)=5.35ms
       { expected_response:true }...: avg=3.77ms  min=1.3ms med=3.59ms max=53.12ms p(90)=4.41ms p(95)=5.35ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 25955
     http_req_receiving.............: avg=49.34µs min=0s    med=0s     max=1.85ms  p(90)=0s     p(95)=544.4µs
     http_req_sending...............: avg=12.99µs min=0s    med=0s     max=1.52ms  p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s    med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.71ms  min=1.3ms med=3.4ms  max=53.12ms p(90)=4.39ms p(95)=5.14ms
     http_reqs......................: 25955  2594.731233/s
     iteration_duration.............: avg=3.84ms  min=1.3ms med=3.77ms max=60.64ms p(90)=4.44ms p(95)=5.43ms
     iterations.....................: 25955  2594.731233/s
     vus............................: 10     min=10        max=10
     vus_max........................: 10     min=10        max=10
```

### nginx

```
     execution: local
        script: k6-nginx.ts
 web dashboard: http://127.0.0.1:5665
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
              * default: 10 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 58 MB  5.8 MB/s
     data_sent......................: 2.6 MB 263 kB/s
     http_req_blocked...............: avg=5.5µs    min=0s     med=0s      max=7.7ms    p(90)=0s       p(95)=0s
     http_req_connecting............: avg=504ns    min=0s     med=0s      max=622.29µs p(90)=0s       p(95)=0s
     http_req_duration..............: avg=3.35ms   min=1.58ms med=3.29ms  max=15.54ms  p(90)=4.35ms   p(95)=4.45ms
       { expected_response:true }...: avg=3.35ms   min=1.58ms med=3.29ms  max=15.54ms  p(90)=4.35ms   p(95)=4.45ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 29194
     http_req_receiving.............: avg=497.98µs min=0s     med=546.9µs max=12.24ms  p(90)=785.07µs p(95)=1.09ms
     http_req_sending...............: avg=13.53µs  min=0s     med=0s      max=1.78ms   p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s     med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=2.84ms   min=1.08ms med=2.75ms  max=13.34ms  p(90)=3.81ms   p(95)=3.9ms
     http_reqs......................: 29194  2918.521029/s
     iteration_duration.............: avg=3.41ms   min=1.58ms med=3.31ms  max=18.21ms  p(90)=4.37ms   p(95)=4.48ms
     iterations.....................: 29194  2918.521029/s
     vus............................: 10     min=10        max=10
     vus_max........................: 10     min=10        max=10
```

### nginx proxy to nextjs

```
     execution: local
        script: k6-nginx-proxy-to-nextjs.ts
 web dashboard: http://127.0.0.1:5665
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
              * default: 10 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 36 MB  3.6 MB/s
     data_sent......................: 1.6 MB 158 kB/s
     http_req_blocked...............: avg=6.66µs  min=0s     med=0s     max=7.28ms  p(90)=0s      p(95)=0s
     http_req_connecting............: avg=601ns   min=0s     med=0s     max=1.09ms  p(90)=0s      p(95)=0s
     http_req_duration..............: avg=5.62ms  min=2.58ms med=4.95ms max=22.83ms p(90)=8.74ms  p(95)=9.94ms
       { expected_response:true }...: avg=5.62ms  min=2.58ms med=4.95ms max=22.83ms p(90)=8.74ms  p(95)=9.94ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 17517
     http_req_receiving.............: avg=59.12µs min=0s     med=0s     max=1.55ms  p(90)=519.9µs p(95)=549.79µs
     http_req_sending...............: avg=16.26µs min=0s     med=0s     max=1.77ms  p(90)=0s      p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=5.54ms  min=2.58ms med=4.93ms max=22.28ms p(90)=8.69ms  p(95)=9.88ms
     http_reqs......................: 17517  1750.230909/s
     iteration_duration.............: avg=5.69ms  min=2.58ms med=4.97ms max=22.83ms p(90)=8.78ms  p(95)=10.01ms
     iterations.....................: 17517  1750.230909/s
     vus............................: 10     min=10        max=10
     vus_max........................: 10     min=10        max=10
```
