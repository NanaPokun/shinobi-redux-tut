import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useParams } from "react-router-dom";

const Post = () => {

    const [ post, setPost ] = useState([]);
    const postList = post.length;
    // const { id } = useParams();
   useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setPost(res.data.slice(0, 10)); 
            });
   }, []);
    
    return (

        {postList } ? (
            posts.map((post)) => {
                return(
                    
                )
            }
        ) : (
            <div className="center">Loading post.......</div>
        )

        <div className="container">
            
        </div>
    );
}
 
export default Post;

// import React from 'react'
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react/cjs/react.production.min';



// const Post = () => {
//   const { id } = useParams();

//   useEffect(() => {
//     console.log(`/post/${id}`);
//   }, []);

//   return (
//     <div className="container">
//       <h4>Post Menu - {id} </h4>
//     </div>
//   );
// }
 
// export default Post;


// class Post extends Component {
//   const { id } = useParams()
//   //   state = {
//   //       id: null
//   //   }
//   //   componentDidMount() {
//   //       let id = this.props.match.params.post_id;
//   //       this.setState({
//   //           id: id
//   //       })
//   //   }  
//   render() {
//     return (
//       <div className='container'>
//           <h4>Post Menu - { id }</h4>
//       </div>
//     )
//   }
// }

// export default Post;