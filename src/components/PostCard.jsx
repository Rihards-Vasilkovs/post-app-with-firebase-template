import { useNavigate } from "react-router-dom";
import UserAvatar from "./UserAvatar";

export default function PostCard({ post }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/posts/${post.id}`);
  }

  return (
    <article className="post-card" onClick={handleClick}>
      <UserAvatar uid={post.uid} />
      <h4>{post.caption}</h4>
      <img src={post.image} alt={post.caption} />
    </article>
  );
}
