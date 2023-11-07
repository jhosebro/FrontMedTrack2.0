import React from 'react'
import { Link } from 'react-router-dom'


export const Dashboard = () => {
  return (
    <div>Dashboard<br />
      <Link type="button" to="/login" class="btn btn-danger">Logout</Link>
    </div>
    
  )
}
