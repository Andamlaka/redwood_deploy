import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

interface ArticleCellProps {
  id: number;
 
}

export const QUERY: TypedDocumentNode<
  FindArticleQuery,
  FindArticleQueryVariables
> = gql`
  query FindArticleQuery($id: Int!) {
    article: article(id: $id) {
      id,
      
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div className="error-message">Error: {error?.message}</div>
)

export const Success = ({
  article,
  
}: CellSuccessProps<FindArticleQuery, FindArticleQueryVariables>) => {
  return <div>{JSON.stringify(article)}</div>
}