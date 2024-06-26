import React, { useEffect, useState } from 'react'

export const useFetch = (url, method = 'GET') => {

    const [response, setResponse] = useState({
        data: null,
        loading: false
    })

    useEffect(function() {
        fetch(url, {method})
            .then(resp => resp.json())
            .then(json => setResponse({data: json, loading: false}))
    }, [url, method])

    return response
    
}