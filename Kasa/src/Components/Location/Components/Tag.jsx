import PropTypes from 'prop-types';

function Tag({ children  }) {
  return (
    <li>{children}</li>
  );
}

Tag.propTypes = {
  children: PropTypes.string
};

export default Tag;
