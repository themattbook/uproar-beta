import postData from "./data/_post.json";
import Post from "./components/Post";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";
function App() {
	return (
		<div className="container mx-auto height-screen">
			<div className="row justify-center height-full">
				<div className="col-2-xs text-center px-4 font-bold height-full hidden-mobile">
					<div className="row-col justify-content-space-evenly height-full">
						<SidebarLeft />
					</div>
				</div>
				<div className="col-12-xs col-7-lg posts">
					{postData.map((post, index) => (
						<Post
							key={index}
							content={post}
							isOnline={post.isOnline}
						/>
					))}
				</div>
				<div className="col-2-xs text-center px-4 font-bold height-full hidden-mobile">
					<div className="row-col justify-content-space-evenly height-full">
						<SidebarRight />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
