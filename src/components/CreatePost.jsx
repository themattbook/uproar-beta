import { SlPicture, SlEmotsmile } from "react-icons/sl";

function CreatePost() {
	return (
		<div className="col-12-xs mx-auto mt-1 mb-1">
			<div className="create-post-form">
				<div className="create-post-avatar-container">
					<img
						src="https://images.unsplash.com/photo-1640951613773-54706e06851d"
						alt="profile"
					/>
				</div>
				<div className="text-area-container">
					<textarea
						type="text"
						placeholder="Tell them how you really feel..."
					/>
				</div>
				<div className="icon-container">
					<SlPicture className="icon" />
					<SlEmotsmile className="icon" />
				</div>
			</div>
		</div>
	);
}

export default CreatePost;
