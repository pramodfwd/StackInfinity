import { connect } from "react-redux";
import { addToCart, removeToCart } from "../Service/Actions/action";
import Home from "../Component/Home";


const mapStateToProps = state => ({
  data: state.carditmes

})

const mapDispatchToProps = dispatch => ({
  addToCartHandler: data => dispatch(addToCart(data)),
  removeToCartHandler: data => dispatch(removeToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)


