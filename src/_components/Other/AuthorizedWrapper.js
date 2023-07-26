import React from "react";
import PropTypes from "prop-types";
import { isAuthorized } from "../../_helpers/utilities";

export const AuthorizedWrapper = ({ authorizedRoles, children }) => {
    const user = ["Admin"];
    return user &&
        isAuthorized([1], authorizedRoles) &&
        React.isValidElement(children)
        ? children
        : null;
};

AuthorizedWrapper.propTypes = {
    allowedRoles: PropTypes.arrayOf(PropTypes.string),
    children: PropTypes.element,
};
