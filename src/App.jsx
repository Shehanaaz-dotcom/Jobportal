import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Search from './components/Search'
import JobCard from './components/JobCard'
import { BrowserRouter,Routes ,Route, Link,Outlet} from 'react-router-dom'


import { collection, query, where, getDocs ,orderBy} from "firebase/firestore";
import {db} from "./firebase.config"

function App() {
  const [jobs, setJobs] = useState([])
  const [customSearch,setCustomSearch] = useState(false);




  
  const fetchJobs= async() =>{

  setCustomSearch(false)
  const tempJobs=[]
  const jobsRef =query(collection(db,"jobs"));
  const q = query(jobsRef, orderBy("postedOn","desc"));
  const req = await getDocs(q);
 
  req.forEach((jobs) => {
  tempJobs.push({
  ...jobs.data(),
  id:jobs.id,
  postedOn:jobs.data().postedOn.toDate()
  })
  });
  setJobs(tempJobs);
  
}



  const fetchJobsCustom = async(jobCriteria) =>{
 setCustomSearch(true);
  const tempJobs=[]
  const jobsRef =query(collection(db,"jobs"));
  const q = query(jobsRef, 
  where("title","==",jobCriteria.title),
  where("company","==",jobCriteria.company),
  where("experience","==",jobCriteria.experience),
  where("location","==",jobCriteria.location),
  where("jobtype","==",jobCriteria.jobtype),
    where("workmode","==",jobCriteria.workmode),
   orderBy("postedOn","desc"));
  const req = await getDocs(q);
  req.forEach((jobs) => {

  tempJobs.push({
    ...jobs.data(),
    id:jobs.id,
    postedOn:jobs.data().postedOn.toDate()
  })
  });
 setJobs(tempJobs);
  
}




useEffect(()=>{
  fetchJobs()
},[])

  return (

      <div>


       
<Navbar/>
      <Header/>
    <Search fetchJobsCustom={fetchJobsCustom}  />  
    
   {customSearch &&
   <button className ="flex pl-[1212px] mb-2 font-bold" onClick={fetchJobs} >
    <p className="bg-blue-500 px-10 py-2 rounded-md text-white hover:translate-y-1 hover:scale-103">Clear filters</p>
    </button>}
   {jobs.map((job)=>(
 <JobCard key={job.id} {...job}/> ))}
    
      



   
  </div>
 
  )
}

export default App
