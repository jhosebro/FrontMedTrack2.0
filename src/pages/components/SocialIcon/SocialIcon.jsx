import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SocialIcon = ({ icon, color, text }) => {
  return (
    <div className="col-6">
    <button className={`btn btn-outline-${color} w-100 my-1`}>
      <div className="row align-items-center">
        <div className="col-2 d-none d-md-block">
          <FontAwesomeIcon icon={icon} size="2x" />
        </div>
        <div className="col-10 text-center text-break">{text}</div>
      </div>
    </button>
  </div>
  )
}
