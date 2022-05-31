import React, { useState } from "react";
import { connect } from "react-redux";
import Title from "../common/title";
import "../../styles/sms.css";
import APsMultiSelection from "./apsMultiSelection";

function SendSMSComponent(props) {
  const [formData, setFormData] = useState({
    dltSender: "",
    dltTemplate: "",
    content: "",
    userType: "all",
    users: [],
  });

  async function handleChange(e) {
    const { name, value } = e.target;
    let res = { [name]: value };
    await setFormData((prevState) => ({
      ...prevState,
      ...res,
    }));
  }
  return (
    <div>
      <Title title={"Send SMS"} />
      <div className="col-lg-12 p-4" style={{ backgroundColor: "#e0e0e0" }}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="pb-2">Select Sending Type*:</label>
            <select
              size="small"
              id="userType"
              name="userType"
              className="form-select-"
              value={formData.userType}
              onChange={(e) => handleChange(e)}
            >
              <option value="all">All Users</option>
              <option value="individual">Select Indivisually</option>
            </select>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
        </div>
        {formData.userType !== "all" ? (
          <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
            <label className="pb-2">Select Users*:</label>
            <APsMultiSelection
              // name="dltSender"
              // value={formData.dltSender}
              onChange={(e) => handleChange(e)}
            />
          </div>
        ) : (
          ""
        )}
        <div className="row mt-3">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="pb-2">DLT Sender ID*:</label>
            <input
              style={{ borderRadius: 0 }}
              placeholder="Enter DLT Sender ID"
              className="form-control"
              variant="outlined"
              size="small"
              id="dltSender"
              name="dltSender"
              value={formData.dltSender}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <label className="pb-2">DLT Sender ID*:</label>
            <input
              style={{ borderRadius: 0 }}
              placeholder="Enter DLT Template ID"
              className="form-control"
              variant="outlined"
              size="small"
              id="dltTemplate"
              name="dltTemplate"
              value={formData.dltTemplate}
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-3">
          <label className="pb-2">Content*:</label>
          <textarea
            style={{ borderRadius: 0 }}
            placeholder="Enter content"
            className="form-control"
            variant="outlined"
            size="small"
            id="content"
            name="content"
            value={formData.content}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mt-3" style={{ paddingBottom: 25 }}>
          <button className="custom-button btn-primarym pull-right">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SendSMSComponent);
