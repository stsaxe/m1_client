import 'styles/ui/UserList.scss';
import PropTypes from "prop-types";

const UserList = props => (
  <ul {...props} className={`user-list ${props.className ?? ''}`}>
    {props.children}
  </ul>
);

UserList.propTypes = {
  children: PropTypes.node,
};

export default UserList;