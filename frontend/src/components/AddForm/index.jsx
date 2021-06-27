import React from 'react';

import './AddForm.scss';

const AddForm = () => {
    return (
        <>
            <form className="add-form">
                <div className="form-group">
                    <div className="add-form__row">
                        <h4>
                            <label htmlFor="title">Title</label>
                            <input type="text"
                                   className="form-control"
                                   id="title"
                                   placeholder="Enter title"
                            />
                        </h4>
                    </div>
                </div>
                <div className="form-group">
                    <div className="add-form__row">
                        <h4>
                            <label htmlFor="title">Image url</label>
                            <input type="text"
                                   className="form-control"
                                   id="imageUrl"
                                   placeholder="Enter image url"
                            />
                        </h4>
                    </div>
                </div>
                <div className="form-group">
                    <div className="add-form__row">
                        <h4>
                            <label htmlFor="title">Content</label>
                            <textarea rows="8"
                                      className="form-control"
                                      id="content"
                                      placeholder="Enter text"
                            />
                        </h4>
                    </div>
                </div>
                <button type="submit" className="btn-primary">Submit</button>
            </form>
        </>

    )
}

export default AddForm;