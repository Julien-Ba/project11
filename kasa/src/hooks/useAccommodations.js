// hooks/useAccommodations.js
import { useState, useEffect } from 'react';

export function useAccommodations() {
    const [accommodations, setAccommodations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const publicUrl = process.env.PUBLIC_URL || '';

    useEffect(() => {
        fetch(`${publicUrl}/data/accommodation.json`)
            .then((res) => res.json())
            .then((data) => {
                setAccommodations(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error loading data:', error);
                setError(error);
                setLoading(false);
            });
    }, []);

    return { accommodations, loading, error };
}
