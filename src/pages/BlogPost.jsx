import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { databases, DATABASE_ID, COLLECTION_ID } from '../appwrite'

export default function BlogPost() {
    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                const response = await databases.getDocument(DATABASE_ID, COLLECTION_ID, id)
                setPost(response)
                setLoading(false)
            } catch (err) {
                setError('Failed to fetch blog post')
                setLoading(false)
            }
        }

        fetchBlogPost()
    }, [id])

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    if (loading) return <div className="flex justify-center items-center h-screen font-teko">Loading...</div>
    if (error) return <div className="flex justify-center items-center h-screen text-red-500 font-teko">{error}</div>
    if (!post) return <div className="flex justify-center items-center h-screen font-teko">Blog post not found</div>

    return (
        <article className="px-4 pt-24 pb-10 bg-secondary text-left max-w-6xl mx-auto relative">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-teko text-primary">{post.title}</h1>
            <p className="text-sm text-gray-700 mb-6 font-teko">
                Last updated on {formatDate(post.$updatedAt)}
            </p>
            <div className="prose prose-lg max-w-none text-primary font-teko">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {post.content}
                </ReactMarkdown>
            </div>
        </article>
    )
}