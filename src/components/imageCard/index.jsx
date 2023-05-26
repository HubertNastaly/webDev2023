import Image from '../image'
import Heading from '../heading';
import { Button } from '../button'
import Text from '../text';
import './index.css'


const ImageCard = ({image, heading, text, link}) => {
  return (
    <div className="imageCard">
      <Image src={image} alt={heading} className="imageCard__image"/>
      <div className='imageCard__content'>
        <Heading level={3}>{heading}</Heading>
        <Text className="imageCard__text"> {text} </Text>
        <Button link={link} variant="plain" size="small" weight="heavy">Read More</Button>
      </div>
    </div>
  )
};

export default ImageCard;
