import { useEffect, useState } from "react";
import axios from "axios";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    /*useEffect(() => {

    let config = {
      method: 'get',
      url: import.meta.env.VITE_API_URL + '/api/products?populate=*&filters[type][$eq]=' + type,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + import.meta.env.VITE_API_TOKEN
      }
    };

    axios.request(config)
      .then((response) => {
        setProducts(response.data.data)
        console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }, [])*/




    useEffect(() => {

        const makeRequest = axios.create({
            baseURL: import.meta.env.VITE_API_URL,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + import.meta.env.VITE_API_TOKEN
            },
        });

        const fetchData = async () => {

            try {
                setLoading(true);

                const res = await makeRequest.get(url);
                setData(res.data.data);

            } catch (err) {
                console.log(error);
                setError(true);
            }
            setLoading(false);


            /*setLoading(true);

            makeRequest.request(url)
                .then((res) => {
                    setData(res.data.data);
                    console.log(res.data.data)
                })
                .catch((error) => {
                    setError(true);
                    //console.log(error);
                });

            setLoading(false);*/
        };

        fetchData();

    }, [url]);

    return { data, loading, error };
};

export default useFetch;