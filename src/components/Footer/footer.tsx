import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";

const Footer = () => {
    return (
        <div className='footer' style={{width: '100%', backgroundColor: '#371A0D', height: '200px'}}>
            <div className="row w-100 list-mb16 list-crop align-items-end" style={{height: '100%', justifyContent: 'space-between', width: '100%'}}>
            <div className='col-12 col-lg-3 row'>
                <h3 className='line'>Liên hệ chúng tôi</h3>
                <div className='line'>
                <span><CiLocationOn /> </span>
                <span>103 P. Trịnh Công Sơn, Nhật Tân, Tây Hồ, Hà Nội, Việt Nam</span>
                </div>
                <div className='line'>
                <span><MdOutlineLocalPhone /> </span>
                <span>+84 976 620 578</span>
                </div>
            </div>
            <div className='col-12 col-lg-3'>
                <h3 className='line'>Links</h3>
                <div className='line'><a href='/' style={{color: 'white'}}>Thực đơn</a></div>
                <div className='line'><a href='/' style={{color: 'white'}}>Đặt bàn</a></div>
                <div className='line'><a href='/' style={{color: 'white'}}>Liên hệ chúng tôi</a></div>
            </div>
            <div className='col-12 col-lg-3'>
                <div className="col-12 col-auto justify-content-center form-footer">
                <div className="avatar-img">
                    <img src={`/media/img/logo.png`} alt="" className=""/>
                </div>
                <div className="row">
                    <div className="col-auto" style={{marginLeft: "-12px"}}>
                        <button className="btn btn-light-primary btn-sm"
                                id="find-btn">
                            Đặt bàn
                        </button>
                    </div>
                    <div className="col-auto">
                        <button type="button" className="btn btn-warning btn-sm" id="find-btn">
                            Xem Thực đơn & Đặt món
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Footer;