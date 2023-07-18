import { HeroImage, HeroImgPicture, HeroSubtitle, StyledButton, Title } from "./Hero.styled";
import heroImg from '../../img/hero-img.jpg'
export const Hero = () => { 
    return (
        <>
            <Title> Make your dream business goal come true </Title>
            <HeroSubtitle>when you need us for improve your business, then come with us to help your business have reach it, you just sit and feel that goal.</HeroSubtitle>
            <StyledButton>Start Project</StyledButton>
            <div>
                <HeroImgPicture>
                    <HeroImage src={ heroImg } alt="group fo people sitting behind the desk" />
                </HeroImgPicture>
            </div>
        </>
    )
};