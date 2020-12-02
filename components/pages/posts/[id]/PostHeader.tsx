import { Avatar } from '../../../generic/Avatar'
import Date from '../../../generic/Date'
import CoverImage from '../../../generic/CoverImage'
import PostTitle from '../PostTitle'
import { Post } from '../../../../DataStructure'

interface Props {
  title: Post['title']
  coverImageUrl: Post['coverImageUrl']
  author: Post['author']
  date: Post['date']
  slug: Post['slug']
}

const PostHeader: React.FC<Props> = ({
  title,
  coverImageUrl,
  date,
  author,
  slug,
}) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className="hidden md:block md:mb-12">
      <Avatar name={author.name} picture={author.picture} />
    </div>
    <div className="mb-8 md:mb-16 sm:mx-0">
      <CoverImage title={title} coverImageUrl={coverImageUrl} slug={slug} />
    </div>
    <div className="max-w-2xl mx-auto">
      <div className="block md:hidden mb-6">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-6 text-lg">
        <Date dateString={date} />
      </div>
    </div>
  </>
)

export default PostHeader
