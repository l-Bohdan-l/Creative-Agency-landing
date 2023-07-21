import { MainParagraph, MainTitle, SubTitle } from "./Portfolio.styled";

export default function Portfolio() {
  return (
    <section>
      <MainTitle>Our Portfolio</MainTitle>
      <SubTitle>What do we do</SubTitle>
      <MainParagraph>
        all projects that we have already done , proven can help to use more
        comfortable, then can used by client from our business
      </MainParagraph>
      <ul>
        <li>
          <img src="" alt="" />
          <span></span>
        </li>
        <li>
          <img src="" alt="" />
          <span></span>
        </li>
        <li>
          <img src="" alt="" />
          <span></span>
        </li>
      </ul>
    </section>
  );
}
