import React from 'react';
import PropTypes from 'prop-types';
import { type } from 'os';

const PreLoader = (props)=>(
    <div className="card center-align">
    {!props.message?"":props.message}<br />
    <div className="preloader-wrapper big active">
        <div className="spinner-layer spinner-blue">
        <div className="circle-clipper left">
            <div className="circle"></div>
        </div><div className="gap-patch">
            <div className="circle"></div>
        </div><div className="circle-clipper right">
            <div className="circle"></div>
        </div>
        </div>
        <div className="spinner-layer spinner-red">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>

      <div className="spinner-layer spinner-yellow">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>

      <div className="spinner-layer spinner-green">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
    </div>
);

const NotifierColors = {
    success:"green",
    info:"orange",
    danger:"red",
    warning:"deep-orange lighten-4"
}

export const YummyNotifier = (props)=>{
    const {type,message} = props;
    return(
        <div className={`card-panel white-text ${NotifierColors[type]}`}>
            {message}
        </div>
    );
}

YummyNotifier.propTypes = {
    type: PropTypes.string,
    message: PropTypes.string.isRequired,
}

YummyNotifier.defaultProps = {
    type: "danger"
}

export default PreLoader;