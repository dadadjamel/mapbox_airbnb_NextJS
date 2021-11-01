import Image from "next/image"

const Infocard = ({place}) => {
    const {img, title, total} = place
    return (
        <div>
            <img src={img} />
            <h2>{title}</h2>
        </div>
    )
}

export default Infocard
