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

INFO[0010] [k6-reporter v2.3.0] Generating HTML summary report  source=console
     data_received..................: 45 MB  4.5 MB/s
     data_sent......................: 2.3 MB 234 kB/s
     http_req_blocked...............: avg=2.37µs  min=0s     med=0s     max=1.07ms p(90)=0s     p(95)=0s
     http_req_connecting............: avg=223ns   min=0s     med=0s     max=1.07ms p(90)=0s     p(95)=0s
     http_req_duration..............: avg=3.68ms  min=1.59ms med=3.78ms max=9.35ms p(90)=4.36ms p(95)=4.46ms
       { expected_response:true }...: avg=3.68ms  min=1.59ms med=3.78ms max=9.35ms p(90)=4.36ms p(95)=4.46ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 26574
     http_req_receiving.............: avg=50.29µs min=0s     med=0s     max=2.36ms p(90)=0s     p(95)=544.9µs
     http_req_sending...............: avg=12.78µs min=0s     med=0s     max=1.12ms p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s     p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.62ms  min=1.26ms med=3.55ms max=9.35ms p(90)=4.31ms p(95)=4.42ms
     http_reqs......................: 26574  2656.101618/s
     iteration_duration.............: avg=3.75ms  min=1.91ms med=3.81ms max=9.87ms p(90)=4.39ms p(95)=4.51ms
     iterations.....................: 26574  2656.101618/s
     vus............................: 10     min=10        max=10
```

### nginx

```
     execution: local
        script: k6-nginx.ts
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
              * default: 10 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 55 MB  5.5 MB/s
     data_sent......................: 2.5 MB 247 kB/s
     http_req_blocked...............: avg=6.74µs  min=0s     med=0s      max=10.5ms  p(90)=0s     p(95)=0s
     http_req_connecting............: avg=865ns   min=0s     med=0s      max=1.64ms  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=3.56ms  min=1.64ms med=3.36ms  max=9.33ms  p(90)=4.44ms p(95)=4.72ms
       { expected_response:true }...: avg=3.56ms  min=1.64ms med=3.36ms  max=9.33ms  p(90)=4.44ms p(95)=4.72ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 27436
     http_req_receiving.............: avg=539.9µs min=0s     med=553.2µs max=3.91ms  p(90)=1.08ms p(95)=1.11ms
     http_req_sending...............: avg=14.11µs min=0s     med=0s      max=1.15ms  p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s      max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=3.01ms  min=1.15ms med=2.81ms  max=8.71ms  p(90)=3.88ms p(95)=4.01ms
     http_reqs......................: 27436  2742.446637/s
     iteration_duration.............: avg=3.63ms  min=1.64ms med=3.4ms   max=15.47ms p(90)=4.46ms p(95)=4.92ms
     iterations.....................: 27436  2742.446637/s
     vus............................: 10     min=10        max=10
     vus_max........................: 10     min=10        max=10
```

### nginx proxy to nextjs

```
     execution: local
        script: k6-nginx-proxy-to-nextjs.ts
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
              * default: 10 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 22 MB  2.1 MB/s
     data_sent......................: 938 kB 94 kB/s
     http_req_blocked...............: avg=12.06µs min=0s     med=0s     max=8.6ms   p(90)=0s      p(95)=0s
     http_req_connecting............: avg=1.35µs  min=0s     med=0s     max=1.07ms  p(90)=0s      p(95)=0s
     http_req_duration..............: avg=9.49ms  min=5.41ms med=9.33ms max=26.45ms p(90)=11.42ms p(95)=12.1ms
       { expected_response:true }...: avg=9.49ms  min=5.41ms med=9.33ms max=26.45ms p(90)=11.42ms p(95)=12.1ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 10420
     http_req_receiving.............: avg=78.04µs min=0s     med=0s     max=2.06ms  p(90)=540.1µs p(95)=556.6µs
     http_req_sending...............: avg=18.92µs min=0s     med=0s     max=1.27ms  p(90)=0s      p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=9.39ms  min=5.41ms med=9.28ms max=26.45ms p(90)=11.21ms p(95)=12.04ms
     http_reqs......................: 10420  1040.869304/s
     iteration_duration.............: avg=9.58ms  min=5.47ms med=9.37ms max=28.48ms p(90)=11.49ms p(95)=12.14ms
     iterations.....................: 10420  1040.869304/s
     vus............................: 10     min=10        max=10
     vus_max........................: 10     min=10        max=10
```
