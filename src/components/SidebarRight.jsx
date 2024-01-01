import { FaSearch } from "react-icons/fa";
import NewsItem from "./NewsItem";
function SidebarRight() {
	return (
		<div className="sidebar-right">
			<div className="sidebar-right-item">
				<div className="sidebar-right-search-container">
					<FaSearch className="sidebar-right-search-icon" />
					<input
						type="text"
						className="sidebar-right-search-bar"
						placeholder="Search"
					/>
				</div>
			</div>
			<div className="sidebar-right-item">
				<h5>Latest News</h5>
			</div>
			<div className="sidebar-right-item">
				<NewsItem
					headline="Scientists Make Breakthrough in Clean Energy"
					supplementaryText="Researchers have developed a new technology that promises to revolutionize the way we generate and harness clean energy, offering hope for a sustainable future."
				/>
			</div>
			<div className="sidebar-right-item">
				<NewsItem
					headline="Global Markets React"
					supplementaryText="Financial markets experienced fluctuations today as governments worldwide unveiled a comprehensive economic stimulus plan."
				/>
			</div>
			<div className="sidebar-right-item mt-5">
				<h5>Trending</h5>
			</div>
			<div className="sidebar-right-item">
				<NewsItem
					headline="Scientists Make Breakthrough in Clean Energy"
					supplementaryText="Researchers have developed a new technology that promises to revolutionize the way we generate and harness clean energy, offering hope for a sustainable future."
				/>
			</div>
			<div className="sidebar-right-item">
				<NewsItem
					headline="Global Markets React"
					supplementaryText="Financial markets experienced fluctuations today as governments worldwide unveiled a comprehensive economic stimulus plan."
				/>
			</div>
		</div>
	);
}

export default SidebarRight;
