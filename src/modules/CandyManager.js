const url = "http://localhost:8088"


export default {
    get(id) {
        return fetch(`${url}/individualCandies/${id}`).then(l => l.json())
    },
    getAll() {
        return fetch(`${url}/individualCandies`).then(l => l.json())
    },
    delete(id) {
        return fetch(`${url}/individualCandies/${id}`, {
            method: "DELETE"
        })
        .then(l => l.json())
    }
}