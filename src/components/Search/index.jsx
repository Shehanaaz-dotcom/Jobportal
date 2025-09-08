import React, { useState } from 'react'
import image1 from '../../assets/search.png'





function Search(props) {

  const [jobCriteria,setJobCriteria]=useState({
    title:"",
    company:"",
    experience:"",
    location:"",
    jobtype:"",
    workmode:""
  })

  const handleChange =(e) =>{
    setJobCriteria((prevState)=>({
    ...prevState,
    [e.target.name]: e.target.value

    })
  )

  }

    
 const search = async()=>{
  await props.fetchJobsCustom(jobCriteria);
  

}
 const clearSearch=()=>{
 setJobCriteria({title:"",
    company:"",
    experience:"",
    location:"",
    jobtype:"",
    workmode:""})
  

}



  return (
    <div>
    <div className="flex gap-4 my-10 justify-center p-2 ">
    
        <select    onChange={handleChange}name="title" value={jobCriteria.title} className="w-54 py-3 pl-4 bg-zinc-100 font-semibold rounded-md text-black">
            <option value="" > Job Title</option>
            <option value="iOS Developer">iOS Developer</option>
               <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                 <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Cloud Engineer">Cloud Engineer</option>
                   <option value="Data Scientist">Data Scientist</option>
                    <option value="Data Analyst">Data Analyst</option>
                     <option value="UI/UX Designer">UI/UX Designer</option>
                      <option value="Service Desk Analyst">Service Desk Analyst</option>
                        <option value="Technical support Analyst">Technical support Analyst</option>
                
        </select>

             <select    onChange={handleChange} name="company" value={jobCriteria.company} className="w-54 py-3 pl-4 bg-zinc-100 font-semibold rounded-md text-black">
            <option value="" > Company</option>
            <option value="Apple">Apple</option>
               <option value="Amazon">Amazon</option>
                <option value="Deloitte">Deloitte</option>
                 <option value="EY">EY</option>
                  <option value="Microsoft">Microsoft</option>
                   <option value="Meta">Meta</option>
                    <option value="Oracle">Oracle</option>
                     <option value="PWC">PWC</option>
                      <option value="Kyndryl">Kyndryl</option>
                        <option value="JP Morgan">JP Morgan</option>
                
        </select>

        
     <select   onChange={handleChange} name="experience" value={jobCriteria.experience} className="w-54 py-3 pl-4 bg-zinc-100 font-semibold rounded-md text-black">
            <option value=""  > Experience Level</option>
            <option value="Fresher">Fresher</option>
               <option value="Associate">Associate</option>
                    <option value="Junior-level">Junior-level</option>
                     <option value="Mid-level">Mid-level</option>
                      <option value="Senior-level">Senior-level</option>
              
                
        </select>



          <select   onChange={handleChange} name="location" value={jobCriteria.location} className="w-54 py-3 pl-4 bg-zinc-100 font-semibold border rounded-md text-black">
            <option value=""> Location</option>
            <option value="Benguluru">Benguluru</option>
               <option value="Hyderabad">Hyderabad</option>
                <option value="Pune">Pune</option>
                 <option value="Chennai">Chennai</option>
                  <option value="Kochi">Kochi</option>
                   <option value="Pune">Pune</option>
                    <option value="Mumbai">Mumbai</option>
                     <option value="Delhi">Delhi</option>
                      <option value="Ahemdabad">Ahmedabad</option>
                        <option value="Indore">Indore</option>
                        <option value="Gurgaon">Gurgaon</option>
                   <option value="Chandigarh">Chandigarh</option>
                    <option value="Kolkata">Kolkata</option>
                     <option value="Lucknow">Lucknow</option>
                   
                
        </select>


           <select   onChange={handleChange}  name="jobtype" value={jobCriteria.jobtype} className="w-54 py-3 pl-4 bg-zinc-100 font-semibold rounded-md text-black">
            <option value="" > Job Type</option>
            <option value="Full-Time">Full-Time</option>
               <option value="Part-Time">Part-Time</option>
                    <option value="Contract">Contract</option>
              
                
        </select>


   <select   onChange={handleChange} name="workmode" value={jobCriteria.workmode}  className="w-54 py-3 pl-4 bg-zinc-100 font-semibold rounded-md text-black">
            <option value=""  > Work Mode </option>
            <option value="Remote">Remote</option>
               <option value="In-Office">In-Office</option>
                    <option value="Hybrid">Hybrid</option>
              
                
        </select>


  <button onClick={search} className="w-30 text-white bg-blue-500 font-bold rounded-md hover:translate-y-1 hover:scale-103" >Search </button>
   <button onClick={clearSearch} className="w-30 text-white bg-blue-500 font-bold rounded-md hover:translate-y-1 hover:scale-103" >Clear Search </button>   
    </div>



    </div>
  )
}

export default Search

