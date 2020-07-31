import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
export default (() => {
	return <Theme theme={theme}>
		<Link href="#">
			Some text
		</Link>
	</Theme>;
});