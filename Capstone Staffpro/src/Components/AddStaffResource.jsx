import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddStaffResource = () => {
  const [StaffResource, setStaffResource] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    address: "",
    Department_id: "",
    image: "",
  });
  const [Department, setDepartment] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/Department")
      .then((result) => {
        if (result.data.Status) {
          setDepartment(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('name', StaffResource.name);
    formData.append('email', StaffResource.email);
    formData.append('password', StaffResource.password);
    formData.append('address', StaffResource.address);
    formData.append('salary', StaffResource.salary);
    formData.append('image', StaffResource.image);
    formData.append('Department_id', StaffResource.Department_id);

    axios.post('http://localhost:3000/auth/AddStaffResource', formData)
    .then(result => {
        if(result.data.Status) {
            navigate('/Dashboard/StaffResource')
        } else {
            alert(result.data.Error)
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add StaffResource</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label for="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setStaffResource({ ...StaffResource, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) =>
                setStaffResource({ ...StaffResource, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              onChange={(e) =>
                setStaffResource({ ...StaffResource, password: e.target.value })
              }
            />
            <label for="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              onChange={(e) =>
                setStaffResource({ ...StaffResource, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              onChange={(e) =>
                setStaffResource({ ...StaffResource, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label for="Department" className="form-label">
              Department
            </label>
            <select name="Department" id="Department" className="form-select"
                onChange={(e) => setStaffResource({...StaffResource, Department_id: e.target.value})}>
              {Department.map((c) => {
                return <option value={c.id}>{c.name}</option>;
              })}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label" for="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => setStaffResource({...StaffResource, image: e.target.files[0]})}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Add StaffResource
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStaffResource;