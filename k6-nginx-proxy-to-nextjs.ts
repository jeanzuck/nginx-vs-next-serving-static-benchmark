/* eslint-disable */
import http from "k6/http";

export const options = {
  vus: 10,
  duration: "10s",
}

export default function () {
  http.get("http://localhost/nextjs/next.svg");
}