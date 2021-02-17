import { render } from "@test";

import data from "@public/meta.json";

import { Starter } from "./index";

describe("Cards component testing with testing-library", () => {
    it("renders without crashing", () => {
        const component = render(<Starter />);

        expect(component).toBeTruthy();
    });
});
