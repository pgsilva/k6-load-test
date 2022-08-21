import http from 'k6/http'
import { check, sleep } from 'k6'

export const options = {
    duration: "10s",
    vus: 10
}

export default function () {
    const response = http.get('http://swapi.dev/api/people/1')
    check(response, { "status is 200": (r) => r.status === 200 })
    sleep(300)
}