import ButtonPage from './buttonPage'
import React from 'react'


const contact = () =>   {
  const btns = [
    { nameBtn: 'Gửi' }
  ]

  return (
    <>
    <section className="contact" id="contact">
  <h2 className="heading">Liên hệ với <span>tôi!</span> </h2>
  <form action>
    <div className="input-box">
      <input type="text" placeholder="Tên đầy đủ" />
      <input type="email" placeholder="Địa chỉ email" />
    </div>
    <div className="input-box">
      <input type="number" placeholder="Số điện thoại" />
      <input type="text" placeholder="Email subject" />
    </div>
    <textarea name id cols={30} rows={10} placeholder="Your mesenger" defaultValue={""} />
    <div className="btn">
      <ButtonPage btns={btns}/>
    </div>
  </form>
</section>

    </>
     )
    }
    
    export default contact