import React from 'react'
import { BsGooglePlay } from 'react-icons/bs'
import { LuConstruction } from 'react-icons/lu'
import { MdBoy, MdConstruction } from 'react-icons/md'
import { deliveryboy, footer } from '../assets'
import './Styles/Footer.css'
import { FaWeixin} from 'react-icons/fa'
import {TbBrandTiktok} from "react-icons/tb";
import {XiaohongshuIcon} from "/src/components/Xiaohongshu.jsx"


function Footer() {
    return (
        <div>
            <div className='footer'>

                <div className='footer-list list-1'>
                    <h2  className="logo">WASP</h2>
                    <p>社交媒体</p>
                    <div className='icons'>
                        <h2>
                            <a href="https://www.douyin.com/user/MS4wLjABAAAAIBM4_Rjar-Go-KjrmrVQRWZYUCkUSkXAHVX4IQgnmrjJ21COVsQjWvx48TwIo03M" target="_blank" rel="noopener noreferrer">
                                <TbBrandTiktok />
                            </a>
                        </h2>
                        <h2>
                            <a href="https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MjM5NDgyODM5Ng==&scene=110#wechat_redirect" target="_blank" rel="noopener noreferrer">
                                <FaWeixin />
                            </a>
                        </h2>
                        <h2>
                            <a href="https://www.xiaohongshu.com/user/profile/6222c3fc00000000100097a7" target="_blank" rel="noopener noreferrer">
                                <XiaohongshuIcon />
                            </a>
                        </h2>
                    </div>
                </div>

                <div className='footer-list'>
                    <h2>联系方式</h2>
                    <p>+86 0571-86089000</p>
                    <p>微信公众号： 青蜂餐饮</p>
                </div>

                <div className='footer-list'>
                    <h2>三维店营业时间</h2>
                    <p>周一至周日 10：30 - 22：00</p>
                    <p>春节假期休息详细见公众号</p>
                </div>

                <div className='footer-list'>
                    <h2>江滨一号店营业时间 </h2>
                    <p>周一至周日 10：30 - 22：00</p>
                    <p>春节假期休息详细见公众号</p>
                </div>

            </div>
                <div className='footer-imgs'>
                    <img className='img-1' src={footer} />
                    <div className='footer-line'></div>
                </div>

                {/* <div className='credit'>
                <MdConstruction />  Website Under Construction! <LuConstruction />
                </div> */}
        </div>
    )
}

export default Footer