import React from "react";

export default Share = () => {
  return (
    <div class="share">
      <a
        class="twitter"
        onclick="window.open('http://twitter.com/home?status=Pesto+Pizza+With+Roasted+Garlic+%26%23038%3B+Potato - http://www.960demo.com/foodrecipes-dev/recipe/pesto-pizza-with-roasted-garlic-potato/','twitter','width=450,height=300,left='+(screen.availWidth/2-375)+',top='+(screen.availHeight/2-150)+'');return false;"
        href="http://twitter.com/home?status=Pesto+Pizza+With+Roasted+Garlic+%26%23038%3B+Potato%20-%20http://www.960demo.com/foodrecipes-dev/recipe/pesto-pizza-with-roasted-garlic-potato/"
        title="Pesto Pizza With Roasted Garlic &#038; Potato"
        target="960development"
      ></a>
      <a
        class="facebook"
        onclick="window.open('http://www.facebook.com/share.php?u=http://www.960demo.com/foodrecipes-dev/recipe/pesto-pizza-with-roasted-garlic-potato/','facebook','width=450,height=300,left='+(screen.availWidth/2-375)+',top='+(screen.availHeight/2-150)+'');return false;"
        href="http://www.facebook.com/share.php?u=http://www.960demo.com/foodrecipes-dev/recipe/pesto-pizza-with-roasted-garlic-potato/"
        title="Pesto Pizza With Roasted Garlic &#038; Potato"
        target="960development"
      ></a>
      <a
        class="google"
        href="https://m.google.com/app/plus/x/?v=compose&amp;content=Pesto+Pizza+With+Roasted+Garlic+%26%23038%3B+Potato%20-%20http://www.960demo.com/foodrecipes-dev/recipe/pesto-pizza-with-roasted-garlic-potato/"
        onclick="window.open('https://m.google.com/app/plus/x/?v=compose&amp;content=Pesto+Pizza+With+Roasted+Garlic+%26%23038%3B+Potato - http://www.960demo.com/foodrecipes-dev/recipe/pesto-pizza-with-roasted-garlic-potato/','gplusshare','width=450,height=300,left='+(screen.availWidth/2-375)+',top='+(screen.availHeight/2-150)+'');return false;"
      ></a>
      <a class="print" href="javascript:window.print()" title="Print"></a>
      <a
        href="http://pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.960demo.com%2Ffoodrecipes-dev%2Frecipe%2Fpesto-pizza-with-roasted-garlic-potato%2F%26media=http://www.960demo.com/foodrecipes-dev/wp-content/uploads/2012/03/Pesto-Pizza-with-Roasted-Garlic-Potato2.jpg%26description=Pesto Pizza With Roasted Garlic &#038; Potato"
        class="pin-it-button"
        count-layout="none"
      >
        <img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" />
      </a>
    </div>
  );
};
