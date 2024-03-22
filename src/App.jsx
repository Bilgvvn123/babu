import { useState } from "react";
import "./App.css";
import toast from "react-hot-toast";
import AllRoutes from "./routes/AllRoutes";
import { Footer, Header } from "./components";

function App() {
	return (
		<>
			<Header />
			<AllRoutes />
			<Footer />
		</>
	);
}

export default App;
