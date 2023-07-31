import getFormattedDate from "@/lib/getFormattedDate"
import { getPostData, getSortedPostsData } from "@/lib/posts"
import { notFound } from 'next/navigation'
import Link from "next/link"

export function generateMetaData({ params }: { params: {postId: string }}) {
    const posts = getSortedPostsData() // deduped
    const { postId } = params

    const post = posts.find(post => post.id === postId)

    if (!post) return { title: 'Post Not Found'}

    return {
        title: post.title
    }
}

export default async function Post({ params }: { params: {postId: string }}) {
    const posts = getSortedPostsData() // deduped
    const { postId } = params

    if (!posts.find(post => post.id === postId)) {
        return notFound()
    }

    const { title, date, contentHtml } = await getPostData(postId)

    const pubDate = getFormattedDate(date)


    
    return (
        <main className='mt-10 prose prose-slate prose-xl sm:prose-base md:prose-lg lg:prose-xl mx-auto prose-custom'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-slate-300 mt-0'>
                {pubDate}
            </p>
            <article className='my-4'>
                <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
                <p className='mt-4'>
                <Link
                    href="/"
                    className=" inline-block px-5 py-3 rounded-md shadow-lg bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 transition-colors duration-200 no-underline"
                >
                    Back to Home
                </Link>
                </p>
            </article>
        </main>
    )
}