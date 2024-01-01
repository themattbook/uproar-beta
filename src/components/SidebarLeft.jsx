import {
	AiOutlineHome,
	AiOutlineSearch,
	AiOutlineHeart,
	AiOutlineUser,
} from "react-icons/ai";
import { FiMessageSquare } from "react-icons/fi";
import { BsBell } from "react-icons/bs";

function SidebarLeft() {
	return (
		<div className="sidebar-left">
			<div className="header">
				<h4>Uproar</h4>
			</div>
			<div className="sidebar-left-item">
				<AiOutlineHome />
				<span>Home</span>
			</div>
			<div className="sidebar-left-item">
				<AiOutlineSearch />
				<span>Explore</span>
			</div>
			<div className="sidebar-left-item">
				<FiMessageSquare />
				<span>Messages</span>
			</div>
			<div className="sidebar-left-item">
				<BsBell />
				<span>Notifications</span>
			</div>
			<div className="sidebar-left-item">
				<AiOutlineHeart />
				<span>Likes</span>
			</div>
			<div className="sidebar-left-item">
				<AiOutlineUser />
				<span>Profile</span>
			</div>
		</div>
	);
}

export default SidebarLeft;
