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
    },
    postCandy(newCandy) {
        return fetch(`${url}/individualCandies`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCandy)
        }).then(data => data.json())
    }
}