import React from 'react'

const NewsItem = (props)=> {
   
    let {title, description, imgurl,newsurl,mode} = props;
    
    
    return (
      <div >
        
          <div className="card my-3 mx-2 shadow  rounded" style={{backgroundColor: props.mode==="dark"?"#078a48":"white",color:props.mode==="dark"?"white":"black",border: `2px solid ${props.mode==="dark"?"white":"#078a48"}`}} >
            <img src={!imgurl?"https://play-lh.googleusercontent.com/jnHcPC4n4aiQwOApIloUqsKllbsUJx8s4zGeLPEjfx9RxoOfPugbHPiIfrvfGOOFtg":imgurl} className="card-img-top" alt="..."/>
            <div className={`card-body `} >
                <h5 className={`card-title `}>{title}</h5>
                <p className={`card-text `}>{description}...</p>
                <a href={newsurl} className="btn btn-sm btn-danger" target="_blank" rel="noreferrer noopener">Read More</a>
            </div>
            </div>
       
      </div>
    )
 
}

export default NewsItem
