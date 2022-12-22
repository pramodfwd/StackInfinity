import { connect } from "react-redux";

import Header from "../Component/Header";

const mapStateToProps = state =>({
  data:state.carditmes

})

const mapDispatchToProps = dispatch =>({
   
}) 

export default connect(mapStateToProps,mapDispatchToProps)(Header)


