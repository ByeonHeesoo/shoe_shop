import Item from './Item.js';

function Home(props) {
  return (
    <>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          {props.shoes.map((item, i) => {
            return (
              <Item shoes={props.shoes[i]} i={i+1}></Item>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home;