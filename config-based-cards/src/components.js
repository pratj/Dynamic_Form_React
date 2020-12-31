import React from "react";
import Card from "./components/Card";

export default (card, index) => {
    return React.createElement(Card, {
        key: index,
        card: card
    })
}

// export default (card, index) => {
//   if (typeof Components[card.component] !== "undefined") {
//     return React.createElement(Components[card.component], {
//       key: block._uid,
//       block: block
//     });
//   }
// };