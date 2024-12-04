import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { databases, DATABASE_ID, COLLECTION_ID } from '../appwrite'
import { Query } from 'appwrite'
import Marquee from '../components/Marquee'

const Blogs = () => {
    const [blogPosts, setBlogPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await databases.listDocuments(
                    DATABASE_ID,
                    COLLECTION_ID,
                    [
                        Query.orderDesc('$createdAt'),
                        Query.limit(10)
                    ]
                )
                setBlogPosts(response.documents)
                setLoading(false)
            } catch (err) {
                setError('Failed to fetch blog posts')
                setLoading(false)
            }
        }

        fetchBlogs()
    }, [])

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(dateString).toLocaleDateString(undefined, options)
    }

    if (loading) return <div className="flex justify-center items-center h-screen font-teko">Loading...</div>
    if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>

    return (
        <section className='px-4 pt-24 pb-7 bg-secondary text-left max-w-6xl h-screen mx-auto'>
            <Marquee title="BLOGS" textSize="text-6xl lg:text-8xl" marginBottom="mb-6" />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 font-teko text-primary">
                {blogPosts.map((post) => (
                    <div key={post.$id} className='border border-black p-3 h-fit'>
                        <Link to={`/blog/${post.$id}`} className='text-xl sm:text-2xl font-semibold hover:underline block mb-3'>
                            {post.title}
                        </Link>
                        <p className='text-sm sm:text-base'>
                            {post.description.length > 150
                                ? `${post.description.substring(0, 150)}...`
                                : post.description}
                        </p>
                        <p className='text-xs sm:text-sm text-gray-700'>
                            Created on {formatDate(post.$createdAt)}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blogs