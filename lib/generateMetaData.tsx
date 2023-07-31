import { getSortedPostsData } from "./posts"

export function generateMetaData({ params }: { params: {postId: string }}) {
    const posts = getSortedPostsData() // deduped
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) return { title: 'Post Not Found'}

    return {
        title: post.title
    }
}