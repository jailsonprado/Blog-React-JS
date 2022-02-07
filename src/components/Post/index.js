import {useEffect, useState} from 'react'


const Post = (props) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/posts')
        .then((response) => response.json())
        .then((response) => {
            setPosts(response);
        })
    })


    return (
        <>
        {posts.map((item) => {
            return (
                <div className="post mx-2" key={item.id}>
                <div className="img-post">
    
                </div>
                <h5>{item.category}</h5>
                <h3>{props.title}</h3>
                <p className="mt-1">
                    {item.description}
                </p>
                <div className="flex pt-2">
                    <div className="img-profile"></div>
                    <div className="desc-profile ml-2">
                        <h6 className="color-blue">{item.author}</h6>
                        <p>
                            {item.date}
                        </p>
                    </div>
                </div>
            </div>
            )
        })}
       </>
    )
}

export default Post;