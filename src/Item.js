function Item (props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"} alt="이미지" width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>제조국 : {props.shoes.content}</p>
      <p>{props.shoes.price}원</p>
    </div>
  )

}

export default Item;