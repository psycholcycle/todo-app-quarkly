import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Section inner-max-width="640px" background="--color-lightD1" padding="96px 0 96px 0" min-height="100vh">
			<Components.AppTodo />
		</Section>
	</Theme>;
});