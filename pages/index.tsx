import React, { useState } from "react";

import { Wrapper, Starter } from "@components";
import GlobalStyle from "@styles/globalStyles";

const Home: React.FC = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <Starter />
        </Wrapper>
    );
};
export default Home;
