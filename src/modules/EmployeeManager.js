const url = "http://localhost:8088"


export default {
    get(id) {
        return fetch(`${url}/employees/${id}`).then(e => e.json())
    },
    getAll() {
        return fetch(`${url}/employees`).then(e => e.json())
    },
    delete(id) {
        return fetch(`${url}/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
    },
    post(newEmployee) {
        return fetch(`${url}/employees`, {
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }).then(data => data.json())
    }
}