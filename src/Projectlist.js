import { AiOutlineAppstore } from "react-icons/ai";

function Projectlist (){
    return(
        <div class="Projectlist">
            <section class="project" id="project">
        <h2 class="heading"> <span>Dự án</span> gần nhất </h2>
        <div class="project-container">
          <div class="project-box">
            <img src="Image/project-image/project_Teaching.png" alt=""/>
            <div class="project-layer">
              <h4>Teaching assignment management              </h4>
              <p>Build a website help assign instructors to teach courses on the timetable and view the timetable. 
                <br/>- Role: Development
                <br/>- Technologies: ASP.NET, MS SQL Server database
                <br/>- Team size: 6. 
                <br/>- Tool: Git, Visual Studio, Microsoft Office 365 . 
                <br/>- Platform: web</p>
              <a href=""><i class='bx'><AiOutlineAppstore /></i></a>
            </div>
          </div>
    
          <div class="project-box">
            <img src="Image/project-image/project_band.png" alt=""/>
            <div class="project-layer">
              <h4>The Band</h4>
              <p>Build a website help manage the band and book concert tickets.
                <br/>- Role: Development
                <br/>- Technologies: ASP.NET.
                <br/>- Team size: 1. 
                <br/>- Tool: Visual Studio, Microsoft Office 365 . 
                <br/>- Platform: web
              </p>
              <a href=""><i class='bx'> <AiOutlineAppstore /> </i></a>
            </div>
          </div>
    
          <div class="project-box">
            <img src="Image/project-image/project_portfolio.png" alt=""/>
            <div class="project-layer">
              <h4>Portfolio</h4>
              <p>Build personal website.
                <br/>- Role: Development
                <br/>- Technologies: ASP.NET.
                <br/>- Team size: 1. 
                <br/>- Tool: Visual Studio, Microsoft Office 365 . 
                <br/>- Platform: web
              </p>
              <a href=""><i class='bx'> <AiOutlineAppstore /> </i></a>
            </div>
        </div>
          </div>
      </section>
        </div>
                
    )
}

export default Projectlist;