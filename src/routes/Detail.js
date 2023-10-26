import {useParams} from 'react-router-dom';


function Detail (props) {

  let {id} = useParams();
  let data = props.shoes.find((element) => element.id == id) // 상품의 id값과 /:id 자리에 입력한 값이 같은 것

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} alt="이미지" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{data.title}</h4>
          <p>{data.content}</p>
          <p>{data.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  )
}

export default Detail;