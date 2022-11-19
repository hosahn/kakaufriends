import { app } from "./src/app.js";
import "./src/config/env.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Started at : http://localhost:${PORT}`);
});
