import React ,{ useState ,useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import NewsItem from './NewsItem'
//import PropTypes from 'prop-types'

export default function News(props) {
  const [articles, setArticles] = useState([]);
 // const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);

  useEffect(() => {
    
   // document.title = `You clicked ${page} times`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
 
  const  updateNews= async ()=> {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}&category=${props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
   
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
      
    
  }
  const fetchData= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&page=${page+1}&pagesize=${props.pageSize}&category=${props.category}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setPage(page +1 );
  }
 
  return (
    <>
      <InfiniteScroll
        dataLength={articles.length} //This is important field to render the next data
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}>
          <div className='container'>
            <div className="row my-3" >
              { articles.map((element) => {
                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imgUrl={element.urlToImage ? element.urlToImage : ""} newsId={element.url ? element.url : ""} date={element.publishedAt ? element.publishedAt : ""} author={element.author ? element.author : "Unknown"} source={element.source.name ? element.source.name : ""} /> 
                </div>
              })}
            </div>
          </div>
      </InfiniteScroll>
    </>  
  )
}
