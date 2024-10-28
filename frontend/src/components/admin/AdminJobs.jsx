import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import AdminJobTable from './AdminJobTable';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Input } from '../ui/input';
import { useState } from 'react';
import { setSearchJobByText } from '@/store/jobSlice';

const AdminJobs = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(setSearchJobByText(input))
  },[input,dispatch])
  return (
    <div className="max-w-6xl mx-auto my-10">
    <div className="flex items-center justify-between">
      <Input
        className="w-fit"
        placeholder="Filter by name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Link to="/admin/job/create">
        <Button>Post Job</Button>
      </Link>
    </div>
    <AdminJobTable/>
  </div>
  )
}

export default AdminJobs
