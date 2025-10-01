import { Link } from "react-router-dom";

const OpcionMenu = ({ location, to, children }) => {
    return (
        location && location.pathname !== to && (
            <li>
                <Link to={to}>{children}</Link>
            </li>
        )
    );
};

export default OpcionMenu;