import { Metadata } from '@redwoodjs/web'
import PostCell from 'src/components/Post/PostCell'

interface ArticlePageProps {
  id: number // This comes from the route param
}

const ArticlePage = ({ id }: ArticlePageProps) => {
  return (
    <>
      <Metadata title="Article" description="Article page" />
      <PostCell id={id} />
    </>
  )
}

export default ArticlePage
