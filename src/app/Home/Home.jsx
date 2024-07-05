'use client';
import Image from "next/image";
import icon from '../images/Icons.png'
import white_icon from "../images/white-Icon.png";
import illustration from "../images/Illustration.png";
import dot from "../images/Dot.png";
import logo from "../images/Logo.png";
import logo_1 from "../images/Logo (1).png";
import logo_2 from "../images/Logo (2).png";
import logo_3 from "../images/Logo (3).png";
import logo_4 from "../images/Logo (4).png";
import logo_5 from "../images/Logo (5).png";
import logo_6 from "../images/Logo (6).png";
import member_icon from "../images/member.png";
import nation_icon from "../images/nation.png";
import club_icon from "../images/club.png";
import Illustration_1 from "../images/Illustration_1.png";
import member_pin from "../images/member-pin.png";
import club_pin from "../images/club-pin.png";
import event_pin from "../images/event-pin.png";
import payment_pin from "../images/payment-pin.png";
import pana from "../images/pana.png";
import black from "../images/bold.png";
import right_arrow from "../images/Right.png";
import right_arrow_white from "../images/Right-white.png";
import one from "../images/image 18.png";
import two from "../images/image 19.png";
import three from "../images/image 20.png";
import instagram from "../images/instagram.png";
import dribble from "../images/dribble.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import send_icon from "../images/send.png";
import { useState } from "react";

