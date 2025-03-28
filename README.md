# Nginx vs NextJS Static Serving Benchmark

## nextjs

```
     execution: local
        script: k6-nextjs.ts
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
              * default: 10 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 336 kB 33 kB/s
     data_sent......................: 18 kB  1.7 kB/s
     http_req_blocked...............: avg=451.18µs min=0s       med=0s      max=9.02ms   p(90)=0s       p(95)=451.18µs
     http_req_connecting............: avg=54.02µs  min=0s       med=0s      max=1.08ms   p(90)=0s       p(95)=54.02µs
     http_req_duration..............: avg=6.45ms   min=4.98ms   med=6.56ms  max=7.77ms   p(90)=7.23ms   p(95)=7.51ms
       { expected_response:true }...: avg=6.45ms   min=4.98ms   med=6.56ms  max=7.77ms   p(90)=7.23ms   p(95)=7.51ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 200
     http_req_receiving.............: avg=76.31µs  min=0s       med=0s      max=1.51ms   p(90)=506.16µs p(95)=540.99µs
     http_req_sending...............: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s      max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=6.37ms   min=4.12ms   med=6.33ms  max=7.77ms   p(90)=7.19ms   p(95)=7.32ms
     http_reqs......................: 200    19.451816/s
     iteration_duration.............: avg=514.04ms min=510.39ms med=513.8ms max=525.18ms p(90)=515.51ms p(95)=516.04ms
     iterations.....................: 200    19.451816/s
     vus............................: 10     min=10      max=10
     vus_max........................: 10     min=10      max=10
```

## nginx

```
     execution: local
        script: k6-nginx.ts
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
              * default: 10 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 399 kB 39 kB/s
     data_sent......................: 18 kB  1.8 kB/s
     http_req_blocked...............: avg=423.88µs min=0s       med=0s       max=8.84ms   p(90)=0s       p(95)=966.68µs
     http_req_connecting............: avg=53.38µs  min=0s       med=0s       max=1.06ms   p(90)=0s       p(95)=53.38µs
     http_req_duration..............: avg=4.99ms   min=3.12ms   med=4.79ms   max=6.99ms   p(90)=6.02ms   p(95)=6.44ms
       { expected_response:true }...: avg=4.99ms   min=3.12ms   med=4.79ms   max=6.99ms   p(90)=6.02ms   p(95)=6.44ms
     http_req_failed................: 0.00%  ✓ 0         ✗ 200
     http_req_receiving.............: avg=471.88µs min=0s       med=523.59µs max=2.77ms   p(90)=769.11µs p(95)=1.09ms
     http_req_sending...............: avg=34.1µs   min=0s       med=0s       max=583.9µs  p(90)=0s       p(95)=555.69µs
     http_req_tls_handshaking.......: avg=0s       min=0s       med=0s       max=0s       p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=4.49ms   min=3.12ms   med=4.2ms    max=6.44ms   p(90)=5.81ms   p(95)=5.91ms
     http_reqs......................: 200    19.472659/s
     iteration_duration.............: avg=513.53ms min=509.63ms med=513.64ms max=518.27ms p(90)=516.29ms p(95)=516.47ms
     iterations.....................: 200    19.472659/s
     vus............................: 10     min=10      max=10
     vus_max........................: 10     min=10      max=10
```

## nginx proxy to nextjs

```
     execution: local
        script: k6-nginx-proxy-to-nextjs.ts
        output: -

     scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
              * default: 10 looping VUs for 10s (gracefulStop: 30s)


     data_received..................: 37 MB  3.7 MB/s
     data_sent......................: 1.6 MB 163 kB/s
     http_req_blocked...............: avg=7.26µs  min=0s     med=0s     max=8.82ms  p(90)=0s     p(95)=0s
     http_req_connecting............: avg=893ns   min=0s     med=0s     max=1.09ms  p(90)=0s     p(95)=0s
     http_req_duration..............: avg=5.42ms  min=2.73ms med=4.96ms max=22.31ms p(90)=7.69ms p(95)=9.56ms
       { expected_response:true }...: avg=5.42ms  min=2.73ms med=4.96ms max=22.31ms p(90)=7.69ms p(95)=9.56ms
     http_req_failed................: 0.00%  ✓ 0           ✗ 18134
     http_req_receiving.............: avg=66.23µs min=0s     med=0s     max=1.43ms  p(90)=538µs  p(95)=556.1µs
     http_req_sending...............: avg=15.58µs min=0s     med=0s     max=1.01ms  p(90)=0s     p(95)=0s
     http_req_tls_handshaking.......: avg=0s      min=0s     med=0s     max=0s      p(90)=0s     p(95)=0s
     http_req_waiting...............: avg=5.34ms  min=2.73ms med=4.92ms max=20.88ms p(90)=7.66ms p(95)=9.45ms
     http_reqs......................: 18134  1811.837598/s
     iteration_duration.............: avg=5.5ms   min=2.82ms med=4.97ms max=22.31ms p(90)=7.74ms p(95)=9.82ms
     iterations.....................: 18134  1811.837598/s
     vus............................: 10     min=10        max=10
     vus_max........................: 10     min=10        max=10
```
