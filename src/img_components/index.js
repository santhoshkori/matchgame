import './index.css'

const Imgcompo = props => {
  const {myimgdetails, getImgurl} = props
  const {id, imageUrl, category} = myimgdetails

  const returnimgurl = () => {
    getImgurl(id)
  }

  return (
    <li>
      <img
        src={imageUrl}
        alt={category}
        onClick={returnimgurl}
        className="allimgsty"
      />
    </li>
  )
}

export default Imgcompo
