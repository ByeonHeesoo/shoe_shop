import {Outlet} from 'react-router-dom';

function About() {
  return (
    <>
      <div>어바웃 페이지</div>
      <Outlet></Outlet>
    </>
  )
}

export default About;