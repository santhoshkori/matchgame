import './index.css'

const Imgcompo = props => {
  const {myimgdetails} = props
  const {id, imageUrl, category} = myimgdetails

  return <img src={imageUrl} alt={category} className="allimgsty" />
}

export default Imgcompo
