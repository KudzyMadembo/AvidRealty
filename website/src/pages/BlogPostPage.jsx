import { useParams } from 'react-router-dom';
import { BlogPost } from './Blog';

export default function BlogPostPage() {
  const { slug } = useParams();
  return <BlogPost slug={slug} />;
}
