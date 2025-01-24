import { useParams } from "react-router";
import posts from "json/posts.json"
import PostModelo from "Componentes/PostModelo";
import Markdown from "react-markdown";
import "./Post.css"

const Post = () => {

    const parametros = useParams()
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })
    if (!post) {
        return <h1>Post Não encontrado</h1>
    }
    return (
        <PostModelo
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <Markdown>
                    {post.texto}
                </Markdown>
            </div>
        </PostModelo>
    )
}

export default Post;