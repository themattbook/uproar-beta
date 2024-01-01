import PropTypes from "prop-types";
import { FaNewspaper } from "react-icons/fa";

const NewsItem = ({ headline, supplementaryText }) => {
	return (
		<div className="news-item">
			<div className="icon">
				<FaNewspaper />
			</div>
			<div className="content">
				<p className="headline">{headline}</p>
				<p className="supplementary-text">{supplementaryText}</p>
			</div>
		</div>
	);
};

NewsItem.propTypes = {
	headline: PropTypes.string.isRequired,
	supplementaryText: PropTypes.string.isRequired,
};

export default NewsItem;
