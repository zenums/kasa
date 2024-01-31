import PropTypes from 'prop-types';
import Tag from './Tag';

function GroupTag({ dataLocation }) {
  return (
    <ul className="list-tag">
      {dataLocation.tags.map((tag, index) => (
        <Tag key={index}>{tag}</Tag>
      ))}
    </ul>
  );
}

GroupTag.propTypes = {
  dataLocation: PropTypes.shape({
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default GroupTag;
