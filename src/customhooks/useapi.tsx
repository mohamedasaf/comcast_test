function getMethod(url: string, options?: RequestInit) {
    return fetch(url, options)
        .then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
        .then((responseData) => {
            return { res: responseData, isLoading: false, isError: false }
        })
        .catch((error) => {
            return { err: error, isLoading: false, isError: false }
        });

};

export default getMethod;
