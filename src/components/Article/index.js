import Post from '../Post';

const Article = () => {
    return (
       <section className="container">
           <h3>Articles</h3>
           <div className="container-posts mt-5">
            <Post subtitle="tecnologia" title="O guia definitivo do Blog">
                Sint cillum adipisicing excepteur duis velit amet occaecat qui ullamco fugiat.
                Consectetur do mollit Lorem enim aliqua sunt voluptate laborum.
                Ea pariatur non excepteur sint pariatur consectetur exercitation non fugiat.
                Commodo quis adipisicing ad aliqua consectetur sint irure est sint.
            </Post> 
            <Post subtitle="fotografia" title="Quais as melhores cameras em 2021?">
                Sint cillum adipisicing excepteur duis velit amet occaecat qui ullamco fugiat.
                Consectetur do mollit Lorem enim aliqua sunt voluptate laborum.
                Ea pariatur non excepteur sint pariatur consectetur exercitation non fugiat.
                Commodo quis adipisicing ad aliqua consectetur sint irure est sint.
            </Post>
            <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria">
                Sint cillum adipisicing excepteur duis velit amet occaecat qui ullamco fugiat.
                Consectetur do mollit Lorem enim aliqua sunt voluptate laborum.
                Ea pariatur non excepteur sint pariatur consectetur exercitation non fugiat.
                Commodo quis adipisicing ad aliqua consectetur sint irure est sint.
            </Post>
           </div>
          
       </section>
    )
}

export default Article;