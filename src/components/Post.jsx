import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";

function Post({ content, isOnline }) {
	return (
		<div className="col-12-xs mx-auto mt-1 mb-1">
			<div className="post-container">
				<div className="post-container-header">
					<div className="post-container-header-img-container">
						<img src={content.profileImg} alt="profile" />
						<div
							className={isOnline ? "is-online" : "is-offline"}
						></div>
					</div>
					<p>{content.name}</p>
					<p className={content.tagged ? "tagged" : "not-tagged"}>
						with {content.tagged}
					</p>
				</div>
				<div className="post-container-content">
					<img
						src={content.postImg}
						alt="something"
						className={content.postImg ? "" : "hidden"}
					/>
					<p>{content.post}</p>
				</div>
				<div className="post-container-interaction">
					<div className="item heart">
						<FaRegHeart /> {content.postHearts}
					</div>
					<div className="item">
						<FaRegCommentAlt />
						{content.postComments}
					</div>
					<div className="date">Dec 31</div>
				</div>
				<div className="post-container-comments">
					No comments yet. Be the first to reply!
				</div>
			</div>
		</div>
	);
}

Post.propTypes = {
	isOnline: PropTypes.bool.isRequired,
	content: PropTypes.shape({
		profileImg: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		tagged: PropTypes.string,
		postImg: PropTypes.string,
		post: PropTypes.string,
		postHearts: PropTypes.number.isRequired,
		postComments: PropTypes.number.isRequired,
	}).isRequired,
};

export default Post;
