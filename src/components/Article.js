import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: Calculate the number of emojis
  const coffeeCups = Math.ceil(minutes / 5);
  const bentoBoxes = Math.ceil(minutes / 10);
  const minutesRead = minutes < 30 ? "☕️".repeat(coffeeCups) : "🍱".repeat(bentoBoxes);

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {minutesRead} {minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
