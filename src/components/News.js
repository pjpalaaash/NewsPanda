import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";




const News =(props)=> { 
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  let mode = props.mode  
     

  const updateNews = async () => {
    let Api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cf65852c1e184f819c73a4c78011e678`;
     
    // let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&category=${props.country}&apiKey=28e2405980884b6b82ebb3ede3ef1e7d&page=1&pagesize=10"
    let url = Api+`&page=${page}&pagesize=${props.pageSize}`
    setloading(true)
    let data = await fetch(url)
    let parsedData = await data.json()
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false) 
    setpage(page+1)

  }

 useEffect(() => {
   updateNews()
 },[])
 
  const fetchMoreData = async() => {
    
    // this.setState({page: this.state.page + 1});
    let Api = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=cf65852c1e184f819c73a4c78011e678`;
     
    // let url = "https://newsapi.org/v2/top-headlines?sources=techcrunch&category=${props.country}&apiKey=28e2405980884b6b82ebb3ede3ef1e7d&page=1&pagesize=10"
    let url = Api+`&page=${page}&pagesize=${props.pageSize}`
    setloading(true)
    // this.setState({loading:true}) 
    let data = await fetch(url)
    let parsedData = await data.json()
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)
    // this.setState({articles: articles.concat(parsedData.articles), 
    //     totalResults: parsedData.totalResults, 
    //     loading: false})
    

  }

  
    return (
      <>
            <div className="container-md">
                <h1 className={`text-center text-${mode==="dark"?"light":"black"}`}>NewsPanda Headlines - {(props.category).charAt(0).toUpperCase()+(props.category).slice(1)}</h1>
            </div>
            {loading && <Loading />}
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Loading />}>   
          <div className="container-sm">
                <div className="row my-3">
                    {articles.map((ele)=>{
                    return(
                    <div className="col-md-4"  key= {ele.url} >
                        <NewsItem title={ele.title?ele.title:""} description={ele.description?ele.description:""} imgurl={ele.urlToImage} newsurl={ele.url} mode={mode} />
                    </div>
                    )})}                
                </div>
            </div>
            </InfiniteScroll>
        
      </>
    )
  }


export default News
