import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const GetMerChant = (status) => {
    const axiosInstance = useAxios();
    const [call, setCall] = useState(false);
    const [merchant, setMerchant] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        setLoading(true);
        axiosInstance.get(`/user/all-user?page=${page}&status=${status}`).then((res) => {
            setLoading(false)
            setMerchant(res.data.user);
            const count = res.data.total;
            const pageNumber = Math.ceil(count / 50);
            setPageCount(pageNumber);
            
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, call]);
    return { merchant, loading, pageCount, setPage, call, setCall}
};




export default GetMerChant;