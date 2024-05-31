import { useEffect, useState } from "react";

export function useFetch(URL) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [fetchTrigger, setFetchTrigger] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error('The response is not OK :c');
                };
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData(URL);
    }, [URL, fetchTrigger])

    const refetch = () => {
        setFetchTrigger(prev => prev + 1);
    };

    return { data, refetch, loading};
};