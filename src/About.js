import ButtonPage from './buttonPage';
import React from 'react'

const About = () => {
  const btns = [
    { nameBtn: 'More' }
  ];
  
  return(
    <>
            <section class="about" id="about">
        <div class="about-img">
            <img src="Images/me2.jpg" alt=""/>
          </div>
          <div class="about-content"> 
            <h2 class="heading"><span>Về</span> tôi</h2>
            <br/>
            <br/>
            <h3>Mục tiêu nghề nghiệp</h3>
            <p>Tìm kiếm công việc lập trình viên trong môi trường chuyên nghiệp, nhiều thử thách. Đây là động lực nhằm thúc đẩy phát huy năng lực của bản thân trong việc phát triển các sản phẩm phần mềm chất lượng cao.
            </p>

            <h3>Kinh nghiệm</h3>
            <p>Xây dựng phát triển website và mobile app.
              <br/>Có kỹ năng thu thập và phân tích yêu cầu nhằm đưa ra giải pháp giải quyết các vấn đề. Từ đó đạt được mục tiêu phần mềm với người dùng trên cơ sở thảo luận và thương lượng.
              <br/>Database: MySQL.
              <br/>Technologies: C#, .Net, Power Platform.
              </p>

            <h3>Học vấn</h3>
            <p>Đại học Văn Lang - TP HCM
              <br/> <span>Cử nhân Công nghệ thông tin (2019 - 2023)</span>
            </p>

            <h3>Kỹ năng mềm</h3>
            <p>Làm việc nhóm
              <br/>Giao tiếp với mọi người
              <br/>Tư duy phản biện
            </p>
            <div className="btn">
              <ButtonPage btns={btns}/>
            </div>
          </div>
    </section>
    </>
  )
}

export default About;