import React from "react";
import { Discuss } from  'react-loader-spinner'


function Loader() {
  return <Discuss
  visible={true}
  height="90"
  width="90"
  ariaLabel="comment-loading"
  wrapperStyle={{}}
  wrapperClass="comment-wrapper"
  color="#fff"
  backgroundColor="#F4442E"
/>;
}

export default Loader;