import PieChart from "../../../components/PieChart"
import ReportChart from "../../../components/ReportChart"

const Statistics = () => {
  return (
    <div className="text-black">
        <>
        <div className=" stats text-black bg-slate-200 shadow w-full">
  
  <div className="stat">
    <div className="stat-figure text-primary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
    </div>
    <div className="stat-title text-black">Total Likes</div>
    <div className="stat-value text-primary">25.6K</div>
    <div className="stat-desc text-black">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
    </div>
    <div className="stat-title text-black">Page Views</div>
    <div className="stat-value text-secondary">2.6M</div>
    <div className="stat-desc text-black">21% more than last month</div>
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
    </div>
    <div className="stat-value text-black">86%</div>
    <div className="stat-title text-black">Tasks done</div>
    <div className="stat-desc  text-secondary">31 tasks remaining</div>
  </div>
  
</div>
    <div className="grid grid-cols-8 gap-4">
      <div className=" col-span-5 mt-10 h-full">

<ReportChart></ReportChart>
      </div>
      <div className="col-span-3 mt-10"> 
    <PieChart></PieChart>
      </div>
    </div>
    </>
    </div>
  )
}

export default Statistics