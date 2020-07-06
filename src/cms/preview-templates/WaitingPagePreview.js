import React from "react";
import PropTypes from "prop-types";
import { WaitingPageTemplate } from "../../templates/waiting-page";

const WaitingPagePreview = ({ entry, widgetFor }) => <></>;

WaitingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default WaitingPagePreview;
