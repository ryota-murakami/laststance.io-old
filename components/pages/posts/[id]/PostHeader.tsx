import { Avatar } from '../../../elements/Avatar'
import Date from '../../../elements/Date'
import PostTitle from '../PostTitle'
import { Post } from '../../../../types'

interface Props {
  title: Post['title']
  coverImageUrl: Post['coverImageUrl']
  author: Post['author']
  date: Post['date']
  slug: Post['slug']
}

const PostHeader: React.FC<Props> = ({ title, date, author }) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="flex space-x-4">
      <Avatar name={author.name} picture={author.picture} />
      <Date dateString={date} />
    </div>
  </>
)

export default PostHeader
