import CommentSvg from '@/resources/CommentSvg';

interface PostFooterProps {
  commentCount: number;
}
const PostFooter = (props: PostFooterProps) => {
  const { commentCount } = props;
  return (
    <div className="flex items-center gap-1">
      <span>
        <CommentSvg />
      </span>
      <span className="text-cgray-50">{commentCount} comments</span>
    </div>
  );
};

export default PostFooter;
