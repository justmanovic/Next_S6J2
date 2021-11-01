import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function DayNightBtn() {
  const ctx = useContext(ThemeContext);

  return (
    <div>
      <button onClick={ctx.toggleMode}>
        {ctx.mode}{" "}
        {(ctx.mode === "Day" && <i class="fas fa-sun"></i>) || (
          <i class="fas fa-moon"></i>
        )}
      </button>
    </div>
  );
}
