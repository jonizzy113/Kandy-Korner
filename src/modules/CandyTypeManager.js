const url = "http://localhost:8088"


export default {
    get(id) {
        return fetch(`${url}/candyTypes/${id}`).then(c => c.json())
    },
    getAll() {
        return fetch(`${url}/candyTypes`).then(c => c.json())
    },
    delete(id) {
        return fetch(`${url}/candyTypes/${id}`, {
            method: "DELETE"
        })
        .then(c => c.json())
    }
}