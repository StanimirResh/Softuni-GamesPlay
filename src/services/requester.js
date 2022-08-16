const request = async (method, url, data) => {
    let buildRequest;

    let loggedUser = localStorage.getItem('auth');

    let headers = {}

    if (loggedUser) {
        loggedUser = JSON.parse(loggedUser);
        headers['X-Authorization'] = loggedUser.accessToken
    }

    if (method === 'GET') {
        buildRequest = fetch(url, {headers})
    } else {
        buildRequest = fetch(url, {
            method,
            headers: {
                ...headers,
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    const response = await buildRequest;
    const result = await response.json();
    return result;
}


export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');

