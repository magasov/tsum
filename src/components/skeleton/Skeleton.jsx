import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={289}
    height={530}
    viewBox="0 0 289 530"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="289" height="370" /> 
    <rect x="73" y="379" rx="0" ry="0" width="125" height="34" /> 
    <rect x="47" y="421" rx="0" ry="0" width="184" height="34" /> 
    <rect x="60" y="465" rx="0" ry="0" width="147" height="34" />
  </ContentLoader>
)

export default Skeleton