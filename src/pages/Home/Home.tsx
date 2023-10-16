import HeaderSlide from '../../components/HeaderSlide'
import RecommendProps  from '../../components/RecommendProps'
import useSWR from 'swr'



const Home: React.FC = () => {
    const fetcher = (url : string) => fetch(url).then(r => r.json())

    const { data, error, isLoading } = useSWR('http://localhost:3000/food', fetcher,
    {revalidateIfStale:false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false})

    if(!data) {
        return <>Loading......</>
    }


    return (
        <div>
            <HeaderSlide/>
            <div className='bg-[#E6E4DE]'>
                <div className=" w-[1160px] mx-auto py-44">
                    <h2 className='text-center text-5xl'>RECOMMEND</h2>
                    <p className='text-center text-lg mt-8 mb-28'>季節のおすすめ商品</p>
                    <RecommendProps products={data}  />
                </div>
            </div>
        </div>
    );
}

export default Home;

