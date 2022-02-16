import { MoreVert } from "@material-ui/icons";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/1.jpeg" alt="" className="postProfilImg" />
            <span className="postUsername">Wakaibubak</span>
            <span className="postDate">5 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hey It's my first Post</span>
          <img src="/assets/post/1.jpeg" alt="" className="postImg" />
        </div>
        <div className="postButtom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" />
            <img src="/assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">32 people like it</span>
          </div>
          <div className="postBottomRight">
            <div className="postCommentText">9 Comments</div>
          </div>
        </div>
      </div>
    </div>
  );
}
