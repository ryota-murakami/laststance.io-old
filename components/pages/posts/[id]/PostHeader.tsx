import { Avatar } from '../../../elements/Avatar'
import Date from '../../../elements/Date'
import PostTitle from '../PostTitle'
import { Post } from '../../../../DataStructure'

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
    <div className="hidden md:block md:mb-12">
      <Avatar name={author.name} picture={author.picture} />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="block md:hidden mb-6">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-6 text-lg text-gray-500">
        <Date dateString={date} />
      </div>
    </div>
  </>
)

export default PostHeader
