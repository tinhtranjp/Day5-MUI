import { useParams } from "react-router-dom"
import useSWR from 'swr'


export default function FoodItem() {
    const fetcher = (url : string) => fetch(url).then(r => r.json())

    const { data } = useSWR('http://localhost:3000/food', fetcher,
    {revalidateIfStale:false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false})

    if(!data) {
        return <>Loading......</>
    }

    const {id} = useParams()
    const item = data.find((item: any) => item.id === Number(id));

    if(!item) {
        return <>Khong co san pham nao</>
    }

    
    return (
        <>
            <h2>Ze Ze {item.id}</h2>
            <p>{item.title}</p>
            <p>{item.desc}</p>
            <p>.....................</p>
        </>
    )
}