import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const GetOrders = (status) => {
    let url = status ? `/order/all-order?status=${status}` : `/order/all-order`
    console.log(url)
    const axiosInstance = useAxios();
    const [order, setOrder] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    useEffect(() => {
        setLoading(true);
        axiosInstance.get(url).then((res) => {
            setLoading(false)
            console.log(res.data)
            setOrder(res.data.orders);
            const count = res.data.total;
            const pageNumber = Math.ceil(count / 50);
            setPageCount(pageNumber);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);
    return { order, loading, page, pageCount, setPage }
};

export default GetOrders;