import React from 'react'
import './style.scss'
import Slider from 'react-rangeslider'

class Contact extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      value: 100,
    }
  }

  handleChange = value => {
    this.setState({
      value: value,
    })
  }
  render() {
    const { value } = this.state
    const { location, title } = this.props
    return (
      <section id="contact">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2">&nbsp;</div>
            <div className="col-lg-8">
              <div className="section-heading heading-black">
                <h1 className="name text-left">Contact</h1>
              </div>
            </div>
          </div>
          <div className="row contact">
            <div className="col-lg-2">&nbsp;</div>
            <div className="col-lg-8 col-sm-8">
              <form method="post" action="submited.php#contact">
                <div className="contact-form">
                  <div className="row contact-spacing">
                    <div className="col-lg-6">
                      <input
                        name="name"
                        placeholder="Your Name"
                        required="required"
                        size="8"
                        type="text"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        name="email"
                        placeholder="Email"
                        required="required"
                        size="8"
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="row contact-spacing">
                    <div className="col-lg-6">
                      <input
                        name="telefon"
                        placeholder="Phone Number"
                        required="required"
                        size="8"
                        type="text"
                      />
                    </div>
                    <div className="col-lg-6">
                      <input
                        name="company"
                        placeholder="Company / Agency"
                        required="required"
                        size="8"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="row contact-spacing">
                    <div className="col-lg-6">
                      <label>Budget Estimate</label>
                      <div className="slider" name="budget1">
                        <Slider
                          min={100}
                          max={100000}
                          step={100}
                          value={value}
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div name="budget" id="amount">
                        {value}
                      </div>
                    </div>
                  </div>
                  <div className="row contact-spacing">
                    <div className="col-lg-12">
                      <textarea
                        className="span12"
                        name="details"
                        placeholder="Project Details"
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="row contact-spacing">
                    <div className="col-lg-12">
                      <button
                        name="submit"
                        className="btn btn-three"
                        type="submit"
                      >
                        <span>Submit</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-2">&nbsp;</div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
