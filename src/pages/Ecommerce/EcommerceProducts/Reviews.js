import React from "react"
import PropTypes from "prop-types"
import { Media } from "reactstrap"
import { Link } from "react-router-dom"
import { map } from "lodash"

const Reviews = ({ comments }) => {
  return (
    <div className="mt-4">
      <h5 className="font-size-14 mb-3">Reviews :</h5>
      <div className="text-muted mb-3">
        <span className="badge bg-success font-size-14 me-1"><i className="mdi mdi-star"></i> 4.2</span> 234 Reviews
      </div>
      <div className="border p-4 rounded">
        {map(comments, (comment, k) => (
          <React.Fragment key={ 'review_' + k}>
            <div className={comment.id === 1 ? "border-bottom pb-3" : "border-bottom py-3"}>
              <p className="float-sm-end text-muted font-size-13">{comment.date}</p>
              <div className="badge bg-success mb-2"><i className="mdi mdi-star"></i> {comment.review}</div>
              <p className="text-muted mb-4">{comment.description}</p>
              <Media className="d-flex">
                <div className="flex-1">
                  <h5 className="font-size-15 mb-0">{comment.name}</h5>
                </div>

                <ul className="list-inline product-review-link mb-0">
                  <li className="list-inline-item">
                    <Link to="#"><i className="uil uil-thumbs-up"></i></Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#"><i className="uil uil-comment-alt-message"></i></Link>
                  </li>
                </ul>
              </Media>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

Reviews.propTypes = {
  comments: PropTypes.array,
}

export default Reviews
