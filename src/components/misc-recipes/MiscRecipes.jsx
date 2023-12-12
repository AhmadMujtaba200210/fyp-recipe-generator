import React from 'react'
import "../../shared/navigationbar.css"

const MiscRecipes = () => {
  return (
    <div>
        <div class="widget fav-recipes nostylewt">
                {" "}
                
                <h2 class="w-bot-border">
                  <span>MISC</span> Recipes
                </h2>
                <div class="tabed">
                  <ul class="tabs clearfix">
                    <li class="current">
                      Recipies<span></span>
                    </li>
                  </ul>
                  <div class="block current">
                    <ul class="highest">
                      <li>
                        <a href="recipe-single-1.html" class="img-box">
                          <img
                            src="/src/assets/images/demo/7a0a46455c4ec56a5a02c097374fc513-63x53.jpg"
                            class="attachment-sidebar-tabs wp-post-image"
                            alt="7a0a46455c4ec56a5a02c097374fc513"
                          />
                        </a>
                        <h5>
                          {" "}
                          <a href="recipe-single-1.html">
                            Chocolate Earl Grey Pots de Creme Recipe
                          </a>
                        </h5>
                      </li>
                    </ul>
                  </div>
                </div>

              </div>
              
    </div>
  )
}

export default MiscRecipes