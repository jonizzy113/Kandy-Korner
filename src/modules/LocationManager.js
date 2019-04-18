const url = "http://localhost:8088"

export default {
    get(id) {
        return fetch(`${url}/locations/${id}`).then(l => l.json())
    },
    getAll() {
        return fetch(`${url}/locations`).then(l => l.json())
    },
    delete(id) {
        return fetch(`${url}/locations/${id}`, {
            method: "DELETE"
        })
        .then(l => l.json())
    }
}