import {Outlet} from 'react-router-dom';

export const ErrorsLayout = () => {

  return (
      <div className="d-flex flex-column flex-column-fluid">
        <div className="d-flex flex-center flex-column flex-column-fluid p-10">
            <h1><span className="text-black">REACT</span> <span className="text-danger">DEMO</span></h1>
            <div className="text-center text-black">
              <Outlet />
            </div>
        </div>
      </div>
  )
}