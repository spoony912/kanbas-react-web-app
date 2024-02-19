import { HiEllipsisVertical } from "react-icons/hi2";
import ModuleList from "./List";

function Modules() {
  return (
    <div>
      <div className="wd-full-width">
          <div className="container">
              <div className="row">
                <div >
                    <div className="d-flex justify-content-end me-4 mt-2">
                        <button type="button" className="btn btn-outline-dark btn-light me-1">Collapse All</button>
                        <button type="button" className="btn btn-outline-dark btn-light me-1">View Progress</button>
                        <label htmlFor="select-one-publish"></label>
                        <select id="select-one-publish" className="me-1">
                            <option selected>Publish All</option>
                        </select>
                        <button type="button" className="btn btn-danger me-1"> + Module</button>
                        <button type="button" className="btn btn-outline-dark btn-light">
                            <HiEllipsisVertical />
                        </button>
                    </div>
                    <hr className="me-4"/>
                    <div className="ms-2 mt-2 me-4 mb-2">
                        <ModuleList />
                    </div>
                </div>
              </div> 
          </div>
      </div>
    </div>
  )
}

export default Modules;