import React, {FunctionComponent} from "react";

interface OwnProps {}

type Props = OwnProps;

const AboutPage: FunctionComponent<Props> = props => {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid animi delectus
      dolores ea exercitationem impedit libero nam natus pariatur, repellendus temporibus voluptas!
      Cumque dolores facere libero repellendus rerum, suscipit!
    </div>
  );
};

export default AboutPage;