const Home = () => {
  
const [menu, Setmenu] = useState(false);

const handleMenu = ()=> {
  Setmenu(!menu)
}

  return (
    <div>
      <header className="bg-[#F5F7FA] pb-4">
        <div className="flex mx:fixed bg-[#F5F7FA] mx:shadow-md mx:pb-4 justify-between px-28 py-4 mx:flex-col mx:px-0 mx:py-0 mx:pl-8 mx:pt-4">
          <div className="flex mt-1 mx:mt-2 mx:justify-between mx:pr-8">
            <div className="flex gap-1">
              <div>
                <Image src={icon} alt="Icon" className="mx:w-[100%] mx:mt-[1px]"/>
              </div>
              <p className="text-xl font-bold">Nexcent</p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 50 50"
              className="fill-[#4CAF4F] w-8 mx:w-7 hidden mx:block mx:ml-[12rem]"
              id="burger"
           onClick={handleMenu} >
              <path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
            </svg>
          </div>

          <ul
            className="flex gap-8 mt-[6px] mx:flex-col mx:items-center mx:justify-center mx:gap-5 mx:hidden"
            id="menu"
          >
            
            <li>
              <a href="#home" className="custom-link text-sm font-medium text-white mx:font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#service" className="custom-link text-sm font-medium text-white mx:font-semibold" onClick={handleMenu}>
                Service
              </a>
            </li>
            <li>
              <a href="#feature" className="custom-link text-sm font-medium text-white mx:font-semibold">
                Feature
              </a>
            </li>
            <li>
              <a href="#product" className="custom-link text-sm font-medium text-white mx:font-semibold">
                Product
              </a>
            </li>
            <li>
              <a href="#testimonial" className="custom-link text-sm font-medium text-white mx:font-semibold">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#FAQ" className="custom-link text-sm font-medium text-white mx:font-semibold">
                FAQ
              </a>
            </li>
          </ul>

          <div className="flex gap-4 mx:items-center mx:justify-center mx:mt-5 mx:hidden">
            <button className="text-sm font-semibold text-[#4CAF4F] mx:text-[#4CAF4F] mx:bg-white mx:p-2 mx:rounded-md mx:w-[6rem] mx:hover:text-white mx:hover:bg-[#4CAF4F] mx:border-[#4CAF4F] mx:border">
              Login
            </button>
            <button className="text-sm font-medium text-white bg-[#4CAF4F] p-2 rounded-md w-[5.5rem] hover:text-[#4CAF4F] hover:bg-white hover:border-[#4CAF4F] hover:border">
              Sign up
            </button>
          </div>
        </div>

           <div className={`${menu ? 'show-nav' : ''} mx:mt-[4.4rem] hidden gap-8 mt-[6px] mx:flex-col mx:items-center mx:justify-center nav mx:gap-5 mx:flex`}>
        <ul id="menu">
       
        <svg className="fill-[#ffffff] ml-[19.5rem] pt-1 w-8 mx:w-7 hidden mx:block" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" id="burger" onClick={handleMenu}><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="white"></path> </g></svg>

            <li>
              <a href="#home" className="custom-link text-sm font-medium text-white mx:font-semibold">
                Home
              </a>
            </li>
            <li>
              <a href="#service" className="custom-link text-sm font-medium text-white mx:font-semibold">
                Service
              </a>
            </li>
            <li>
              <a href="#feature" className="custom-link text-sm font-medium text-white mx:font-semibold">
                Feature
              </a>
            </li>
            <li>
              <a href="#product" className="custom-link text-sm font-medium text-white mx:font-semibold">
                Product
              </a>
            </li>
            <li>
              <a href="#testimonial" className="custom-link text-sm font-medium text-white mx:font-semibold">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#FAQ" className="custom-link text-sm font-medium text-white mx:font-semibold">
                FAQ
              </a>
            </li>
            <li className="flex items-center justify-center gap-6">
            {/* <div className="flex mx:items-center mx:justify-center mx:mt-5 mx:block"> */}
            <button className="text-sm font-semibold text-[#4CAF4F] mx:text-[#4CAF4F] mx:bg-white mx:p-2 mx:rounded-md mx:w-[6rem] mx:hover:text-white mx:hover:bg-[#4CAF4F] mx:border-[#4CAF4F] mx:border">
              Login
            </button>
            <button className="text-sm font-medium text-[#4CAF4F] bg-white p-2 rounded-md w-[5.5rem] hover:text-[#4CAF4F] hover:bg-white hover:border-[#4CAF4F] hover:border">
              Sign up
            </button>
          {/* </div> */}
          </li>
          </ul>
          
          </div>

                  <div className="flex mt px-28 justify-between py-20 mx:flex-col mx:py-0 mx:px-0 mx:items-center mx:justify-center">
                  <div className="flex flex-col gap-6 mt-20 mx:items-center mx:justify-center">
                    <p className="text-[58px] leading-none font-semibold text-[#4D4D4D] mx:text-center mx:text-[40px] mx:leading-none">
                      Lessons and insights <br /> <span className="text-[#4CAF4F]">from 8 years</span>
                    </p>
                    <p className="text-sm font-medium text-[#717171] mx:text-center mx:text-xs mx:font-semibold">
                      Where to grow your business as a photographer: site or social media?
                    </p>
                    <button className="text-sm font-medium text-white bg-[#4CAF4F] p-4 rounded-md w-[8rem] hover:text-[#4CAF4F] hover:bg-white hover:border-[#4CAF4F] hover:border">
                      Register
                    </button>
                  </div>
                  <Image src={illustration} className="mx:w-[50%] mx:mt-10" alt="Illustration" />
                </div>


        <div className="flex justify-center items-center mx:mt-4">
          <Image src={dot} alt="Dot" />
          </div>
      </header>

        <div className="flex flex-col gap-2 items-center py-4" id="home">
      <p className="text-3xl font-semibold">Our Clients</p>
      <p className="text-sm font-medium text-[#717171] mx:text-xs mx:font-semibold">We have been working with some Fortune 500+ clients</p>
      </div>

    <div className="flex px-28 justify-between py-4 mx:px-8 mx:py-0 mx:grid mx:grid-cols-3 mx:grid-rows-2 mx:pt-4 mx:ml-12">
      <Image src={logo}/>
      <Image src={logo_1}/>
      <Image src={logo_2}/>
      <Image src={logo_3}/>
      <Image src={logo_4}/>
      <Image src={logo_5}/>
      <Image src={logo_6} className="mx:hidden"/>
      </div>

        <div className="flex flex-col gap-2 items-center py-4 pt-8" id="service">
      <p className="text-4xl font-semibold text-center mx:text-2xl">Manage your entire community <br /> in a single system</p>
      <p className="text-sm font-medium text-[#717171]">Who is Nexcent suitable for?</p>
      </div>

        <div className="flex px-28 justify-between pt-4 pb-20 mx:flex-col mx:items-center mx:justify-center mx:pb-10">
        <div className="flex flex-col gap-2 border border-white py-4 px-4 rounded-md border-t-white justify-center items-center shadow-md mx:w-[20rem] mx:mb-8">
      <Image src={member_icon}/>
      <p className="text-2xl font-semibold text-center">Membership <br /> Organisations</p>
      <p className="text-sm font-medium text-[#717171] text-center">Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
      </div>

        <div className="flex flex-col gap-2 border py-4 px-4 rounded-md border-t-white border-white justify-center items-center shadow-md mx:w-[20rem] mx:mb-8">
      <Image src={nation_icon}/>
      <p className="text-2xl font-semibold text-center">National <br /> Associations</p>
      <p className="text-sm font-medium text-[#717171] text-center">Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
      </div>

        <div className="flex flex-col gap-2 border py-4 px-4 rounded-md border-t-white border-white justify-center items-center shadow-md mx:w-[20rem]">
      <Image src={club_icon}/>
      <p className="text-2xl font-semibold text-center">Clubs And <br /> Groups</p>
      <p className="text-sm font-medium text-[#717171] text-center">Our membership management <br /> software provides full automation of <br /> membership renewals and payments</p>
      </div>
      </div>


        <div className="flex px-[6rem] justify-between pb-4 mx:flex-col mx:px-0 mx:pb-8" id="feature">
      <Image src={Illustration_1}/>

        <div className="flex flex-col gap-4 mt-24 mx:justify-center mx:items-center mx:mt-0">
      <p className="text-4xl font-semibold mx:text-center mx:text-2xl">The unseen of spending three <br /> years at Pixelgrade</p>
      <p className="text-sm font-medium text-[#717171] mx:text-center mx:text-[0.8rem] leading-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br />  accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed <br /> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br /> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
      <button className="text-sm font-medium text-white bg-[#4CAF4F] p-3 rounded-md w-[9rem] hover:text-[#4CAF4F] hover:bg-white hover:border-[#4CAF4F] hover:border">
            Learn More
          </button>
          </div>
          </div>

            <div className="flex px-28 justify-between bg-[#F5F7FA] py-10 mx:flex-col mx:px-0 mx:justify-center mx:items-center mx:gap-10">
            <div className="flex flex-col gap-1 mt-4">
          <p className="text-4xl font-semibold text-[#4D4D4D] mx:text-center mx:text-2xl">Helping a local <br /> <span className="text-[#4CAF4F]">business reinvent itself</span></p>
          <p className="text-[16px] leading-tight font-medium text-[#18191F] mx:text-center mx:text-[13px]">We reached here with our hard work and dedication</p>
          </div>

        <div className="flex gap-20 mx:flex-col mx:gap-6">
        <div className="flex flex-col gap-6">
        <div className="flex gap-4">
        <Image src={member_pin}/>
        <div className="flex flex-col">
        <p className="text-xl font-bold text-[#4D4D4D]">2,245,341</p>
        <p className="text-[13px] leading-tight font-medium text-[#18191F]">Members</p>
        </div>
        </div>

        <div className="flex gap-4">
        <Image src={event_pin}/>
        <div className="flex flex-col">
        <p className="text-xl font-bold text-[#4D4D4D]">828,867</p>
        <p className="text-[13px] leading-tight font-medium text-[#18191F]">Event Bookings</p>
        </div>
        </div>
        </div>


        <div className="flex flex-col gap-6">
        <div className="flex gap-4">
        <Image src={club_pin}/>
        <div className="flex flex-col">
        <p className="text-xl font-bold text-[#4D4D4D]">46,328</p>
        <p className="text-[13px] leading-tight font-medium text-[#18191F]">Clubs</p>
        </div>
        </div>

        <div className="flex gap-4">
        <Image src={payment_pin}/>
        <div className="flex flex-col">
        <p className="text-xl font-bold text-[#4D4D4D]">1,926,436</p>
        <p className="text-[13px] leading-tight font-medium text-[#18191F]">Payments</p>
        </div>
        </div>
        </div>
        </div>
        </div>

        <div className="flex py-8 px-24 justify-between mx:flex-col mx:px-0 mx:items-center mx:justify-center" id="product">
        <Image src={pana} className="mx:w-[80%]"/>
        <div className="flex flex-col gap-4 mt-20 mx:items-center mx:justify-center mx:mt-10">
      <p className="text-4xl font-semibold mx:text-center mx:text-3xl">How to design your site footer like <br /> we did</p>
      <p className="text-sm font-medium text-[#717171] mx:text-center mx:text-xs">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt <br /> molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at <br /> libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br /> nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer <br /> in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi <br /> ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
      <button className="text-sm font-medium text-white bg-[#4CAF4F] p-3 rounded-md w-[9rem] hover:text-[#4CAF4F] hover:bg-white hover:border-[#4CAF4F] hover:border">
            Learn More
          </button>
          </div>
          </div>

        <div className="flex px-28 justify-between bg-[#F5F7FA] mt-1 py-8 mx:flex-col mx:px-0 mx:items-center mx:justify-center" id="testimonial">
          <Image src={black} className="mx:w-[70%]"/>

        <div className="flex flex-col gap-6 mt-4 mx:items-center mx:justify-center">
          <p className="text-sm font-medium text-[#717171] mx:text-center mx:text-xs">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus <br /> tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida <br /> enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie <br /> mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse <br /> eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, <br /> vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum <br /> id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>

            <div className="flex flex-col gap-1 mx:pb-2">
          <p className="text-xl font-semibold text-[#4CAF4F] mx:text-center">Tim Smith</p>
          <p className="text-base font-normal text-gray-400 mx:text-center">British Dragon Boat Racing Association</p>
          </div>


        <div className="flex gap-12 mx:flex-col">
        <div className="flex gap-8 mx:grid mx:grid-cols-3 mx:grid-rows-2">
        <Image src={logo}/>
      <Image src={logo_1}/>
      <Image src={logo_2}/>
      <Image src={logo_3}/>
      <Image src={logo_4}/>
      <Image src={logo_5}/>
      </div>

        <div className="flex gap-2 mt-3 mx:items-center mx:justify-center mx:mt-0">
      <p className="text-base font-bold text-[#4CAF4F]">Meet all customers</p>
      <div>
      <Image src={right_arrow}/>
      </div>
      </div>
      </div>
      </div>
      </div>

        <div className="flex flex-col gap-3 pt-12 items-center" id="FAQ">
      <p className="text-4xl font-semibold mx:text-center mx:text-3xl">Caring is the new marketing</p>
      <p className="text-sm font-medium text-[#717171] text-center mx:text-xs">The Nexcent blog is the best place to read about the latest membership insights, <br /> trends and more. See who&apos;s joining the community, read about how our community <br /> are increasing their membership income and lot&apos;s more.​</p>
      </div>

        <section className="flex px-28 justify-between pt-4 pb-40 mx:flex-col mx:px-0 mx:gap-28 mx:items-center mx:justify-center mx:pt-10">
        <div className="relative">
      <Image src={one}/>
      <div className="flex flex-col gap-4 bg-[#F5F7FA] items-center justify-center py-4 px-4 rounded-lg shadow-lg absolute top-52 left-10">
      <p className="text-lg font-semibold text-[#717171] text-center">Creating Streamlined <br /> Safeguarding Processes with <br /> OneRen</p>
      <div className="flex gap-2">
      <p className="text-base font-bold text-[#4CAF4F]">Read More</p>
      <div>
      <Image src={right_arrow}/>
      </div>
      </div>
      </div>
      </div>


      <div className="relative">
      <Image src={two}/>
      <div className="flex flex-col gap-4 bg-[#F5F7FA] items-center justify-center py-4 px-4 rounded-lg shadow-lg absolute top-52 left-11">
      <p className="text-lg font-semibold text-[#717171] text-center">What are your safeguarding <br /> responsibilities and how can <br /> you manage them?</p>
      <div className="flex gap-2">
      <p className="text-base font-bold text-[#4CAF4F]">Read More</p>
      <div>
      <Image src={right_arrow}/>
      </div>
      </div>
      </div>
      </div>

      <div className="relative">
      <Image src={three}/>
      <div className="flex flex-col gap-4 bg-[#F5F7FA] items-center justify-center py-4 px-4 rounded-lg shadow-lg absolute top-52 left-12">
      <p className="text-lg font-semibold text-[#717171] text-center">Revamping the Membership <br /> Model with Triathlon <br /> Australia</p>
      <div className="flex gap-2">
      <p className="text-base font-bold text-[#4CAF4F]">Read More</p>
      <div>
      <Image src={right_arrow}/>
      </div>
      </div>
      </div>
      </div>
      </section>

        <div className="flex flex-col gap-10 items-center justify-center bg-[#F5F7FA] py-10">
        <p className="text-5xl leading-tight text-[#263238] font-bold text-center mx:text-3xl">Pellentesque suscipit <br /> fringilla libero eu.</p>
      <div className="flex gap-1 text-sm font-medium text-white bg-[#4CAF4F] p-3 rounded-md w-[9rem] hover:text-[#4CAF4F] hover:bg-white hover:border-[#4CAF4F] hover:border items-center justify-center">
            <p>Get a Demo</p>
            <div><Image src={right_arrow_white} className="mt-[2px]"/></div>
          </div>
          </div>


        <footer className="bg-[#263238]">

            <div className="flex px-28 justify-between py-20 mx:flex-col mx:px-0 mx:items-center mx:justify-center mx:gap-10">
            <div className="flex flex-col gap-8">
          <div className="flex gap-2">
          <div>
            <Image src={white_icon} className="mt-1"/>
          </div>
          <p className="text-4xl text-white font-bold">Nexcent</p>
        </div>

        <p className="text-[#F5F7FA] leading-7 text-sm mx:text-center">Copyright © 2020 Nexcent ltd. <br /> All rights reserved</p>

        <div className="flex gap-5 mx:items-center mx:justify-center">
        <Image src={instagram}/>
        <Image src={dribble}/>
        <Image src={twitter}/>
        <Image src={youtube}/>
        </div>
        </div>

        <div className="flex gap-20 mx:gap-10 mx:flex-col">
            <div className="flex gap-20">
        <div className="flex flex-col gap-3 items-center justify-center mx:items-center mx:justify-center">
        <p className="text-xl font-semibold text-white pb-4">Company</p>
        <p className="text-sm font-medium text-[#dadcdd]">About us</p>
        <p className="text-sm font-medium text-[#dadcdd]">Blog</p>
        <p className="text-sm font-medium text-[#dadcdd]">Contact us</p>
        <p className="text-sm font-medium text-[#dadcdd]">Pricing</p>
        <p className="text-sm font-medium text-[#dadcdd]">Testimonials</p>
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mx:items-center mx:justify-center">
        <p className="text-xl font-semibold text-white pb-4">Support</p>
        <p className="text-sm font-medium text-[#dadcdd]">Help center</p>
        <p className="text-sm font-medium text-[#dadcdd]">Terms of service</p>
        <p className="text-sm font-medium text-[#dadcdd]">Legal</p>
        <p className="text-sm font-medium text-[#dadcdd]">Privacy policy</p>
        <p className="text-sm font-medium text-[#dadcdd]">Status</p>
        </div>
        </div>

        <div className="flex flex-col gap-4 mx:items-center mx:justify-center">
        <p className="text-xl font-bold text-white">Stay up to date</p>
        <div className="relative">
        <input type="email" placeholder="Your email address" className="bg-gray-600 p-2 placeholder:text-sm placeholder:font-medium placeholder:text-[#dadcdd] pl-3 rounded-lg text-white w-72 mx:w-60"/>
        <Image src={send_icon} className="absolute top-3 left-[16rem] mx:left-[13rem]"/>
        </div>
        </div>
        </div>
        </div>

        </footer>
    </div>
  );
};

export default Home;
