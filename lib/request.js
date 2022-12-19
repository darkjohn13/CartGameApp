const noop = () => {};
const NO_PARAMS = {};
const NO_HEADERS = {};


function request({
    method = 'GET',
    url,
    params = NO_PARAMS, 
    headers = NO_HEADERS,
    body,
    responseType = 'json',
    requestType = 'json',
    checkStatusInResponse = false,
    onSuccess = noop,
    onError = noop,
}) {
    const req = new XMLHttpRequest();
    const urlParams = new URLSearchParams(params);
    const queryString = urlParams.toString();

    req.open(method,url + (queryString ? `?${queryString}` : ''));

    Object.keys(headers).forEach((key) => {
        req.setRequestHeader(key, headers[key]);
    });
    req.responseType = responseType;
    // req.responseType = type;

    req.onload = function(event) {
        const target = event.target;

        if (target.status !== 200) {
            onError(target.statusText);
            return;
        }

        if (checkStatusInResponse && target.response.status != 'ok') {
            onError(target.statusText);
            return;
        }

        onSuccess(target.response);
    }

    req.onerror = function() {
        onError();
    }

    let dataBody = body;

    if (requestType === 'urlencoded') {
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        const bodyParams = new URLSearchParams(body);

        dataBody = bodyParams.toString();
    }

    if (requestType === 'json') {
        req.setRequestHeader('Content-type', 'application/json');

        dataBody = JSON.stringify(body);
    }

    req.send(dataBody);
}