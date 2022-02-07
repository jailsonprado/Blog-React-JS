import Post from '../Post';

const Article = () => {
    return (
       <section className="container">
           <h3>Articles</h3>
           <div className="container-posts mt-5">
            <Post subtitle="tecnologia" title="O guia definitivo do Blog">
                
            </Post> 
           </div>
          
       </section>
    )
}

export default Article;