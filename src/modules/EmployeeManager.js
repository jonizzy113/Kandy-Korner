const url = "http://localhost:8088"


export default {
    get(id) {
        return fetch(`${url}/employees/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${url}/employees`).then(e => e.json())
    }
}