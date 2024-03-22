import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { FilterProvider } from "./context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<FilterProvider>
				<Toaster position="top-right" />
				<App />
			</FilterProvider>
		</BrowserRouter>
	</React.StrictMode>
);
