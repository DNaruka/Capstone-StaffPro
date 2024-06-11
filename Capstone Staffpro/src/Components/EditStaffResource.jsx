import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditStaffResource = () => {
    const {id} = useParams()
    const [StaffResource, setStaffResource] = useState({
        name: "",
        email: "",
        salary: "",
        address: "",
        Department_id: "",
      });
      const [Department, setDepartment] = useState([])
      const navigate = useNavigate()

      useEffect(()=> {
        axios.get('http://localhost:3000/auth/Department')
        .then(result => {
            if(result.data.Status) {
                setDepartment(result.data.Result);
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))

        axios.get('http://localhost:3000/auth/StaffResource/'+id)
        .then(result => {
            setStaffResource({
                ...StaffResource,
                name: result.data.Result[0].name,
                email: result.data.Result[0].email,
                address: result.data.Result[0].address,
                salary: result.data.Result[0].salary,
                Department_id: result.data.Result[0].Department_id,
            })
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3000/auth/editStaffResource/'+id, StaffResource)
        .then(result => {
            if(result.data.Status) {
                navigate('/dashboard/StaffResource')
            } else {
                alert(result.data.Error)
            }
        }).catch(err => console.log(err))
    }
    
  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Edit StaffResource</h3>
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
              value={StaffResource.name}
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
              value={StaffResource.email}
              onChange={(e) =>
                setStaffResource({ ...StaffResource, email: e.target.value })
              }
            />
          </div>
          <div className='col-12'>
            <label for="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              value={StaffResource.salary}
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
              value={StaffResource.address}
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
          
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Edit StaffResource
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditStaffResource