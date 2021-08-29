import React from "react"
import PropTypes from "prop-types"
import { Media } from "reactstrap"
import { Link } from "react-router-dom"
import { map } from "lodash"

const Reviews = ({ comments }) => {
  return (
    <div>
      {map(comments, (comment, k) => (
        <Media
          className="d-flex border-bottom py-4"
          key={"__media__" + k}
        >
          <img
            src={comment.img}
            className="me-2 rounded-circle avatar-xs"
            alt="img"
          />
          <Media body className="flex-1">
            <h5 className="font-size-15 mt-0 mb-1">{comment.name} <small className="text-muted float-end">{comment.date}</small></h5>
            <p className="text-muted">{comment.description}</p>

            <Link to="#" className="text-muted font-13 d-inline-block"><i
              className="mdi mdi-reply"></i> Reply</Link>


            {comment.childComment
              ? comment.childComment.map((child, key) => (
                <Media className="d-flex mt-4" key={"_media_" + key}>
                  <img
                    src={child.img}
                    className="me-2 rounded-circle avatar-xs"
                    alt="img"
                  />
                  <Media body className="flex-1">
                    <h5 className="font-size-15 mt-0 mb-1">{child.name} <small className="text-muted float-end">{child.date}</small></h5>
                    <p className="text-muted">{child.description}</p>

                    <Link to="#" className="text-muted font-13 d-inline-block"><i
                      className="mdi mdi-reply"></i> Reply</Link>
                  </Media>
                </Media>
              ))
              : null}
          </Media>
        </Media>
      ))}
    </div>
  )
}

Reviews.propTypes = {
  comments: PropTypes.array,
}

export default Reviews
